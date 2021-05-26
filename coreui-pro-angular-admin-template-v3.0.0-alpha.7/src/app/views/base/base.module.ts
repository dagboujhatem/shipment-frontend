// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// CoreUI Modules
import {
  AccordionModule,
  BadgeModule,
  BreadcrumbModule,
  ButtonModule,
  CardModule,
  CollapseModule,
  FormModule,
  GridModule,
  ImgModule,
  NavbarModule,
  ProgressModule,
  SwitchModule,
  SpinnerModule,
  TabsetModule,
  ListGroupModule,
  TogglerModule,
  NavModule,
} from '@coreui/angular';

import { IconModule } from '@coreui/icons-angular';

// ngx modules
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { PaginationModule } from 'ngx-bootstrap/pagination';

import { NgxTippyModule } from 'ngx-tippy-wrapper';

// views
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { CardsComponent } from './cards/cards.component';
import { CarouselsComponent } from './carousels/carousels.component';
import { CollapsesComponent } from './collapses/collapses.component';
import { ImagesComponent } from './images/images.component';
import { JumbotronsComponent } from './jumbotrons/jumbotrons.component';
import { ListGroupsComponent } from './list-groups/list-groups.component';
import { NavbarsComponent } from './navbars/navbars.component';
import { NavsComponent } from './navs/navs.component';
import { PopoversComponent } from './popovers/popovers.component';
import { ProgressComponent } from './progress/progress.component';
import { SpinnersComponent } from './spinners/spinners.component';
import { SwitchesComponent } from './switches/switches.component';
import { TabsComponent } from './tabs/tabs.component';
import { TooltipsComponent } from './tooltips/tooltips.component';
import { PaginationsComponent } from './paginations/paginations.component';

// Components Routing
import { BaseRoutingModule } from './base-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        BaseRoutingModule,
        AccordionModule,
        BadgeModule,
        BreadcrumbModule,
        ButtonModule,
        CardModule,
        CollapseModule,
        GridModule,
        ImgModule,
        ListGroupModule,
        ProgressModule,
        NavbarModule,
        SwitchModule,
        SpinnerModule,
        SwitchModule,
        TabsetModule,
        BadgeModule,
        IconModule,
        TogglerModule,
        NavModule,
        // ngx
        BsDropdownModule.forRoot(),
        CarouselModule.forRoot(),
        PaginationModule.forRoot(),
        NgxTippyModule,
        FormModule,
    ],
  declarations: [
    BreadcrumbsComponent,
    CardsComponent,
    CarouselsComponent,
    CollapsesComponent,
    JumbotronsComponent,
    ListGroupsComponent,
    NavbarsComponent,
    NavsComponent,
    SpinnersComponent,
    SwitchesComponent,
    ProgressComponent,
    TabsComponent,
    PaginationsComponent,
    PopoversComponent,
    TooltipsComponent,
    PaginationsComponent,
    ImagesComponent,
  ],
})
export class BaseModule {}
