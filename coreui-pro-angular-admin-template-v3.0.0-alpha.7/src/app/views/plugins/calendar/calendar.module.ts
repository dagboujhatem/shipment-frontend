import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Calendar
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import {
  ButtonModule,
  CardModule,
  GridModule,
} from '@coreui/angular';

import { CalendarComponent } from './calendar.component';

// Routing
import { CalendarRoutingModule } from './calendar-routing.module';
//
@NgModule({
  imports: [
    CalendarRoutingModule,
    CommonModule,
    ButtonModule,
    CardModule,
    GridModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  declarations: [CalendarComponent],
  exports: [CalendarComponent],
})
export class CalendarInitModule {}
