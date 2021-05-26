import { Injectable } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/utils';
import { customTooltips } from '@coreui/chartjs/dist/js/coreui-chartjs.js';

export interface IChartProps {
  Data?: any;
  labels?: any;
  options?: any;
  colors?: any;
  type?: any;
  legend?: any;
  [propName: string]: any;
}

@Injectable({
  providedIn: 'any',
})
export class DashboardChartsData {
  public mainChart: IChartProps = {};
  public widgetChart: Array<any> = [];
  public brandBoxChart: any = {};

  constructor() {
    this.initWidgetCharts();
    this.initMainChart();
    this.initBrandCharts();
  }

  public random(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  initWidgetCharts() {
    // chart 0
    this.widgetChart[0] = {};
    this.widgetChart[0].colors = [
      {
        backgroundColor: 'transparent',
        borderColor: 'rgba(255,255,255,.55)',
        pointBackgroundColor: getStyle('--primary'),
      },
    ];
    this.widgetChart[0].legend = true;
    this.widgetChart[0].type = 'line';
    this.widgetChart[0].data = [
      {
        data: [65, 59, 84, 84, 51, 55, 40],
        label: 'Series A',
      },
    ];
    this.widgetChart[0].labels = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
    ];
    this.widgetChart[0].options = {
      tooltips: {
        enabled: false,
        custom: customTooltips,
      },
      animation: {
        duration: 0,
      },
      responsiveAnimationDuration: 0,
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [
          {
            gridLines: {
              color: 'transparent',
              zeroLineColor: 'transparent',
            },
            ticks: {
              fontSize: 2,
              fontColor: 'transparent',
            },
          },
        ],
        yAxes: [
          {
            display: false,
            ticks: {
              display: false,
              min: 40 - 5,
              max: 84 + 5,
            },
          },
        ],
      },
      elements: {
        line: {
          borderWidth: 1,
        },
        point: {
          radius: 4,
          hitRadius: 10,
          hoverRadius: 4,
        },
      },
      legend: {
        display: false,
      },
    };

    // chart 1
    this.widgetChart[1] = JSON.parse(JSON.stringify(this.widgetChart[0]));
    this.widgetChart[1].options.tooltips = {
      enabled: false,
      custom: customTooltips,
    };
    this.widgetChart[1].options.elements.line.tension = 0.00001;
    this.widgetChart[1].options.scales.yAxes = [
      {
        display: false,
        ticks: { min: 1 - 5, max: 34 + 5 },
      },
    ];
    this.widgetChart[1].data = [
      {
        data: [1, 18, 9, 17, 34, 22, 11],
        label: 'Series A',
      },
    ];
    this.widgetChart[1].colors = [
      {
        backgroundColor: 'transparent',
        borderColor: 'rgba(255,255,255,.55)',
        pointBackgroundColor: getStyle('--info'),
      },
    ];

    // chart 2
    this.widgetChart[2] = JSON.parse(JSON.stringify(this.widgetChart[0]));
    this.widgetChart[2].options.tooltips = {
      enabled: false,
      custom: customTooltips,
    };
    this.widgetChart[2].options.scales.xAxes = [
      {
        display: false,
      },
    ];
    this.widgetChart[2].options.scales.yAxes = [
      {
        display: false,
      },
    ];
    this.widgetChart[2].options.elements.line.borderWidth = 2;
    this.widgetChart[2].options.elements.point.radius = 0;
    this.widgetChart[2].data = [
      {
        data: [78, 81, 80, 45, 34, 12, 40],
        label: 'Series A',
      },
    ];
    this.widgetChart[2].colors = [
      {
        backgroundColor: 'rgba(255,255,255,.2)',
        borderColor: 'rgba(255,255,255,.55)',
        pointBackgroundColor: getStyle('--warning'),
      },
    ];

