import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// ngx-toastr
import { ToastContainerModule } from 'ngx-toastr';

// CoreUI Modules
import {
  AlertModule,
  BadgeModule,
  ButtonModule,
  CardModule,
  GridModule,
  ModalModule,
  ProgressModule,
} from '@coreui/angular';

import { IconModule } from '@coreui/icons-angular';

// views
import { AlertsComponent } from './alerts.component';
import { BadgesComponent } from './badges.component';
import { ModalsComponent } from './modals.component';
import { ToasterComponent } from './toaster/toaster.component';

// Notifications Routing
import { NotificationsRoutingModule } from './notifications-routing.module';

@NgModule({
  imports: [
    CommonModule,
    // BrowserAnimationsModule,
    NotificationsRoutingModule,
    AlertModule,
    BadgeModule,
    ModalModule,
    CardModule,
    GridModule,
    ButtonModule,
    ProgressModule,
    IconModule,
    ToastContainerModule,
  ],
  declarations: [
    AlertsComponent,
    BadgesComponent,
    ModalsComponent,
    ToasterComponent,
  ],
})
export class NotificationsModule {}
