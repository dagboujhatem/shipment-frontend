import { Component } from '@angular/core';

@Component({
  templateUrl: 'cards.component.html',
})
export class CardsComponent {
  collapsed = false;
  togglerIcons = ['cil-chevron-top', 'cil-chevron-bottom'];

  get currentIcon() {
    return this.collapsed ? this.togglerIcons[1] : this.togglerIcons[0];
  }

  loremText =
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.';

  constructor() {}

  toggleCollapse() {
    this.collapsed = !this.collapsed;
  }
}
