import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ButtonsComponent } from './buttons/buttons.component';
import { ButtonGroupsComponent } from './button-groups/button-groups.component';
import { DropdownsComponent } from './dropdowns/dropdowns.component';
import { BrandButtonsComponent } from './brand-buttons/brand-buttons.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Buttons',
    },
    children: [
      {
        path: '',
        redirectTo: 'buttons',
      },
      {
        path: 'buttons',
        component: ButtonsComponent,
        data: {
          title: 'Buttons',
        },
      },
      {
        path: 'button-groups',
        component: ButtonGroupsComponent,
        data: {
          title: 'Button Groups',
        },
      },
      {
        path: 'dropdowns',
        component: DropdownsComponent,
        data: {
          title: 'Dropdowns',
        },
      },
      {
        path: 'brand-buttons',
        component: BrandButtonsComponent,
        data: {
          title: 'Brand buttons',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ButtonsRoutingModule {}
