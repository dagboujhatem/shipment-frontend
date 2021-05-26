import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  CardModule,
  GridModule,
  ChartModule,
  SharedModule,
} from '@coreui/angular';

import { ChartjsComponent } from './chartjs.component';
import { ChartjsRoutingModule } from './chartjs-routing.module';

@NgModule({
  declarations: [ChartjsComponent],
  imports: [
    CommonModule,
    ChartjsRoutingModule,
    ChartModule,
    CardModule,
    GridModule,
  ],
})
export class ChartjsModule {}
