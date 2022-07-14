import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { IPosesion, Posesion } from '../posesion.model';
import { PosesionService } from '../service/posesion.service';

@Injectable({ providedIn: 'root' })
export class PosesionRoutingResolveService implements Resolve<IPosesion> {
  constructor(protected service: PosesionService, protected router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IPosesion> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        mergeMap((posesion: HttpResponse<Posesion>) => {
          if (posesion.body) {
            return of(posesion.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new Posesion());
  }
}
