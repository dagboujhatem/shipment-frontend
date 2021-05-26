import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// mgx-bootstrap
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

// CoreUI
import { ButtonModule, CardModule, FormModule, GridModule, CollapseModule } from '@coreui/angular';

import { IconModule } from '@coreui/icons-angular';

// Routing
import { BasicFormsRoutingModule } from './basic-forms-routing.module';
import { BasicFormsComponent } from './basic-forms.component';

@NgModule({
    imports: [
        CommonModule,
        BasicFormsRoutingModule,
        BsDropdownModule.forRoot(),
        FormsModule,
        CardModule,
        CollapseModule,
        GridModule,
        IconModule,
        ButtonModule,
        FormModule,
    ],
  declarations: [
    BasicFormsComponent
  ]
})
export class BasicFormsModule { }
