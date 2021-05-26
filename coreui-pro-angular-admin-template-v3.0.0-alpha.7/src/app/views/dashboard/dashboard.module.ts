import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

import {
  CalloutModule,
  CardModule,
  GridModule,
  ProgressModule,
  ButtonModule,
  DropdownModule,
  ChartModule,
  SharedModule
} from '@coreui/angular';

import { IconModule } from '@coreui/icons-angular';

@NgModule({
  imports: [
    FormsModule,
    DashboardRoutingModule,
    // ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    CalloutModule,
    CardModule,
    GridModule,
    IconModule,
    ProgressModule,
    ButtonModule,
    DropdownModule,
    ChartModule,
    SharedModule
  ],
  declarations: [
    DashboardComponent
  ]
})
export class DashboardModule { }
