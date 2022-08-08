import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Match } from './match.model';
import { environment } from 'src/environments/environment';

export type EntityArrayResponseType = HttpResponse<Match[]>;
@Injectable({
  providedIn: 'root',
})
export class MatchService {
  constructor(public http: HttpClient, public apiService: ApiService) {}

  public static API_URL = environment.apiUrl;

  get() {
    return this.http.get<Match[]>(ApiService.API_URL + '/matches', { observe: 'response' });
  }

  getMatchesFinished() {
    return this.http.get<Match[]>(ApiService.API_URL + '/matchesfinished', { observe: 'response' });
  }

  getMatchesToplay() {
    return this.http.get<Match[]>(ApiService.API_URL + '/matchestoplay', { observe: 'response' });
  }

  create(match) {
    return this.apiService.post('matches', match, { observe: 'response' });
  }
}
