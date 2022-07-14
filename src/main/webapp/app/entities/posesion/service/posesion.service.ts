import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import dayjs from 'dayjs/esm';

import { isPresent } from 'app/core/util/operators';
import { ApplicationConfigService } from 'app/core/config/application-config.service';
import { createRequestOption } from 'app/core/request/request-util';
import { IPosesion, getPosesionIdentifier } from '../posesion.model';

export type EntityResponseType = HttpResponse<IPosesion>;
export type EntityArrayResponseType = HttpResponse<IPosesion[]>;

@Injectable({ providedIn: 'root' })
export class PosesionService {
  protected resourceUrl = this.applicationConfigService.getEndpointFor('api/posesions');

  constructor(protected http: HttpClient, protected applicationConfigService: ApplicationConfigService) {}

  create(posesion: IPosesion): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(posesion);
    return this.http
      .post<IPosesion>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  update(posesion: IPosesion): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(posesion);
    return this.http
      .put<IPosesion>(`${this.resourceUrl}/${getPosesionIdentifier(posesion) as number}`, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  partialUpdate(posesion: IPosesion): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(posesion);
    return this.http
      .patch<IPosesion>(`${this.resourceUrl}/${getPosesionIdentifier(posesion) as number}`, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<IPosesion>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<IPosesion[]>(this.resourceUrl, { params: options, observe: 'response' })
      .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  addPosesionToCollectionIfMissing(posesionCollection: IPosesion[], ...posesionsToCheck: (IPosesion | null | undefined)[]): IPosesion[] {
    const posesions: IPosesion[] = posesionsToCheck.filter(isPresent);
    if (posesions.length > 0) {
      const posesionCollectionIdentifiers = posesionCollection.map(posesionItem => getPosesionIdentifier(posesionItem)!);
      const posesionsToAdd = posesions.filter(posesionItem => {
        const posesionIdentifier = getPosesionIdentifier(posesionItem);
        if (posesionIdentifier == null || posesionCollectionIdentifiers.includes(posesionIdentifier)) {
          return false;
        }
        posesionCollectionIdentifiers.push(posesionIdentifier);
        return true;
      });
      return [...posesionsToAdd, ...posesionCollection];
    }
    return posesionCollection;
  }

  protected convertDateFromClient(posesion: IPosesion): IPosesion {
    return Object.assign({}, posesion, {
      time: posesion.time?.isValid() ? posesion.time.toJSON() : undefined,
    });
  }

  protected convertDateFromServer(res: EntityResponseType): EntityResponseType {
    if (res.body) {
      res.body.time = res.body.time ? dayjs(res.body.time) : undefined;
    }
    return res;
  }

  protected convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
    if (res.body) {
      res.body.forEach((posesion: IPosesion) => {
        posesion.time = posesion.time ? dayjs(posesion.time) : undefined;
      });
    }
    return res;
  }
}
