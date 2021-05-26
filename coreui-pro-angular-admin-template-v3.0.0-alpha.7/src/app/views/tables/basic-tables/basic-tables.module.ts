import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginationModule } from 'ngx-bootstrap/pagination';

import { BadgeModule, CardModule, GridModule } from '@coreui/angular';

import { BasicTablesComponent } from './basic-tables.component';

import { BasicTablesRoutingModule } from './basic-tables-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [BasicTablesComponent],
  imports: [
    CommonModule,
    BasicTablesRoutingModule,
    BadgeModule,
    CardModule,
    GridModule,
    PaginationModule.forRoot(),
    FormsModule,
  ],
})
export class BasicTablesModule {}
