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
  matches?: Match[] = [];
  local?: Team;
  away?: Team;
  isLoading = false;
  searchTerm: string;
  matchesFiltered?: Match[] = [];
  admin: boolean;
  boton: boolean;
  inicio: Date;
  final: Date;

  constructor(
    private accountService: AccountService,
    protected matchService: MatchService,
    public teamService: TeamService,
    protected modalService: NgbModal
  ) {}

  ngOnInit() {
    this.loadAll();
  }

  loadAll(): void {
    this.isLoading = true;

    this.matchService.getMatchesToplay().subscribe({
      next: (res: HttpResponse<Match[]>) => {
        this.isLoading = false;
        this.matches = res.body ?? [];
        this.matchesFiltered = res.body ?? [];
        console.log(this.matches);
        for (let value of this.matches) {
          this.teamService.getById(value.localId).subscribe({
            next: (res: HttpResponse<Team>) => {
              this.local = res.body ?? null;
              var index = this.matches.indexOf(value);
              value.local = this.local;
              this.matches[index] = value;
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
            },
            error: () => {
              this.isLoading = false;
            },
          });
        }
      },
      error: () => {
        this.isLoading = false;
      },
    });

    this.accountService.hasAuthority('ROLE_ADMIN').then(res => {
      this.admin = res;
    });
  }

  search(query) {
    this.matchesFiltered = this.matches.filter(match => {
      return match.local.name.includes(query) || match.away.name.includes(query);
    });
  }
  disponible(fechaPartido) {
    console.log('buenas');

    this.inicio = fechaPartido;
    this.inicio.setMinutes(fechaPartido.getMinutes() - 5);

    this.final = fechaPartido;
    this.final.setTime(fechaPartido.getTime() + 2 * 60 * 60 * 1000);

    if (fechaPartido.before(this.final) && fechaPartido.after(this.inicio)) {
      this.boton = true;
    } else {
      this.boton = false;
    }
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
}
