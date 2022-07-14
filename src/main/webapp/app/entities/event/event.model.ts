import { IMatch } from 'app/entities/match/match.model';
import { EventType } from 'app/entities/enumerations/event-type.model';

export interface IEvent {
  id?: number;
  eventType?: EventType | null;
  team?: boolean | null;
  matches?: IMatch[] | null;
}

export class Event implements IEvent {
  constructor(public id?: number, public eventType?: EventType | null, public team?: boolean | null, public matches?: IMatch[] | null) {
    this.team = this.team ?? false;
  }
}

export function getEventIdentifier(event: IEvent): number | undefined {
  return event.id;
}
