import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TextEditorsComponent } from './text-editors/text-editors.component';
import { CodeEditorsComponent } from './code-editors/code-editors.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Editors',
    },
    children: [
      {
        path: '',
        redirectTo: 'text-editors',
      },
      {
        path: 'text-editors',
        component: TextEditorsComponent,
        data: {
          title: 'Text Editors',
        },
      },
      {
        path: 'code-editors',
        component: CodeEditorsComponent,
        data: {
          title: 'Code Editors',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditorsRoutingModule {}
