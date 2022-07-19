import dayjs from 'dayjs/esm';
import { IMatch } from 'app/entities/match/match.model';

export interface IPosesion {
  id?: number;
  team?: boolean | null;
  paused?: boolean | null;
  time?: dayjs.Dayjs | null;
  match?: IMatch | null;
}

export class Posesion implements IPosesion {
  constructor(
    public id?: number,
    public team?: boolean | null,
    public paused?: boolean | null,
    public time?: dayjs.Dayjs | null,
    public match?: IMatch | null
  ) {
    this.team = this.team ?? false;
    this.paused = this.paused ?? false;
  }
}

export function getPosesionIdentifier(posesion: IPosesion): number | undefined {
  return posesion.id;
}
