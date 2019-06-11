import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WhetherComponent } from './whether/whether.component';
import { ApixuService } from './apixu.service';
import { WeatherdetailsComponent } from './weatherdetails/weatherdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    WhetherComponent,
    WeatherdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [ApixuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
