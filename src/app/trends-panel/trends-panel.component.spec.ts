import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { TrendsPanelComponent } from './trends-panel.component';

describe('TrendsPanelComponent', () => {
  let component: TrendsPanelComponent;
  let fixture: ComponentFixture<TrendsPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendsPanelComponent ],
      imports: [ CardModule, ChartModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});