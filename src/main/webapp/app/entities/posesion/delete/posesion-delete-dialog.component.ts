import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { IPosesion } from '../posesion.model';
import { PosesionService } from '../service/posesion.service';

@Component({
  templateUrl: './posesion-delete-dialog.component.html',
})
export class PosesionDeleteDialogComponent {
  posesion?: IPosesion;

  constructor(protected posesionService: PosesionService, protected activeModal: NgbActiveModal) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.posesionService.delete(id).subscribe(() => {
      this.activeModal.close('deleted');
    });
  }
}
