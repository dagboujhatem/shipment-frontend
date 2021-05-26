import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';
import { DefaultHeaderComponent } from './containers/default-layout/default-header/default-header.component';
import { DefaultHeaderDropdownAccountComponent } from './containers/default-layout/default-header-dropdown/default-header-dropdown-account.component';
import { DefaultHeaderDropdownMessagesComponent } from './containers/default-layout/default-header-dropdown/default-header-dropdown-messages.component';
import { DefaultHeaderDropdownNotificationsComponent } from './containers/default-layout/default-header-dropdown/default-header-dropdown-notifications.component';
import { DefaultHeaderDropdownTasksComponent } from './containers/default-layout/default-header-dropdown/default-header-dropdown-tasks.component';
import { DefaultAsideComponent } from './containers/default-layout/default-aside/default-aside.component';
// Import email
import { EmailLayoutComponent } from './containers';
import { EmailHeaderComponent } from './containers/email-layout/email-header/email-header.component';

// Import error pages
import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
// Import pages
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

const APP_CONTAINERS = [
  DefaultLayoutComponent,
  DefaultHeaderComponent,
  DefaultHeaderDropdownAccountComponent,
  DefaultHeaderDropdownMessagesComponent,
  DefaultHeaderDropdownNotificationsComponent,
  DefaultHeaderDropdownTasksComponent,
  DefaultAsideComponent,
  EmailLayoutComponent,
  EmailHeaderComponent,
];

import {
  AlertModule,
  BadgeModule,
  ButtonModule,
  BreadcrumbModule,
  CardModule,
  CalloutModule,
  ChartModule,
  CollapseModule,
  DropdownModule,
  FormModule,
  GridModule,
  LayoutModule,
  ListGroupModule,
  ProgressModule,
  SharedModule,
  SidebarModule,
  SwitchModule,
  TabsetModule,
  TogglerModule,
} from '@coreui/angular';

import { IconModule, IconSetModule, IconSetService } from '@coreui/icons-angular';

// 3rd party
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ToastrModule, ToastContainerModule } from 'ngx-toastr';

// Import routing module
import { AppRoutingModule } from './app.routing';
import { InboundsService } from './services/inbounds.service';


@NgModule({
    imports: [
        AlertModule,
        BadgeModule,
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        ButtonModule,
        BreadcrumbModule,
        CardModule,
        CalloutModule,
        ChartModule,
        CollapseModule,
        DropdownModule,
        GridModule,
        IconModule,
        IconSetModule.forRoot(),
        SharedModule,
        LayoutModule,
        ListGroupModule,
        ProgressModule,
        SidebarModule,
        SwitchModule,
        TabsetModule,
        TogglerModule,
        PerfectScrollbarModule,
        BsDropdownModule.forRoot(),
        ToastrModule.forRoot(),
        ToastContainerModule,
        FormModule,
    ],
  exports: [SharedModule],

  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
    IconSetService,
    InboundsService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
