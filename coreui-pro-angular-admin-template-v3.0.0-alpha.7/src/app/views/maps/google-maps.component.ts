import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'google-maps.component.html',
  styleUrls: ['google-maps.component.scss'],
})
export class GoogleMapsComponent {
  title: string = '';
  lat: number = 37.431489;
  lng: number = -122.163719;
  zoom: number = 11;

  markers: Marker[] = [
    {
      lat: 37.431489,
      lng: -122.163719,
      label: 'S',
      draggable: false,
      title: 'Stanford',
      www: 'https://www.stanford.edu/',
    },
    {
      lat: 37.394694,
      lng: -122.150333,
      label: 'T',
      draggable: false,
      title: 'Tesla',
      www: 'https://www.tesla.com/',
    },
    {
      lat: 37.331681,
      lng: -122.0301,
      label: 'A',
      draggable: false,
      title: 'Apple',
      www: 'https://www.apple.com/',
    },
    {
      lat: 37.484722,
      lng: -122.148333,
      label: 'F',
      draggable: false,
      title: 'Facebook',
      www: 'https://www.facebook.com/',
    },
  ];
}

// just an interface for type safety.
interface Marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
  title: string;
  www: string;
}
