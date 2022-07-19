import { IEvent } from 'app/entities/event/event.model';
import { IPosesion } from 'app/entities/posesion/posesion.model';

export interface IMatch {
  id?: number;
  local?: string | null;
  away?: string | null;
  events?: IEvent[] | null;
  posesions?: IPosesion[] | null;
}

export class Match implements IMatch {
  constructor(
    public id?: number,
    public local?: string | null,
    public away?: string | null,
    public events?: IEvent[] | null,
    public posesions?: IPosesion[] | null
  ) {}
}

export function getMatchIdentifier(match: IMatch): number | undefined {
  return match.id;
}
