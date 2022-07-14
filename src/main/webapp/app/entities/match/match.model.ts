import { IEvent } from 'app/entities/event/event.model';
import { IPosesion } from 'app/entities/posesion/posesion.model';

export interface IMatch {
  id?: number;
  local?: string | null;
  away?: string | null;
  event?: IEvent | null;
  posesion?: IPosesion | null;
}

export class Match implements IMatch {
  constructor(
    public id?: number,
    public local?: string | null,
    public away?: string | null,
    public event?: IEvent | null,
    public posesion?: IPosesion | null
  ) {}
}

export function getMatchIdentifier(match: IMatch): number | undefined {
  return match.id;
}
