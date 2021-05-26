import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  templateUrl: 'spinners.component.html',
  styleUrls: ['./spinners.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SpinnersComponent {
  public spinkit = [
    'plane',
    'chase',
    'bounce',
    'wave',
    'pulse',
    'flow',
    'swing',
    'circle',
    'circle-fade',
    'grid',
    'fold',
    'wander',
  ];
}
