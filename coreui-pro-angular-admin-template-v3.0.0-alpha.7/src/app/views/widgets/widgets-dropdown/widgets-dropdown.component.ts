import { Component, OnInit } from '@angular/core';

import {
  DashboardChartsData,
  IChartProps,
} from '../../dashboard/dashboard-charts-data';

@Component({
  selector: 'app-widgets-dropdown',
  templateUrl: './widgets-dropdown.component.html',
  styleUrls: ['./widgets-dropdown.component.scss'],
})
export class WidgetsDropdownComponent implements OnInit {
  public chart: Array<IChartProps> = [];

  constructor(private chartsData: DashboardChartsData) {}

  ngOnInit(): void {
    this.chart = this.chartsData.widgetChart;
  }
}
