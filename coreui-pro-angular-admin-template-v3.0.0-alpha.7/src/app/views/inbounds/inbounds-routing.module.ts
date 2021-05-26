import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InboundsComponent } from './inbounds.component';

const routes: Routes = [{ path: '', component: InboundsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InboundsRoutingModule { }