    // chart 3
    this.widgetChart[3] = JSON.parse(JSON.stringify(this.widgetChart[0]));
    this.widgetChart[3].options.tooltips = {
      enabled: false,
      custom: customTooltips,
    };
    this.widgetChart[3].options.scales.xAxes = [
      {
        display: false,
      },
    ];
    this.widgetChart[3].options.scales.yAxes = [
      {
        display: false,
      },
    ];
    this.widgetChart[3].data = [
      {
        barPercentage: 0.7,
        data: [78, 81, 80, 45, 34, 12, 40, 85, 65, 23, 12, 98, 34, 84, 67, 82],
        label: 'Series A',
      },
    ];
    this.widgetChart[3].labels = [
      'January',
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
      'January',
      'February',
      'March',
      'April',
    ];
    this.widgetChart[3].colors = [
      {
        backgroundColor: 'rgba(255,255,255,.2)',
        borderColor: 'rgba(255,255,255,.55)',
      },
    ];
    this.widgetChart[3].type = 'bar';
  }

  initMainChart() {
    const brandSuccess = getStyle('--success') || '#4dbd74';
    const brandInfo = getStyle('--info') || '#20a8d8';
    const brandInfoBg = hexToRgba('#20a8d8', 10);
    const brandDanger = getStyle('--danger') || '#f86c6b';

    // console.log(brandInfo, brandInfoBg);

    // mainChart
    this.mainChart.elements = 27;
    this.mainChart.Data1 = [];
    this.mainChart.Data2 = [];
    this.mainChart.Data3 = [];

    // generate random values for mainChart
    for (let i = 0; i <= this.mainChart.elements; i++) {
      this.mainChart.Data1.push(this.random(50, 200));
      this.mainChart.Data2.push(this.random(80, 100));
      this.mainChart.Data3.push(65);
    }

    this.mainChart.Data = [
      {
        data: this.mainChart.Data1,
        label: 'Current',
      },
      {
        data: this.mainChart.Data2,
        label: 'Previous',
      },
      {
        data: this.mainChart.Data3,
        label: 'BEP',
      },
    ];
    /* tslint:disable:max-line-length */
    this.mainChart.labels = [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
      'Monday',
      'Thursday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ];
    /* tslint:enable:max-line-length */
    this.mainChart.options = {
      tooltips: {
        enabled: false,
        custom: customTooltips,
        intersect: true,
        mode: 'index',
        position: 'nearest',
        callbacks: {
          labelColor: function (tooltipItem, chart) {
            return {
              backgroundColor:
                chart.data.datasets[tooltipItem.datasetIndex].borderColor,
            };
          },
        },
      },
      animation: {
        duration: 0,
      },
      responsiveAnimationDuration: 0,
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [
          {
            gridLines: {
              drawOnChartArea: false,
            },
            ticks: {
              callback: function (value: any) {
                return value.charAt(0);
              },
            },
          },
        ],
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              maxTicksLimit: 5,
              stepSize: Math.ceil(250 / 5),
              max: 250,
            },
          },
        ],
      },
      elements: {
        line: {
          borderWidth: 2,
        },
        point: {
          radius: 0,
          hitRadius: 10,
          hoverRadius: 4,
          hoverBorderWidth: 3,
        },
      },
      legend: {
        display: false,
      },
    };
    this.mainChart.colors = [
      {
        // brandInfo
        backgroundColor: brandInfoBg,
        borderColor: brandInfo,
        pointHoverBackgroundColor: '#fff',
      },
      {
        // brandSuccess
        backgroundColor: 'transparent',
        borderColor: brandSuccess || '#4dbd74',
        pointHoverBackgroundColor: '#fff',
      },
      {
        // brandDanger
        backgroundColor: 'transparent',
        borderColor: brandDanger || '#f86c6b',
        pointHoverBackgroundColor: '#fff',
        borderWidth: 1,
        borderDash: [8, 5],
      },
    ];
    this.mainChart.legend = false;
    this.mainChart.type = 'line';
  }

  initBrandCharts() {
    // social box charts
    this.brandBoxChart.Data1 = [
      {
        data: [65, 59, 84, 84, 51, 55, 40],
        label: 'Facebook',
      },
    ];
    this.brandBoxChart.Data2 = [
      {
        data: [1, 13, 9, 17, 34, 41, 38],
        label: 'Twitter',
      },
    ];
    this.brandBoxChart.Data3 = [
      {
        data: [78, 81, 80, 45, 34, 12, 40],
        label: 'LinkedIn',
      },
    ];
    this.brandBoxChart.Data4 = [
      {
        data: [35, 23, 56, 22, 97, 23, 64],
        label: 'Events',
      },
    ];

    this.brandBoxChart.labels = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
    ];
    this.brandBoxChart.options = {
      tooltips: {
        enabled: false,
        custom: customTooltips,
      },
      animation: {
        duration: 0,
      },
      responsive: true,
      responsiveAnimationDuration: 0,
      maintainAspectRatio: false,
      scales: {
        xAxes: [
          {
            display: false,
          },
        ],
        yAxes: [
          {
            display: false,
          },
        ],
      },
      elements: {
        line: {
          borderWidth: 2,
        },
        point: {
          radius: 0,
          hitRadius: 10,
          hoverRadius: 4,
          hoverBorderWidth: 3,
        },
      },
      legend: {
        display: false,
      },
    };
    this.brandBoxChart.colors = [
      {
        backgroundColor: 'rgba(255,255,255,.1)',
        borderColor: 'rgba(255,255,255,.55)',
        pointHoverBackgroundColor: '#fff',
      },
    ];
    this.brandBoxChart.legend = false;
    this.brandBoxChart.type = 'line';
  }
}
