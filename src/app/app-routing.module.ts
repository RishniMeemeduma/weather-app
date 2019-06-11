import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhetherComponent } from './whether/whether.component';
import { WeatherdetailsComponent } from './weatherdetails/weatherdetails.component';

const routes: Routes = [
  { path: '', component: WhetherComponent },
  { path:'details',component: WeatherdetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
