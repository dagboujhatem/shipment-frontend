import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Forms',
    },
    children: [
      {
        path: '',
        redirectTo: 'basic-forms',
      },
      {
        path: 'basic-forms',
        loadChildren: () =>
          import('./basic-forms/basic-forms.module').then(
            (m) => m.BasicFormsModule
          ),
      },
      {
        path: 'advanced-forms',
        loadChildren: () =>
          import('./advanced-forms/advanced-forms.module').then(
            (m) => m.AdvancedFormsModule
          ),
      },
      {
        path: 'validation-forms',
        loadChildren: () =>
          import('./validation-forms/validation-forms.module').then(
            (m) => m.ValidationFormsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormsRoutingModule {}
