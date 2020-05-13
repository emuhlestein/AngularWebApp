import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MainPanelComponent } from '../main-panel/main-panel.component';
import { EarthquakeComponent } from '../earthquake/earthquake.component';
import { MessagesComponent } from '../messages/messages.component';
import { SessionDataService } from '../session-data-service';
import { DatePipe } from '@angular/common';
import { EarthquakeService } from '../earthquake/earthquake.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MainPanelComponent,
        EarthquakeComponent,
        MessagesComponent
      ],
      imports: [
        FormsModule,
        HttpClientTestingModule
      ],
      providers: [
        DatePipe,
        EarthquakeService,
        SessionDataService
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'EdsWebSite'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Ed\'s Web Site');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Ed\'s Web Site!');
  });
});
