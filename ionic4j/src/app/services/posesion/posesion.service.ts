import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root',
})
export class PosesionService {
  constructor(public apiService: ApiService) {}

  create(posesion) {
    return this.apiService.post('posesions', posesion, { observe: 'response' });
  }

  close(posesion) {
    return this.apiService.post('posesions/close', posesion, { observe: 'response' });
  }

  change(posesion) {
    return this.apiService.post('posesions/change', posesion, { observe: 'response' });
  }
}
