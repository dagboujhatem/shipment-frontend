import { Component, OnInit } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

import { usersData, IUsersData } from './users-data';

@Component({
  selector: 'app-basic-tables',
  templateUrl: './basic-tables.component.html',
  styleUrls: ['./basic-tables.component.scss'],
})
export class BasicTablesComponent implements OnInit {
  tableData = usersData;
  returnedArray: IUsersData[];

  currentPage = 1;
  page: number;

  constructor() {}

  ngOnInit(): void {
    this.returnedArray = this.tableData.slice(0, 5);
  }

  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.page = event.page;
    this.returnedArray = this.tableData.slice(startItem, endItem);
  }

  getBadge(status) {
    switch (status) {
      case 'Active':
        return 'success';
      case 'Inactive':
        return 'secondary';
      case 'Pending':
        return 'warning';
      case 'Banned':
        return 'danger';
      default:
        return 'primary';
    }
  }
}
