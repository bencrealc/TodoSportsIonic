//import dayjs from 'dayjs/esm';
import { Match } from 'src/app/services/match/match.model';

export class Posesion {
  public id?: number;
  public team?: boolean;
  public start?: Date;
  public end?: Date;
  public matches?: Match[];

  constructor(id?: number, team?: boolean, start?: Date, end?: Date, matches?: Match[]) {
    this.id = id ? id : null;
    this.team = team ? team : null;
    this.start = start ? start : null;
    this.end = end ? end : null;
    this.matches = matches ? matches : null;
  }
}
