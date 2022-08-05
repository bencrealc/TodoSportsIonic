import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Posesion } from './posesion.model';

@Injectable({
  providedIn: 'root',
})
export class PosesionService {
  constructor(public http: HttpClient, public apiService: ApiService) {}

  create(posesion) {
    return this.apiService.post('posesions', posesion, { observe: 'response' });
  }

  query() {
    return this.apiService.get('posesions', null, { observe: 'response' });
  }

  getPosesion(id) {
    return this.http.get<Posesion[]>(ApiService.API_URL + '/posesions/match/' + id, { observe: 'response' });
  }

  close(posesion) {
    return this.apiService.post('posesions/close', posesion, { observe: 'response' });
  }

  change(posesion) {
    return this.apiService.post('posesions/change', posesion, { observe: 'response' });
  }
}
