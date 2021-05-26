import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { BadgeModule, ButtonModule, CardModule, FormModule, GridModule } from '@coreui/angular';

// Routing
import { ValidationFormsRoutingModule } from './validation-forms-routing.module';
import { ValidationFormsComponent } from './validation-forms.component';

@NgModule({
  declarations: [ValidationFormsComponent],
    imports: [
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        ValidationFormsRoutingModule,
        GridModule,
        CardModule,
        ButtonModule,
        BadgeModule,
        FormModule,
    ],
  providers: [],
  bootstrap: [ValidationFormsComponent],
})
export class ValidationFormsModule {}
