import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TherapistRoutingModule } from './therapist-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    TherapistRoutingModule
  ]
})
export class TherapistModule { }
