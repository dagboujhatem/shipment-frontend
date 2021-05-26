import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { CardsComponent } from './cards/cards.component';
import { CarouselsComponent } from './carousels/carousels.component';
import { CollapsesComponent } from './collapses/collapses.component';
import { ImagesComponent } from './images/images.component';
import { JumbotronsComponent } from './jumbotrons/jumbotrons.component';
import { ListGroupsComponent } from './list-groups/list-groups.component';
import { NavbarsComponent } from './navbars/navbars.component';
import { NavsComponent } from './navs/navs.component';
import { ProgressComponent } from './progress/progress.component';
import { SwitchesComponent } from './switches/switches.component';
import { TabsComponent } from './tabs/tabs.component';
import { PaginationsComponent } from './paginations/paginations.component';
import { PopoversComponent } from './popovers/popovers.component';
import { TooltipsComponent } from './tooltips/tooltips.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Base',
    },
    children: [
      {
        path: '',
        redirectTo: 'cards',
      },
      {
        path: 'breadcrumbs',
        component: BreadcrumbsComponent,
        data: {
          title: 'Breadcrumbs',
        },
      },
      {
        path: 'cards',
        component: CardsComponent,
        data: {
          title: 'Cards',
        },
      },
      {
        path: 'carousels',
        component: CarouselsComponent,
        data: {
          title: 'Carousels',
        },
      },
      {
        path: 'collapses',
        component: CollapsesComponent,
        data: {
          title: 'Collapses',
        },
      },
      {
        path: 'images',
        component: ImagesComponent,
        data: {
          title: 'Images',
        },
      },
      {
        path: 'jumbotrons',
        component: JumbotronsComponent,
        data: {
          title: 'Jumbotrons',
        },
      },
      {
        path: 'list-groups',
        component: ListGroupsComponent,
        data: {
          title: 'List Groups',
        },
      },
      {
        path: 'navbars',
        component: NavbarsComponent,
        data: {
          title: 'Navbars',
        },
      },
      {
        path: 'navs',
        component: NavsComponent,
        data: {
          title: 'Navs',
        },
      },
      {
        path: 'paginations',
        component: PaginationsComponent,
        data: {
          title: 'Pagination',
        },
      },
      {
        path: 'progress',
        component: ProgressComponent,
        data: {
          title: 'Progress',
        },
      },
      {
        path: 'popovers',
        component: PopoversComponent,
        data: {
          title: 'Popovers',
        },
      },
      {
        path: 'switches',
        component: SwitchesComponent,
        data: {
          title: 'Switches',
        },
      },
      {
        path: 'tabs',
        component: TabsComponent,
        data: {
          title: 'Tabs',
        },
      },
      {
        path: 'tooltips',
        component: TooltipsComponent,
        data: {
          title: 'Tooltips',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BaseRoutingModule {}
