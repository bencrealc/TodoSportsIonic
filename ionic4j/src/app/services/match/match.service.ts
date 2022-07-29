import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApplicationConfigService } from 'src/app/services/auth/application-config.service';
import { createRequestOption } from 'src/app/shared/util/request-util';
import { Match, getMatchIdentifier } from './match.model';

export type EntityResponseType = HttpResponse<Match>;
export type EntityArrayResponseType = HttpResponse<Match[]>;

@Injectable({ providedIn: 'root' })
export class MatchService {
  protected resourceUrl = this.applicationConfigService.getEndpointFor('api/matches');

  constructor(protected http: HttpClient, protected applicationConfigService: ApplicationConfigService) {}

  create(match: Match): Observable<EntityResponseType> {
    return this.http.post<Match>(this.resourceUrl, match, { observe: 'response' });
  }

  update(match: Match): Observable<EntityResponseType> {
    return this.http.put<Match>(`${this.resourceUrl}/${getMatchIdentifier(match) as number}`, match, { observe: 'response' });
  }

  partialUpdate(match: Match): Observable<EntityResponseType> {
    return this.http.patch<Match>(`${this.resourceUrl}/${getMatchIdentifier(match) as number}`, match, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<Match>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<Match[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
  /*
  addMatchToCollectionIfMissing(matchCollection: Match[], ...matchesToCheck: (Match | null | undefined)[]): Match[] {
    const matches: Match[] = matchesToCheck.filter(isPresent);
    if (matches.length > 0) {
      const matchCollectionIdentifiers = matchCollection.map(matchItem => getMatchIdentifier(matchItem)!);
      const matchesToAdd = matches.filter(matchItem => {
        const matchIdentifier = getMatchIdentifier(matchItem);
        if (matchIdentifier == null || matchCollectionIdentifiers.includes(matchIdentifier)) {
          return false;
        }
        matchCollectionIdentifiers.push(matchIdentifier);
        return true;
      });
      return [...matchesToAdd, ...matchCollection];
    }
    return matchCollection;
  }*/
}
