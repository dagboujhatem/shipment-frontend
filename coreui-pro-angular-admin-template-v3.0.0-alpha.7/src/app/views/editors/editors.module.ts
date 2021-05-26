import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Ngx-Quill
import { QuillModule } from 'ngx-quill';

// ng2-ace-editor
import { AceEditorModule } from 'ng2-ace-editor';

// CoreUI
import { CardModule } from '@coreui/angular';

// Routing
import { EditorsRoutingModule } from './editors-routing.module';

// Views
import { CodeEditorsComponent } from './code-editors/code-editors.component';
import { TextEditorsComponent } from './text-editors/text-editors.component';

@NgModule({
  imports: [
    FormsModule,
    EditorsRoutingModule,
    QuillModule.forRoot(),
    AceEditorModule,
    CardModule,
  ],
  declarations: [CodeEditorsComponent, TextEditorsComponent],
})
export class EditorsModule {}
