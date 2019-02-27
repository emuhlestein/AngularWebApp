import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { EarthquakeService } from './earthquake.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule
  ],
  providers: [
    EarthquakeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
