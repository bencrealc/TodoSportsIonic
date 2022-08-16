import { Event } from 'src/app/services/events/event.model';
import { Posesion } from 'src/app/services/posesion/posesion.model';
import { Team } from '../team/team.model';

export class Match {
  public id?: number;
  public local?: Team;
  public localId?: string;
  public away?: Team;
  public awayId?: string;
  public matchDay?: Date;
  public events?: Event[];
  public posesion?: Posesion[];

  constructor(
    id?: number,
    local?: Team,
    localId?: string,
    away?: Team,
    awayId?: string,
    matchDay?: Date,
    events?: Event[],
    posesion?: Posesion[]
  ) {
    this.id = id ? id : null;
    this.local = local ? local : null;
    this.localId = localId ? localId : null;
    this.away = away ? away : null;
    this.awayId = awayId ? awayId : null;
    this.matchDay = matchDay ? matchDay : null;
    this.events = events ? events : null;
    this.posesion = posesion ? posesion : null;
  }
}
export function getMatchIdentifier(match: Match): number | undefined {
  return match.id;
}
