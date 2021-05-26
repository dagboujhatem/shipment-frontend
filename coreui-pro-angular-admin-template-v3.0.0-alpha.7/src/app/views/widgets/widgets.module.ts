import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import {
  ButtonModule,
  CardModule,
  ChartModule,
  GridModule,
  // IconModule,
  WidgetModule,
} from '@coreui/angular';

import { IconModule } from '@coreui/icons-angular';

import { WidgetsComponent } from './widgets.component';
import { WidgetsRoutingModule } from './widgets-routing.module';
import { WidgetsBrandComponent } from './widgets-brand/widgets-brand.component';
import { WidgetsDropdownComponent } from './widgets-dropdown/widgets-dropdown.component';

import { ChartLineSimpleComponent } from './chart-line-simple/chart-line-simple.component';
import { ChartBarSimpleComponent } from './chart-bar-simple/chart-bar-simple.component';

@NgModule({
  declarations: [
    WidgetsComponent,
    WidgetsBrandComponent,
    WidgetsDropdownComponent,
    ChartLineSimpleComponent,
    ChartBarSimpleComponent,
  ],
  imports: [
    CommonModule,
    WidgetsRoutingModule,
    BsDropdownModule,
    ButtonModule,
    CardModule,
    ChartModule,
    GridModule,
    IconModule,
    WidgetModule,
    WidgetModule,
  ],
})
export class WidgetsModule {}
