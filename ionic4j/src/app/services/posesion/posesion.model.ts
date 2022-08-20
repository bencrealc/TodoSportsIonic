//import dayjs from 'dayjs/esm';

export class Posesion {
  public id?: number;
  public team?: boolean;
  public start?: number;
  public end?: number;
  public matchId?: number;
  public userId?: number;

  constructor(id?: number, team?: boolean, start?: number, end?: number, matchId?: number, userId?: number) {
    this.id = id ? id : null;
    this.team = team ? team : null;
    this.start = start ? start : null;
    this.end = end ? end : null;
    this.matchId = matchId ? matchId : null;
    this.userId = userId ? userId : null;
  }
}
