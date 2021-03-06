import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule, MatSortModule, MatTableModule } from '@angular/material';

import { EarthquakeComponent } from './earthquake.component';

describe('DataTableComponent', () => {
  let component: EarthquakeComponent;
  let fixture: ComponentFixture<EarthquakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EarthquakeComponent],
      imports: [
        NoopAnimationsModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EarthquakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
