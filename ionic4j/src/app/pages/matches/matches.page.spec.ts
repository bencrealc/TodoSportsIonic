import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MatchesPage } from './matches.page';

describe('StatisticsPage', () => {
  let component: MatchesPage;
  let fixture: ComponentFixture<MatchesPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [MatchesPage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(MatchesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should return a list of Match', () => {
    expect(component).toBeTruthy();
  });
});
