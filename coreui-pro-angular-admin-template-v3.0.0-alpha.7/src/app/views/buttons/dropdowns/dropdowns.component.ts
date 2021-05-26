import { Component, OnDestroy, ViewChild } from '@angular/core';
import { BsDropdownToggleDirective } from 'ngx-bootstrap/dropdown';

@Component({
  templateUrl: 'dropdowns.component.html',
  styleUrls: ['dropdowns.component.scss'],
})
export class DropdownsComponent {
  disabled = false;
  isDropup = true;
  autoClose = false;

  items: string[] = [
    'The first choice!',
    'And another choice for you.',
    'but wait! A third!',
  ];

  @ViewChild('manual') manual: BsDropdownToggleDirective;

  constructor() {}

  onHidden(): void {
    console.log('Dropdown is hidden');
  }
  onShown(): void {
    console.log('Dropdown is shown');
  }
  isOpenChange(): void {
    console.log('Dropdown state is changed');
  }

  toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.manual.isOpen = !this.manual.isOpen;
  }

  change(value: boolean): void {
    this.manual.isOpen = value;
  }
}
