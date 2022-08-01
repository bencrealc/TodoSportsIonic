import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  constructor(public apiService: ApiService) {}

  create(team) {
    return this.apiService.post('teams', team, { observe: 'response' });
  }
}
