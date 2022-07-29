import { Event } from 'src/app/services/events/event.model';
import { Posesion } from 'src/app/services/posesion/posesion.model';
import { Team } from '../team/team.model';

export class Match {
  public id?: number;
  public local?: Team;
  public away?: Team;
  public matchDay?: Date;
  public events?: Event[];
  public posesion?: Posesion;

  constructor(id?: number, local?: Team, away?: Team, matchDay?: Date, events?: Event[], posesion?: Posesion) {
    this.id = id ? id : null;
    this.local = local ? local : null;
    this.away = away ? away : null;
    this.matchDay = matchDay ? matchDay : null;
    this.events = events ? events : null;
    this.posesion = posesion ? posesion : null;
  }
}
