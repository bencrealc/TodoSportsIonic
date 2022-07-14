import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { PosesionDetailComponent } from './posesion-detail.component';

describe('Posesion Management Detail Component', () => {
  let comp: PosesionDetailComponent;
  let fixture: ComponentFixture<PosesionDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PosesionDetailComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { data: of({ posesion: { id: 123 } }) },
        },
      ],
    })
      .overrideTemplate(PosesionDetailComponent, '')
      .compileComponents();
    fixture = TestBed.createComponent(PosesionDetailComponent);
    comp = fixture.componentInstance;
  });

  describe('OnInit', () => {
    it('Should load posesion on init', () => {
      // WHEN
      comp.ngOnInit();

      // THEN
      expect(comp.posesion).toEqual(expect.objectContaining({ id: 123 }));
    });
  });
});
