import { Match } from '../match/match.model';

export class Team {
  public id?: number;
  public name?: string;
  public matches?: Match[];
  public userId?: number;

  constructor(id?: number, name?: string, matches?: Match[], userId?: number) {
    this.id = id ? id : null;
    this.name = name ? name : null;
    this.matches = matches ? matches : null;
    this.userId = userId ? userId : null;
  }
}
