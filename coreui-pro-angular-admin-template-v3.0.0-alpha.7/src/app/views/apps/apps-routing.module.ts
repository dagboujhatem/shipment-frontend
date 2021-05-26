import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Apps',
    },
    children: [
      // {
      //   path: 'email',
      //   loadChildren: () => import('./email/email.module').then(m => m.EmailModule)
      // },
      {
        path: 'invoicing',
        loadChildren: () =>
          import('./invoicing/invoice.module').then((m) => m.InvoiceModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppsRoutingModule {}
