import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { IPosesion } from '../posesion.model';
import { PosesionService } from '../service/posesion.service';
import { PosesionDeleteDialogComponent } from '../delete/posesion-delete-dialog.component';

@Component({
  selector: 'jhi-posesion',
  templateUrl: './posesion.component.html',
})
export class PosesionComponent implements OnInit {
  posesions?: IPosesion[];
  isLoading = false;

  constructor(protected posesionService: PosesionService, protected modalService: NgbModal) {}

  loadAll(): void {
    this.isLoading = true;

    this.posesionService.query().subscribe({
      next: (res: HttpResponse<IPosesion[]>) => {
        this.isLoading = false;
        this.posesions = res.body ?? [];
      },
      error: () => {
        this.isLoading = false;
      },
    });
  }

  ngOnInit(): void {
    this.loadAll();
  }

  trackId(_index: number, item: IPosesion): number {
    return item.id!;
  }

  delete(posesion: IPosesion): void {
    const modalRef = this.modalService.open(PosesionDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.posesion = posesion;
    // unsubscribe not needed because closed completes on modal close
    modalRef.closed.subscribe(reason => {
      if (reason === 'deleted') {
        this.loadAll();
      }
    });
  }
}
