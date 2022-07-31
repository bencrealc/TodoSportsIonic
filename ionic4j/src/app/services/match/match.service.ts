import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root',
})
export class MatchService {
  constructor(public apiService: ApiService) {}
  query() {
    return this.apiService.get('matches', null, { observe: 'response' });
  }
}
