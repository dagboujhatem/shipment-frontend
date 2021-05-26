import { Component, OnInit, Input } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { IInboundsData, inboundsData } from './inbounds-data';
import { Moment } from 'moment';
import { DropdownsComponent } from '../buttons/dropdowns/dropdowns.component';
import { InboundsService } from '../../services/inbounds.service';

@Component({
  selector: 'app-inbounds',
  templateUrl: './inbounds.component.html',
  styleUrls: ['./inbounds.component.scss']
})
export class InboundsComponent implements OnInit {
  @Input() shipment_id: string;
  @Input() created_on: string;
  @Input() packing_sent: number;
  @Input() packing_received: number;
  @Input() items_sent: number;
  @Input() items_received: number;
  @Input() status: string;
  @Input() index: number;
  tableData = inboundsData;
  /* returnedArray: IInboundsData[]; */
  returnedArray: any[];
  DropdownsComponent = DropdownsComponent;
  selected: {startDate: Moment, endDate: Moment};
  currentPage = 1;
  page: number;
  constructor(private inboundsService : InboundsService) { }

  ngOnInit(): void {
       /* this.returnedArray = this.tableData.slice(0, 41); */
       this.returnedArray = this.inboundsService.inboundsData;
  }

    pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.page = event.page;
    this.returnedArray = this.tableData.slice(startItem, endItem);
  }
  getBadge(status) {
    switch (status) {
      case 'Completed':
        return 'success';
      case 'Created':
        return 'secondary';
      case 'Pending':
        return 'warning';
      case 'Receiving':
        return 'info';
      case 'Banned':
        return 'danger';
      default:
        return 'primary';
    }
  }
}
