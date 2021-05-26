import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  ButtonModule,
  CardModule,
  GridModule,
} from '@coreui/angular';

import { IconModule } from '@coreui/icons-angular';

import { InvoiceRoutingModule } from './invoice-routing.module';
import { InvoiceComponent } from './invoice.component';

@NgModule({
  declarations: [InvoiceComponent],
  imports: [
    CommonModule,
    InvoiceRoutingModule,
    ButtonModule,
    CardModule,
    GridModule,
    IconModule,
  ],
})
export class InvoiceModule {}
