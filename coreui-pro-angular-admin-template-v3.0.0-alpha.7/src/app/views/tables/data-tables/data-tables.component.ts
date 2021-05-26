import { Component } from '@angular/core';
import { ITableData, DataTablesService } from './data-tables.service';

@Component({
  selector: 'app-data-tables',
  templateUrl: './data-tables.component.html',
  styleUrls: ['./data-tables.component.scss'],
  providers: [DataTablesService],
})
export class DataTablesComponent {
  error: any;
  public data: ITableData;
  public filterQuery = '';

  constructor(private dataTableService: DataTablesService) {
    this.dataTableService.getData().subscribe(
      (data: ITableData) => {
        setTimeout(() => {
          this.data = [...data];
        }, 1000);
      }, // success path
      (error) => (this.error = error) // error path
    );
  }

  public toInt(num: string) {
    return +num;
  }

  public sortByWordLength = (a: any) => {
    return a.name.length;
  }

  public getDate(regDate: string) {
    const date = new Date(regDate);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
    });
  }
}
