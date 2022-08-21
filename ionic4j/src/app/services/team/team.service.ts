import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Team } from './team.model';
import { environment } from 'src/environments/environment';

export type EntityArrayResponseType = HttpResponse<Team[]>;
@Injectable({
  providedIn: 'root',
})
export class TeamService {
  constructor(public http: HttpClient, public apiService: ApiService) {}

  public static API_URL = environment.apiUrl;

  create(team) {
    return this.apiService.post('teams', team, { observe: 'response' });
  }
  get() {
    return this.http.get<Team[]>(ApiService.API_URL + '/teams', { observe: 'response' });
  }

  getById(id) {
    return this.http.get<Team>(ApiService.API_URL + '/teams/' + id, { observe: 'response' });
  }
  getByName(name) {
    return this.http.get<Team>(ApiService.API_URL + '/teams/' + name, { observe: 'response' });
  }
}
