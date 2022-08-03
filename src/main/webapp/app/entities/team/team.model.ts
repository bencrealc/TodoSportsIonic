import { IMatch } from 'app/entities/match/match.model';

export interface ITeam {
  id?: number;
  name?: string | null;
  matches?: IMatch[] | null;
}

export class Team implements ITeam {
  constructor(public id?: number, public name?: string | null, public matches?: IMatch[] | null) {}
}

export function getTeamIdentifier(team: ITeam): number | undefined {
  return team.id;
}
