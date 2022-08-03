import { Component, OnInit } from '@angular/core';
import { Match } from 'src/app/services/match/match.model';
import { MatchService } from 'src/app/services/match/match.service';
import { filter, map } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpResponse } from '@angular/common/http';
import { Team } from 'src/app/services/team/team.model';
import { TeamService } from 'src/app/services/team/team.service';

//import { MatchDeleteDialogComponent } from '../delete/match-delete-dialog.component';

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
  //observable$: Observable<ArrayBuffer> = this.matchService.query();

  constructor(protected matchService: MatchService, public teamService: TeamService, protected modalService: NgbModal) {
    // this.observable$.pipe(tap(res => this.matches = res));
  }

  ngOnInit() {
    this.loadAll();
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

  trackId(_index: number, item: Match): number {
    return item.id!;
  }
}
