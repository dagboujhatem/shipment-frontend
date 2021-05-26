import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// CoreUI Modules
import {
  ButtonModule,
  CardModule,
  DropdownModule,
  FormModule,
  GridModule,
} from '@coreui/angular';

import { IconModule } from '@coreui/icons-angular';

// Buttons Views
import { ButtonsComponent } from './buttons/buttons.component';
import { ButtonGroupsComponent } from './button-groups/button-groups.component';
import { DropdownsComponent } from './dropdowns/dropdowns.component';
import { BrandButtonsComponent } from './brand-buttons/brand-buttons.component';

// Buttons Routing
import { ButtonsRoutingModule } from './buttons-routing.module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
  declarations: [
    ButtonsComponent,
    ButtonGroupsComponent,
    DropdownsComponent,
    BrandButtonsComponent,
  ],
    imports: [
        CommonModule,
        ButtonsRoutingModule,
        ButtonModule,
        CardModule,
        DropdownModule,
        GridModule,
        IconModule,
        FormsModule,
        BsDropdownModule,
        FormModule,
    ],
})
export class ButtonsModule {}
