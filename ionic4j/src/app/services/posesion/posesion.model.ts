//import dayjs from 'dayjs/esm';
import { Match } from 'src/app/services/match/match.model';

export class Posesion {
  public id?: number;
  public team?: boolean;
  public paused?: boolean;
  //public time?: dayjs.Dayjs;
  public matches?: Match[];

  constructor(
    id?: number,
    team?: boolean,
    paused?: boolean,
    //time?: dayjs.Dayjs,
    matches?: Match[]
  ) {
    this.id = id ? id : null;
    this.team = team ? team : null;
    this.paused = paused ? paused : null;
    //this.time = time ? time : null;
    this.matches = matches ? matches : null;
  }
}
