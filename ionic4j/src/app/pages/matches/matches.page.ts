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
  matches?: Match[];
  local?: Team;
  away?: Team;
  isLoading = false;
  searchTerm: string;
  matchesFiltered?: Match[];
  admin: boolean;

  constructor(
    protected matchService: MatchService,
    private accountService: AccountService,
    public teamService: TeamService,
    protected modalService: NgbModal
  ) {}

  ngOnInit() {
    this.loadAll();
    this.accountService.identity().then(account => {
      if (account.firstName == 'Administrator') {
        this.admin = true;
      } else {
        this.admin = false;
      }
    });
  }

  loadAll(): void {
    this.isLoading = true;

    this.matchService.get().subscribe({
      next: (res: HttpResponse<Match[]>) => {
        this.isLoading = false;
        this.matches = res.body ?? [];
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
  }

  search(query) {
    if (!query) {
      this.matchesFiltered = this.matches;
    } else {
      this.matchesFiltered = this.matches.filter(match => {
        return match.local.name.includes(query) || match.away.name.includes(query);
      });
    }
  }

  trackId(_index: number, item: Match): number {
    return item.id!;
  }
}
