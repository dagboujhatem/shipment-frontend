import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragulaModule } from 'ng2-dragula';

import { CardModule, GridModule } from '@coreui/angular';

// Spinners
import { DraggableCardsComponent } from './draggable-cards.component';

// Routing
import { DraggableCardsRoutingModule } from './draggable-cards-routing.module';
//
@NgModule({
  imports: [
    DraggableCardsRoutingModule,
    CommonModule,
    CardModule,
    GridModule,
    DragulaModule.forRoot(),
  ],
  declarations: [DraggableCardsComponent],
})
export class DraggableCardsModule {}
