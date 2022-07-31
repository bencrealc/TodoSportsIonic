import { Component, OnInit } from '@angular/core';
import { Match } from 'src/app/services/match/match.model';
import { MatchService } from 'src/app/services/match/match.service';
import { finalize, map, tap } from 'rxjs/operators';
import { from, Observable, of } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

//import { MatchDeleteDialogComponent } from '../delete/match-delete-dialog.component';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.page.html',
  styleUrls: ['./matches.page.scss'],
})
export class MatchesPage implements OnInit {
  matches?: Match[];
  isLoading = false;
  //observable$: Observable<ArrayBuffer> = this.matchService.query();

  constructor(protected matchService: MatchService, protected modalService: NgbModal) {
    // this.observable$.pipe(tap(res => this.matches = res));
  }

  ngOnInit() {}
  loadAll(): void {
    this.isLoading = true;

    //this.matchService.query().subscribe(partidos=>this.matches=partidos);
    //this.matches=this.matchService.query();
  }

  trackId(_index: number, item: Match): number {
    return item.id!;
  }
}
