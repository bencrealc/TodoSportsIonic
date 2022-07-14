import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IPosesion } from '../posesion.model';

@Component({
  selector: 'jhi-posesion-detail',
  templateUrl: './posesion-detail.component.html',
})
export class PosesionDetailComponent implements OnInit {
  posesion: IPosesion | null = null;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ posesion }) => {
      this.posesion = posesion;
    });
  }

  previousState(): void {
    window.history.back();
  }
}
