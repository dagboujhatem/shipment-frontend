import { Component, Input, OnInit } from '@angular/core';
import classNames from 'classnames';

import { customTooltips } from '@coreui/chartjs/dist/js/coreui-chartjs.js';
import { getStyle, getColor, deepObjectsMerge } from '@coreui/utils/src';

@Component({
  selector: 'app-chart-bar-simple',
  templateUrl: './chart-bar-simple.component.html',
  styleUrls: ['./chart-bar-simple.component.scss'],
})
export class ChartBarSimpleComponent implements OnInit {
  @Input() color = 'success';

  pointed: Boolean;
  pointHoverBackgroundColor: String;

  borderColor = 'rgba(255,255,255,.55)';
  backgroundColor = 'transparent';

  // datasets
  datasets: Array<any> = [
    {
      data: [10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12],
      label: 'Serie A',
      barPercentage: 0.5,
      categoryPercentage: 1,
    },
  ];

  // options
  options = {
    responsive: true,
    tooltips: {
      enabled: false,
      custom: customTooltips,
    },
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    scales: {
      xAxes: [
        {
          display: false,
          ticks: {
            display: false,
            min: Math.min.apply(Math, this.datasets[0].data) - 5,
            max: Math.max.apply(Math, this.datasets[0].data) + 5,
          },
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
      },
    },
  };

  labels: Array<any> = [
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
  ];

  public colors: Array<any> = [
    {
      backgroundColor: getStyle('--success') || '#4dbd74',
      // borderColor: getStyle('--success') || '#4dbd74',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
    },
  ];

  legend = false;
  chartType = 'bar';

  constructor() {}

  ngOnInit(): void {
    this.colors[0].backgroundColor = getColor(this.color) || '#4dbd74';
  }
}
