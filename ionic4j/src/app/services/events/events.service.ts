import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  private event: any;
  constructor(public apiService: ApiService) {}

  createEvent(accountInfo: any) {
    return this.apiService.post('register', accountInfo, { responseType: 'text' as 'text' }).pipe(share());
  }
}
