import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MainPanelComponent } from './main-panel.component';
import { FormsModule } from '@angular/forms';
import { EarthquakeService } from '../earthquake/earthquake.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DatePipe } from '@angular/common';
import { SessionDataService } from '../session-data-service';

describe('MainPanelComponent', () => {
  let component: MainPanelComponent;
  let fixture: ComponentFixture<MainPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MainPanelComponent],
      imports: [FormsModule,
        HttpClientTestingModule,],
      providers: [EarthquakeService, DatePipe, SessionDataService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
