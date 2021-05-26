import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Plugins',
    },
    children: [
      {
        path: '',
        redirectTo: 'tables',
      },
      {
        path: 'tables',
        loadChildren: () =>
          import('./basic-tables/basic-tables.module').then(
            (m) => m.BasicTablesModule
          ),
      },
      {
        path: 'datatables',
        loadChildren: () =>
          import('./data-tables/data-tables.module').then(
            (m) => m.DataTablesInitModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablesRoutingModule {}
