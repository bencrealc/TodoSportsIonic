import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import dayjs from 'dayjs/esm';

import { DATE_TIME_FORMAT } from 'app/config/input.constants';
import { IPosesion, Posesion } from '../posesion.model';

import { PosesionService } from './posesion.service';

describe('Posesion Service', () => {
  let service: PosesionService;
  let httpMock: HttpTestingController;
  let elemDefault: IPosesion;
  let expectedResult: IPosesion | IPosesion[] | boolean | null;
  let currentDate: dayjs.Dayjs;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    expectedResult = null;
    service = TestBed.inject(PosesionService);
    httpMock = TestBed.inject(HttpTestingController);
    currentDate = dayjs();

    elemDefault = {
      id: 0,
      team: false,
      paused: false,
      time: currentDate,
    };
  });

  describe('Service methods', () => {
    it('should find an element', () => {
      const returnedFromService = Object.assign(
        {
          time: currentDate.format(DATE_TIME_FORMAT),
        },
        elemDefault
      );

      service.find(123).subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'GET' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(elemDefault);
    });

    it('should create a Posesion', () => {
      const returnedFromService = Object.assign(
        {
          id: 0,
          time: currentDate.format(DATE_TIME_FORMAT),
        },
        elemDefault
      );

      const expected = Object.assign(
        {
          time: currentDate,
        },
        returnedFromService
      );

      service.create(new Posesion()).subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'POST' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(expected);
    });

    it('should update a Posesion', () => {
      const returnedFromService = Object.assign(
        {
          id: 1,
          team: true,
          paused: true,
          time: currentDate.format(DATE_TIME_FORMAT),
        },
        elemDefault
      );

      const expected = Object.assign(
        {
          time: currentDate,
        },
        returnedFromService
      );

      service.update(expected).subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'PUT' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(expected);
    });

    it('should partial update a Posesion', () => {
      const patchObject = Object.assign(
        {
          paused: true,
          time: currentDate.format(DATE_TIME_FORMAT),
        },
        new Posesion()
      );

      const returnedFromService = Object.assign(patchObject, elemDefault);

      const expected = Object.assign(
        {
          time: currentDate,
        },
        returnedFromService
      );

      service.partialUpdate(patchObject).subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'PATCH' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(expected);
    });

    it('should return a list of Posesion', () => {
      const returnedFromService = Object.assign(
        {
          id: 1,
          team: true,
          paused: true,
          time: currentDate.format(DATE_TIME_FORMAT),
        },
        elemDefault
      );

      const expected = Object.assign(
        {
          time: currentDate,
        },
        returnedFromService
      );

      service.query().subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'GET' });
      req.flush([returnedFromService]);
      httpMock.verify();
      expect(expectedResult).toContainEqual(expected);
    });

    it('should delete a Posesion', () => {
      service.delete(123).subscribe(resp => (expectedResult = resp.ok));

      const req = httpMock.expectOne({ method: 'DELETE' });
      req.flush({ status: 200 });
      expect(expectedResult);
    });

    describe('addPosesionToCollectionIfMissing', () => {
      it('should add a Posesion to an empty array', () => {
        const posesion: IPosesion = { id: 123 };
        expectedResult = service.addPosesionToCollectionIfMissing([], posesion);
        expect(expectedResult).toHaveLength(1);
        expect(expectedResult).toContain(posesion);
      });

      it('should not add a Posesion to an array that contains it', () => {
        const posesion: IPosesion = { id: 123 };
        const posesionCollection: IPosesion[] = [
          {
            ...posesion,
          },
          { id: 456 },
        ];
        expectedResult = service.addPosesionToCollectionIfMissing(posesionCollection, posesion);
        expect(expectedResult).toHaveLength(2);
      });

      it("should add a Posesion to an array that doesn't contain it", () => {
        const posesion: IPosesion = { id: 123 };
        const posesionCollection: IPosesion[] = [{ id: 456 }];
        expectedResult = service.addPosesionToCollectionIfMissing(posesionCollection, posesion);
        expect(expectedResult).toHaveLength(2);
        expect(expectedResult).toContain(posesion);
      });

      it('should add only unique Posesion to an array', () => {
        const posesionArray: IPosesion[] = [{ id: 123 }, { id: 456 }, { id: 3699 }];
        const posesionCollection: IPosesion[] = [{ id: 123 }];
        expectedResult = service.addPosesionToCollectionIfMissing(posesionCollection, ...posesionArray);
        expect(expectedResult).toHaveLength(3);
      });

      it('should accept varargs', () => {
        const posesion: IPosesion = { id: 123 };
        const posesion2: IPosesion = { id: 456 };
        expectedResult = service.addPosesionToCollectionIfMissing([], posesion, posesion2);
        expect(expectedResult).toHaveLength(2);
        expect(expectedResult).toContain(posesion);
        expect(expectedResult).toContain(posesion2);
      });

      it('should accept null and undefined values', () => {
        const posesion: IPosesion = { id: 123 };
        expectedResult = service.addPosesionToCollectionIfMissing([], null, posesion, undefined);
        expect(expectedResult).toHaveLength(1);
        expect(expectedResult).toContain(posesion);
      });

      it('should return initial array if no Posesion is added', () => {
        const posesionCollection: IPosesion[] = [{ id: 123 }];
        expectedResult = service.addPosesionToCollectionIfMissing(posesionCollection, undefined, null);
        expect(expectedResult).toEqual(posesionCollection);
      });
    });
  });

  afterEach(() => {
    httpMock.verify();
  });
});
