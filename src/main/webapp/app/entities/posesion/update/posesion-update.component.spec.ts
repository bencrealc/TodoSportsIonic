import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of, Subject, from } from 'rxjs';

import { PosesionService } from '../service/posesion.service';
import { IPosesion, Posesion } from '../posesion.model';

import { PosesionUpdateComponent } from './posesion-update.component';

describe('Posesion Management Update Component', () => {
  let comp: PosesionUpdateComponent;
  let fixture: ComponentFixture<PosesionUpdateComponent>;
  let activatedRoute: ActivatedRoute;
  let posesionService: PosesionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      declarations: [PosesionUpdateComponent],
      providers: [
        FormBuilder,
        {
          provide: ActivatedRoute,
          useValue: {
            params: from([{}]),
          },
        },
      ],
    })
      .overrideTemplate(PosesionUpdateComponent, '')
      .compileComponents();

    fixture = TestBed.createComponent(PosesionUpdateComponent);
    activatedRoute = TestBed.inject(ActivatedRoute);
    posesionService = TestBed.inject(PosesionService);

    comp = fixture.componentInstance;
  });

  describe('ngOnInit', () => {
    it('Should update editForm', () => {
      const posesion: IPosesion = { id: 456 };

      activatedRoute.data = of({ posesion });
      comp.ngOnInit();

      expect(comp.editForm.value).toEqual(expect.objectContaining(posesion));
    });
  });

  describe('save', () => {
    it('Should call update service on save for existing entity', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<Posesion>>();
      const posesion = { id: 123 };
      jest.spyOn(posesionService, 'update').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ posesion });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.next(new HttpResponse({ body: posesion }));
      saveSubject.complete();

      // THEN
      expect(comp.previousState).toHaveBeenCalled();
      expect(posesionService.update).toHaveBeenCalledWith(posesion);
      expect(comp.isSaving).toEqual(false);
    });

    it('Should call create service on save for new entity', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<Posesion>>();
      const posesion = new Posesion();
      jest.spyOn(posesionService, 'create').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ posesion });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.next(new HttpResponse({ body: posesion }));
      saveSubject.complete();

      // THEN
      expect(posesionService.create).toHaveBeenCalledWith(posesion);
      expect(comp.isSaving).toEqual(false);
      expect(comp.previousState).toHaveBeenCalled();
    });

    it('Should set isSaving to false on error', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<Posesion>>();
      const posesion = { id: 123 };
      jest.spyOn(posesionService, 'update').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ posesion });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.error('This is an error!');

      // THEN
      expect(posesionService.update).toHaveBeenCalledWith(posesion);
      expect(comp.isSaving).toEqual(false);
      expect(comp.previousState).not.toHaveBeenCalled();
    });
  });
});
