import { Component, OnInit } from '@angular/core';
import { Match } from 'src/app/services/match/match.model';
import { MatchService } from 'src/app/services/match/match.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpResponse } from '@angular/common/http';
import { Team } from 'src/app/services/team/team.model';
import { TeamService } from 'src/app/services/team/team.service';
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';

@Component({
  selector: 'app-matchesEnd',
  templateUrl: './matchesEnd.page.html',
  styleUrls: ['./matchesEnd.page.scss'],
})
export class MatchesEndPage implements OnInit {
  matches?: Match[];
  local?: Team;
  away?: Team;
  isLoading = false;
  searchTerm: string;
  matchesFiltered?: Match[];

  constructor(
    protected matchService: MatchService,
    public teamService: TeamService,
    private screenOrientation: ScreenOrientation,
    protected modalService: NgbModal
  ) {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }

  ngOnInit() {
    this.loadAll();
  }

  loadAll(): void {
    this.isLoading = true;

    this.matchService.getMatchesFinished().subscribe({
      next: (res: HttpResponse<Match[]>) => {
        this.isLoading = false;
        this.matches = res.body ?? [];
        this.matchesFiltered = res.body ?? [];
        console.log(this.matches);
      },
      error: () => {
        this.isLoading = false;
      },
    });
  }

  search(query) {
    this.matchesFiltered = this.matches.filter(match => {
      return match.localId.includes(query) || match.awayId.includes(query);
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
}
