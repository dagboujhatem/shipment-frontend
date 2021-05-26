import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  BadgeModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  FormModule,
  GridModule,
  LayoutModule,
} from '@coreui/angular';

import { IconModule } from '@coreui/icons-angular';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { EmailRoutingModule } from './email-routing.module';
import { InboxComponent } from './inbox/inbox.component';
import { ComposeComponent } from './compose/compose.component';
import { MessageComponent } from './message/message.component';
import { InboxMessageComponent } from './inbox-message/inbox-message.component';
import { MailToolbarComponent } from './mail-toolbar/mail-toolbar.component';

@NgModule({
  declarations: [
    InboxComponent,
    ComposeComponent,
    MessageComponent,
    InboxMessageComponent,
    MailToolbarComponent,
  ],
    imports: [
        CommonModule,
        EmailRoutingModule,
        GridModule,
        CardModule,
        LayoutModule,
        IconModule,
        ButtonModule,
        DropdownModule,
        BadgeModule,
        BsDropdownModule.forRoot(),
        FormModule,
    ],
})
export class EmailModule {}
