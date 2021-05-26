import { Component } from '@angular/core';

enum Months {
  'January' = 1,
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
}

@Component({
  selector: 'app-basic-forms',
  templateUrl: 'basic-forms.component.html',
  styleUrls: ['./basic-forms.component.scss'],
})
export class BasicFormsComponent {

  constructor() {}

  months: Months;
  isCollapsed: boolean = false;
  iconCollapse: string = 'cil-chevron-top';

  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
    this.iconCollapse = this.isCollapsed
      ? 'cil-chevron-bottom'
      : 'cil-chevron-top';
  }
}
