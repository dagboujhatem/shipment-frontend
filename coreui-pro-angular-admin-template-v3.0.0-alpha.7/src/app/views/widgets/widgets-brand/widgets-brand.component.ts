import { Component, Input, OnInit } from '@angular/core';

import {
  DashboardChartsData,
  IChartProps,
} from '../../dashboard/dashboard-charts-data';

@Component({
  selector: 'app-widgets-brand',
  templateUrl: './widgets-brand.component.html',
  styleUrls: ['./widgets-brand.component.scss'],
})
export class WidgetsBrandComponent implements OnInit {
  public brandBoxChart: IChartProps = {};

  @Input() noCharts: boolean;

  constructor(private chartsData: DashboardChartsData) {}

  ngOnInit(): void {
    this.brandBoxChart = this.chartsData.brandBoxChart;
  }
}
