import { Event } from 'src/app/services/events/event.model';
import { Posesion } from 'src/app/services/posesion/posesion.model';

export class Match {
  public id?: number;
  public local?: string;
  public away?: string;
  public events?: Event[];
  public posesion?: Posesion;

  constructor(id?: number, local?: string, away?: string, events?: Event[], posesion?: Posesion) {
    this.id = id ? id : null;
    this.local = local ? local : null;
    this.away = away ? away : null;
    this.events = events ? events : null;
    this.posesion = posesion ? posesion : null;
  }
}
