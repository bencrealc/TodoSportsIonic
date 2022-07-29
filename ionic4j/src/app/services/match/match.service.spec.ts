import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { Match } from './match.model';

import { MatchService } from './match.service';

describe('Match Service', () => {
  let service: MatchService;
  let httpMock: HttpTestingController;
  let elemDefault: Match;
  let expectedResult: Match | Match[] | boolean | null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    expectedResult = null;
    service = TestBed.inject(MatchService);
    httpMock = TestBed.inject(HttpTestingController);

    elemDefault = {
      id: 0,
      local: 'AAAAAAA',
      away: 'AAAAAAA',
    };
  });

  describe('Service methods', () => {
    it('should find an element', () => {
      const returnedFromService = Object.assign({}, elemDefault);

      service.find(123).subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'GET' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(elemDefault);
    });

    it('should create a Match', () => {
      const returnedFromService = Object.assign(
        {
          id: 0,
        },
        elemDefault
      );

      const expected = Object.assign({}, returnedFromService);

      service.create(new Match()).subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'POST' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(expected);
    });

    it('should update a Match', () => {
      const returnedFromService = Object.assign(
        {
          id: 1,
          local: 'BBBBBB',
          away: 'BBBBBB',
        },
        elemDefault
      );

      const expected = Object.assign({}, returnedFromService);

      service.update(expected).subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'PUT' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(expected);
    });

    it('should partial update a Match', () => {
      const patchObject = Object.assign(
        {
          away: 'BBBBBB',
        },
        new Match()
      );

      const returnedFromService = Object.assign(patchObject, elemDefault);

      const expected = Object.assign({}, returnedFromService);

      service.partialUpdate(patchObject).subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'PATCH' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(expected);
    });

    it('should return a list of Match', () => {
      const returnedFromService = Object.assign(
        {
          id: 1,
          local: 'BBBBBB',
          away: 'BBBBBB',
        },
        elemDefault
      );

      const expected = Object.assign({}, returnedFromService);

      service.query().subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'GET' });
      req.flush([returnedFromService]);
      httpMock.verify();
      expect(expectedResult).toContainEqual(expected);
    });

    it('should delete a Match', () => {
      service.delete(123).subscribe(resp => (expectedResult = resp.ok));

      const req = httpMock.expectOne({ method: 'DELETE' });
      req.flush({ status: 200 });
      expect(expectedResult);
    });
    /*
    describe('addMatchToCollectionIfMissing', () => {
      it('should add a Match to an empty array', () => {
        const match: Match = { id: 123 };
        expectedResult = service.addMatchToCollectionIfMissing([], match);
        expect(expectedResult).toHaveLength(1);
        expect(expectedResult).toContain(match);
      });

      it('should not add a Match to an array that contains it', () => {
        const match: Match = { id: 123 };
        const matchCollection: Match[] = [
          {
            ...match,
          },
          { id: 456 },
        ];
        expectedResult = service.addMatchToCollectionIfMissing(matchCollection, match);
        expect(expectedResult).toHaveLength(2);
      });

      it("should add a Match to an array that doesn't contain it", () => {
        const match: Match = { id: 123 };
        const matchCollection: Match[] = [{ id: 456 }];
        expectedResult = service.addMatchToCollectionIfMissing(matchCollection, match);
        expect(expectedResult).toHaveLength(2);
        expect(expectedResult).toContain(match);
      });

      it('should add only unique Match to an array', () => {
        const matchArray: Match[] = [{ id: 123 }, { id: 456 }, { id: 97653 }];
        const matchCollection: Match[] = [{ id: 123 }];
        expectedResult = service.addMatchToCollectionIfMissing(matchCollection, ...matchArray);
        expect(expectedResult).toHaveLength(3);
      });

      it('should accept varargs', () => {
        const match: Match = { id: 123 };
        const match2: Match = { id: 456 };
        expectedResult = service.addMatchToCollectionIfMissing([], match, match2);
        expect(expectedResult).toHaveLength(2);
        expect(expectedResult).toContain(match);
        expect(expectedResult).toContain(match2);
      });

      it('should accept null and undefined values', () => {
        const match: Match = { id: 123 };
        expectedResult = service.addMatchToCollectionIfMissing([], null, match, undefined);
        expect(expectedResult).toHaveLength(1);
        expect(expectedResult).toContain(match);
      });

      it('should return initial array if no Match is added', () => {
        const matchCollection: Match[] = [{ id: 123 }];
        expectedResult = service.addMatchToCollectionIfMissing(matchCollection, undefined, null);
        expect(expectedResult).toEqual(matchCollection);
      });
    });*/
  });

  afterEach(() => {
    httpMock.verify();
  });
});
