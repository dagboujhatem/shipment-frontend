import { Component, OnInit } from '@angular/core';

import { DashboardChartsData, IChartProps } from './dashboard-charts-data';

@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public radioModel = 'Month';

  public mainChart: IChartProps = {};
  public chart: Array<IChartProps> = [];
  public brandBoxChart: IChartProps = {};

  constructor(private chartsData: DashboardChartsData) {}

  ngOnInit(): void {
    this.initCharts();
  }

  initCharts(): void {
    this.mainChart = this.chartsData.mainChart;
    this.chart = this.chartsData.widgetChart;
    this.brandBoxChart = this.chartsData.brandBoxChart;
  }
}
