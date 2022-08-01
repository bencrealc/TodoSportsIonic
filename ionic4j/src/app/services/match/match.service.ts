import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiService } from '../api/api.service';
import { Match } from './match.model';
import * as dayjs from 'dayjs';
import { Observable } from 'rxjs';
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
}
