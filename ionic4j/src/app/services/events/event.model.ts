import { Match } from 'src/app/services/match/match.model';
import { EventType } from './enumerations/event-type.model';

export class Event {
  public id?: number;
  public eventType?: EventType;
  public team?: boolean;
  public matchId?: number;
  public userId?: number;

  constructor(id?: number, eventType?: EventType, team?: boolean, matchId?: number, userId?: number) {
    this.id = id ? id : null;
    this.eventType = eventType ? eventType : null;
    this.team = team ? team : null;
    this.matchId = matchId ? matchId : null;
    this.userId = userId ? userId : null;
  }
}
