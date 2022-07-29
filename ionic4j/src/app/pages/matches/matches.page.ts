import { Component, OnInit } from '@angular/core';
import { Match } from 'src/app/services/match/match.model';
import { MatchService } from 'src/app/services/match/match.service';

import { HttpResponse } from '@angular/common/http';
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

  constructor(protected matchService: MatchService, protected modalService: NgbModal) {}

  loadAll(): void {
    this.isLoading = true;

    this.matchService.query().subscribe({
      next: (res: HttpResponse<Match[]>) => {
        this.isLoading = false;
        this.matches = res.body ?? [];
      },
      error: () => {
        this.isLoading = false;
      },
    });
  }

  ngOnInit(): void {
    this.loadAll();
  }

  trackId(_index: number, item: Match): number {
    return item.id!;
  }
  /*
  delete(match: Match): void {
    const modalRef = this.modalService.open(MatchDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.match = match;
    // unsubscribe not needed because closed completes on modal close
    modalRef.closed.subscribe(reason => {
      if (reason === 'deleted') {
        this.loadAll();
      }
    });
  }*/
}
