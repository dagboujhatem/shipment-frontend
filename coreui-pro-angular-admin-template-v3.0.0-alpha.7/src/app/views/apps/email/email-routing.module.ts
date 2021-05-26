import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InboxComponent } from './inbox/inbox.component';
import { ComposeComponent } from './compose/compose.component';
import { MessageComponent } from './message/message.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Email',
    },
    children: [
      {
        path: '',
        redirectTo: 'inbox',
      },
      {
        path: 'inbox',
        component: InboxComponent,
        data: {
          title: 'Inbox',
        },
      },
      {
        path: 'compose',
        component: ComposeComponent,
        data: {
          title: 'Compose',
        },
      },
      {
        path: 'inbox/message',
        component: MessageComponent,
        data: {
          title: 'Message',
        },
      },
      {
        path: '**',
        redirectTo: 'inbox',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmailRoutingModule {}
