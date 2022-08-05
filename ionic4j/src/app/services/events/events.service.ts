import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  constructor(public http: HttpClient, public apiService: ApiService) {}

  create(event) {
    return this.apiService.post('events', event, { observe: 'response' });
  }

  getEvents(id) {
    return this.http.get<Event[]>(ApiService.API_URL + '/events/match/' + id, { observe: 'response' });
  }
}
