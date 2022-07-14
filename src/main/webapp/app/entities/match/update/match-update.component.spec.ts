import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of, Subject, from } from 'rxjs';

import { MatchService } from '../service/match.service';
import { IMatch, Match } from '../match.model';
import { IEvent } from 'app/entities/event/event.model';
import { EventService } from 'app/entities/event/service/event.service';
import { IPosesion } from 'app/entities/posesion/posesion.model';
import { PosesionService } from 'app/entities/posesion/service/posesion.service';

import { MatchUpdateComponent } from './match-update.component';

describe('Match Management Update Component', () => {
  let comp: MatchUpdateComponent;
  let fixture: ComponentFixture<MatchUpdateComponent>;
  let activatedRoute: ActivatedRoute;
  let matchService: MatchService;
  let eventService: EventService;
  let posesionService: PosesionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      declarations: [MatchUpdateComponent],
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
      .overrideTemplate(MatchUpdateComponent, '')
      .compileComponents();

    fixture = TestBed.createComponent(MatchUpdateComponent);
    activatedRoute = TestBed.inject(ActivatedRoute);
    matchService = TestBed.inject(MatchService);
    eventService = TestBed.inject(EventService);
    posesionService = TestBed.inject(PosesionService);

    comp = fixture.componentInstance;
  });

  describe('ngOnInit', () => {
    it('Should call Event query and add missing value', () => {
      const match: IMatch = { id: 456 };
      const event: IEvent = { id: 25148 };
      match.event = event;

      const eventCollection: IEvent[] = [{ id: 90745 }];
      jest.spyOn(eventService, 'query').mockReturnValue(of(new HttpResponse({ body: eventCollection })));
      const additionalEvents = [event];
      const expectedCollection: IEvent[] = [...additionalEvents, ...eventCollection];
      jest.spyOn(eventService, 'addEventToCollectionIfMissing').mockReturnValue(expectedCollection);

      activatedRoute.data = of({ match });
      comp.ngOnInit();

      expect(eventService.query).toHaveBeenCalled();
      expect(eventService.addEventToCollectionIfMissing).toHaveBeenCalledWith(eventCollection, ...additionalEvents);
      expect(comp.eventsSharedCollection).toEqual(expectedCollection);
    });

    it('Should call Posesion query and add missing value', () => {
      const match: IMatch = { id: 456 };
      const posesion: IPosesion = { id: 1489 };
      match.posesion = posesion;

      const posesionCollection: IPosesion[] = [{ id: 40395 }];
      jest.spyOn(posesionService, 'query').mockReturnValue(of(new HttpResponse({ body: posesionCollection })));
      const additionalPosesions = [posesion];
      const expectedCollection: IPosesion[] = [...additionalPosesions, ...posesionCollection];
      jest.spyOn(posesionService, 'addPosesionToCollectionIfMissing').mockReturnValue(expectedCollection);

      activatedRoute.data = of({ match });
      comp.ngOnInit();

      expect(posesionService.query).toHaveBeenCalled();
      expect(posesionService.addPosesionToCollectionIfMissing).toHaveBeenCalledWith(posesionCollection, ...additionalPosesions);
      expect(comp.posesionsSharedCollection).toEqual(expectedCollection);
    });

    it('Should update editForm', () => {
      const match: IMatch = { id: 456 };
      const event: IEvent = { id: 12673 };
      match.event = event;
      const posesion: IPosesion = { id: 16059 };
      match.posesion = posesion;

      activatedRoute.data = of({ match });
      comp.ngOnInit();

      expect(comp.editForm.value).toEqual(expect.objectContaining(match));
      expect(comp.eventsSharedCollection).toContain(event);
      expect(comp.posesionsSharedCollection).toContain(posesion);
    });
  });

  describe('save', () => {
    it('Should call update service on save for existing entity', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<Match>>();
      const match = { id: 123 };
      jest.spyOn(matchService, 'update').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ match });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.next(new HttpResponse({ body: match }));
      saveSubject.complete();

      // THEN
      expect(comp.previousState).toHaveBeenCalled();
      expect(matchService.update).toHaveBeenCalledWith(match);
      expect(comp.isSaving).toEqual(false);
    });

    it('Should call create service on save for new entity', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<Match>>();
      const match = new Match();
      jest.spyOn(matchService, 'create').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ match });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.next(new HttpResponse({ body: match }));
      saveSubject.complete();

      // THEN
      expect(matchService.create).toHaveBeenCalledWith(match);
      expect(comp.isSaving).toEqual(false);
      expect(comp.previousState).toHaveBeenCalled();
    });

    it('Should set isSaving to false on error', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<Match>>();
      const match = { id: 123 };
      jest.spyOn(matchService, 'update').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ match });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.error('This is an error!');

      // THEN
      expect(matchService.update).toHaveBeenCalledWith(match);
      expect(comp.isSaving).toEqual(false);
      expect(comp.previousState).not.toHaveBeenCalled();
    });
  });

  describe('Tracking relationships identifiers', () => {
    describe('trackEventById', () => {
      it('Should return tracked Event primary key', () => {
        const entity = { id: 123 };
        const trackResult = comp.trackEventById(0, entity);
        expect(trackResult).toEqual(entity.id);
      });
    });

    describe('trackPosesionById', () => {
      it('Should return tracked Posesion primary key', () => {
        const entity = { id: 123 };
        const trackResult = comp.trackPosesionById(0, entity);
        expect(trackResult).toEqual(entity.id);
      });
    });
  });
});
