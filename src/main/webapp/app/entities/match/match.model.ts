import dayjs from 'dayjs/esm';
import { IEvent } from 'app/entities/event/event.model';
import { IPosesion } from 'app/entities/posesion/posesion.model';
import { ITeam } from 'app/entities/team/team.model';

export interface IMatch {
  id?: number;
  local?: string | null;
  away?: string | null;
  matchDay?: dayjs.Dayjs | null;
  events?: IEvent[] | null;
  posesions?: IPosesion[] | null;
  teams?: ITeam[] | null;
}

export class Match implements IMatch {
  constructor(
    public id?: number,
    public local?: string | null,
    public away?: string | null,
    public matchDay?: dayjs.Dayjs | null,
    public events?: IEvent[] | null,
    public posesions?: IPosesion[] | null,
    public teams?: ITeam[] | null
  ) {}
}

export function getMatchIdentifier(match: IMatch): number | undefined {
  return match.id;
}
