import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

import { PosesionService } from '../service/posesion.service';

import { PosesionComponent } from './posesion.component';

describe('Posesion Management Component', () => {
  let comp: PosesionComponent;
  let fixture: ComponentFixture<PosesionComponent>;
  let service: PosesionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [PosesionComponent],
    })
      .overrideTemplate(PosesionComponent, '')
      .compileComponents();

    fixture = TestBed.createComponent(PosesionComponent);
    comp = fixture.componentInstance;
    service = TestBed.inject(PosesionService);

    const headers = new HttpHeaders();
    jest.spyOn(service, 'query').mockReturnValue(
      of(
        new HttpResponse({
          body: [{ id: 123 }],
          headers,
        })
      )
    );
  });

  it('Should call load all on init', () => {
    // WHEN
    comp.ngOnInit();

    // THEN
    expect(service.query).toHaveBeenCalled();
    expect(comp.posesions?.[0]).toEqual(expect.objectContaining({ id: 123 }));
  });
});
