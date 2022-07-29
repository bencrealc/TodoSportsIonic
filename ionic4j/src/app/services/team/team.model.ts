import { Match } from '../match/match.model';

export class Team {
  public id?: number;
  public name?: string;
  public matches?: Match[];

  constructor(id?: number, name?: string, matches?: Match[]) {
    this.id = id ? id : null;
    this.name = name ? name : null;
    this.matches = matches ? matches : null;
  }
}
