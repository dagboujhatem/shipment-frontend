import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss'],
})
export class InvoiceComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  print() {
    // tslint:disable-next-line:no-unused-expression
    window && window.print();
  }
}
