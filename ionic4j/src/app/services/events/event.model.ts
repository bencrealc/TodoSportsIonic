import { Match } from 'src/app/services/match/match.model';
import { EventType } from './enumerations/event-type.model';

export class Event {
  public id?: number;
  public eventType?: EventType;
  public team?: string;
  public match?: Match;

  constructor(id?: number, eventType?: EventType, team?: string, match?: Match) {
    this.id = id ? id : null;
    this.eventType = eventType ? eventType : null;
    this.team = team ? team : null;
    this.match = match ? match : null;
  }
}
