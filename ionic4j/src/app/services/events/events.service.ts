import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  constructor(public apiService: ApiService) {}

  create(event) {
    return this.apiService.post('events', event, { observe: 'response' });
  }
}
