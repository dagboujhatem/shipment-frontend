import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValidationFormsComponent } from './validation-forms.component';

const routes: Routes = [
  {
    path: '',
    component: ValidationFormsComponent,
    data: {
      title: 'Form Validation',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValidationFormsRoutingModule {}
