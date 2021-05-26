import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AgmCoreModule } from '@agm/core';
import { GoogleMapsComponent } from './google-maps.component';
import { GoogleMapsRoutingModule } from './google-maps-routing.module';

import { CardModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    GoogleMapsRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyASyYRBZmULmrmw_P9kgr7_266OhFNinPA',
      // To use the Google Maps JavaScript API, you must register your app project on the Google API Console and get a Google API key which you can add to your app
    }),
    CardModule,
    IconModule,
  ],
  providers: [],
  declarations: [GoogleMapsComponent],
  bootstrap: [GoogleMapsComponent],
})
export class MapsModule {}
