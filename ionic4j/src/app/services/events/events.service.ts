import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Event } from './event.model';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  constructor(public http: HttpClient, public apiService: ApiService) {}

  create(event) {
    return this.apiService.post('events', event, { observe: 'response' });
  }

  getEvents(team, id) {
    return this.http.get<Event[]>(ApiService.API_URL + '/events/match/' + team + '/' + id, { observe: 'response' });
  }

  getUsers(id) {
    return this.http.get<number>(ApiService.API_URL + '/events/match/' + id, { observe: 'response' });
  }
}
