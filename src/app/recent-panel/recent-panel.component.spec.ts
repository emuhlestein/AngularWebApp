import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentQuakesComponent } from './recent-panel.component';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';

describe('RecentQuakesComponent', () => {
  let component: RecentQuakesComponent;
  let fixture: ComponentFixture<RecentQuakesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentQuakesComponent ],
      imports: [ TableModule, CardModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentQuakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
