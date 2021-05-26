import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InboundsRoutingModule } from './inbounds-routing.module';
import { InboundsComponent } from './inbounds.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule } from '@angular/forms';
import { CardModule, GridModule, BadgeModule, ButtonModule, CollapseModule } from '@coreui/angular';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { IconModule } from '@coreui/icons-angular';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';


@NgModule({
  declarations: [InboundsComponent],
  imports: [
    CommonModule,
    InboundsRoutingModule,
    BadgeModule,
    CardModule,
    GridModule,
    PaginationModule.forRoot(),
    FormsModule,
    ButtonModule,
    NgxDaterangepickerMd.forRoot(),
    IconModule,
    CollapseModule,
    BsDropdownModule,
  ]
})
export class InboundsModule { }
