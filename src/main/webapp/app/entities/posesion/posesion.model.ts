import dayjs from 'dayjs/esm';
import { IMatch } from 'app/entities/match/match.model';

export interface IPosesion {
  id?: number;
  team?: boolean | null;
  start?: dayjs.Dayjs | null;
  end?: dayjs.Dayjs | null;
  match?: IMatch | null;
}

export class Posesion implements IPosesion {
  constructor(
    public id?: number,
    public team?: boolean | null,
    public start?: dayjs.Dayjs | null,
    public end?: dayjs.Dayjs | null,
    public match?: IMatch | null
  ) {
    this.team = this.team ?? false;
  }
}

export function getPosesionIdentifier(posesion: IPosesion): number | undefined {
  return posesion.id;
}
