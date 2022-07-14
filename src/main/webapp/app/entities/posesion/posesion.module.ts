import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { PosesionComponent } from './list/posesion.component';
import { PosesionDetailComponent } from './detail/posesion-detail.component';
import { PosesionUpdateComponent } from './update/posesion-update.component';
import { PosesionDeleteDialogComponent } from './delete/posesion-delete-dialog.component';
import { PosesionRoutingModule } from './route/posesion-routing.module';

@NgModule({
  imports: [SharedModule, PosesionRoutingModule],
  declarations: [PosesionComponent, PosesionDetailComponent, PosesionUpdateComponent, PosesionDeleteDialogComponent],
  entryComponents: [PosesionDeleteDialogComponent],
})
export class PosesionModule {}
