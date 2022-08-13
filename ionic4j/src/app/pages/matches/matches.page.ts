import { Component, OnInit } from '@angular/core';
import { Match } from 'src/app/services/match/match.model';
import { MatchService } from 'src/app/services/match/match.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpResponse } from '@angular/common/http';
import { Team } from 'src/app/services/team/team.model';
import { TeamService } from 'src/app/services/team/team.service';
import { AccountService } from '../../services/auth/account.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.page.html',
  styleUrls: ['./matches.page.scss'],
})
export class MatchesPage implements OnInit {
  matches: Match[] = [];
  local: Team;
  away: Team;
  isLoading = false;
  searchTerm: string;
  matchesFiltered: Match[] = [];
  admin: boolean;
  boton: boolean;
  inicio: Date;
  final: Date;

  constructor(
    private accountService: AccountService,
    protected matchService: MatchService,
    public teamService: TeamService,
    protected modalService: NgbModal
  ) {
    this.accountService.hasAuthority('ROLE_ADMIN').then(res => {
      this.admin = res;
      console.log(this.admin);
    });
  }

  ngOnInit() {
    this.loadAll();
  }

  loadAll() {
    this.isLoading = true;

    return this.matchService.getMatchesToplay().subscribe({
      next: (res: HttpResponse<Match[]>) => {
        this.isLoading = false;
        this.matches = res.body ?? [];
        this.matchesFiltered = this.matches;
        this.teamsName();
      },
      error: () => {
        this.isLoading = false;
      },
    });
  }

  teamsName(): void {
    for (let value of this.matches) {
      this.teamService.getById(value.localId).subscribe({
        next: (res: HttpResponse<Team>) => {
          this.local = res.body ?? null;
          var index = this.matches.indexOf(value);
          value.local = this.local;
          this.matches[index] = value;
          console.log(value.local);
        },
        error: () => {
          this.isLoading = false;
        },
      });

      this.teamService.getById(value.awayId).subscribe({
        next: (res: HttpResponse<Team>) => {
          this.away = res.body ?? null;
          var index = this.matches.indexOf(value);
          value.away = this.away;
          this.matches[index] = value;
          console.log(value.away);
        },
        error: () => {
          this.isLoading = false;
        },
      });
    }
  }

  search(query) {
    this.matchesFiltered = this.matches.filter(match => {
      return match.local.name.includes(query) || match.away.name.includes(query);
    });
  }

  trackId(_index: number, item: Match): number {
    return item.id!;
  }

  stringToDate(matchDay) {
    //const dateFromIonDatetime = this.match.value['fecha']; //2022-08-18T22:48:00+02:00

    const [dia, hora] = matchDay.split('T');
    const [year, month, day] = dia.split('-');
    const [hours, minutes, seconds] = hora.split(':');
    return day + '-' + month + '-' + year + ' ' + hours + ':' + minutes + 'h';
  }
  dateValue(matchDay): boolean {
    var today = new Date();
    var partido = new Date(matchDay);

    partido.setHours(partido.getHours() - 2);
    partido.setMinutes(partido.getMinutes() - 5);
    var later = new Date(matchDay);
    later.setHours(later.getHours() + 3);
    var res = false;

    if (partido.getTime() <= today.getTime() && today.getTime() <= later.getTime()) {
      res = true;
    }
    return res;
  }
}
