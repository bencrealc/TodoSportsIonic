import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

import { MatchService } from 'src/app/services/match/match.service';

import { MatchesPage } from './matches.page';

describe('Match Management Component', () => {
  let comp: MatchesPage;
  let fixture: ComponentFixture<MatchesPage>;
  let service: MatchService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [MatchesPage],
    })
      .overrideTemplate(MatchesPage, '')
      .compileComponents();

    fixture = TestBed.createComponent(MatchesPage);
    comp = fixture.componentInstance;
    service = TestBed.inject(MatchService);

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
    expect(comp.matches?.[0]).toEqual(expect.objectContaining({ id: 123 }));
  });
});
