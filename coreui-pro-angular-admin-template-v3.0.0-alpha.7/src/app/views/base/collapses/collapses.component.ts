import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collapses',
  templateUrl: './collapses.component.html',
  styleUrls: ['./collapses.component.scss'],
})
export class CollapsesComponent implements OnInit {
  collapses = [];
  accordion = [];
  custom = [];
  loremText =
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.';

  constructor() {}

  ngOnInit() {
    this.collapses.length = 8;
    this.collapses = this.collapses.fill(true);
    this.accordion.length = 3;
    this.accordion = this.accordion.fill(false);
    this.accordion[0] = true;
    this.custom.length = 3;
    this.custom = this.custom.fill(false);
    this.custom[0] = true;
  }

  toggleCollapse(id) {
    this.collapses[id] = !this.collapses[id];
  }

  toggleAccordion(id) {
    this.accordion.forEach((item, idx) => {
      this.accordion[idx] = id === idx ? !item : false;
    });
  }
  toggleCustom(id) {
    this.custom[id] = !this.custom[id];
  }
}
