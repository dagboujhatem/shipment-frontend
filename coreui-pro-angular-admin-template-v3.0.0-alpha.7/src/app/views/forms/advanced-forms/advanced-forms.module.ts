import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Angular 2 Input Mask
import { TextMaskModule } from 'angular2-text-mask';

// Timepicker
import { TimepickerModule } from 'ngx-bootstrap/timepicker';

// Datepicker
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

// Ng2-select
import { SelectModule } from 'ng-select';

// CoreUI
import { ButtonModule, CardModule, FormModule, GridModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';

// Routing
import { AdvancedFormsRoutingModule } from './advanced-forms-routing.module';

import { AdvancedFormsComponent } from './advanced-forms.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdvancedFormsRoutingModule,
    TextMaskModule,
    TimepickerModule.forRoot(),
    BsDatepickerModule.forRoot(),
    SelectModule,
    CardModule,
    GridModule,
    ButtonModule,
    FormModule,
    IconModule
  ],
  declarations: [
    AdvancedFormsComponent
  ]
})
export class AdvancedFormsModule { }
