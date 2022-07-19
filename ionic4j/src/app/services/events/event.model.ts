import { Match } from 'src/app/services/match/match.model';
import { EventType } from './enumerations/event-type.model';

export class Event {
  public id?: number;
  public eventType?: EventType;
  public team?: boolean;
  public match?: Match;

  constructor(id?: number, eventType?: EventType, team?: boolean, match?: Match) {
    this.id = id ? id : null;
    this.eventType = eventType ? eventType : null;
    this.team = team ? team : null;
    this.match = match ? match : null;
  }
}
