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
        redirectTo: 'calendar',
      },
      {
        path: 'calendar',
        loadChildren: () =>
          import('./calendar/calendar.module').then(
            (m) => m.CalendarInitModule
          ),
      },
      {
        path: 'draggable-cards',
        loadChildren: () =>
          import('./draggable-cards/draggable-cards.module').then(
            (m) => m.DraggableCardsModule
          ),
      },
      {
        path: 'spinners',
        loadChildren: () =>
          import('./spinners/spinners.module').then((m) => m.SpinnersModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PluginsRoutingModule {}
