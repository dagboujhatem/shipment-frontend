import { Component, Input, OnDestroy, OnInit } from '@angular/core';

const enum Color {
  primary = 'primary',
  secondary = 'secondary ',
  success = 'success',
  danger = 'danger',
  warning = 'warning',
  info = 'info',
  light = 'light',
  dark = 'dark',
  white = 'white',
  transparent = 'transparent',
}

@Component({
  templateUrl: 'alerts.component.html',
})
export class AlertsComponent implements OnInit, OnDestroy {
  constructor() {}

  readonly colors = [
    'primary',
    'secondary ',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
    // 'transparent',
    // 'white',
  ];

  showTime = [3000, 6000, 9000];
  showDismiss = [true, true, true];
  show = false;
  color = 'info';
  dismissible = true;
  timeouts = [];

  ngOnInit() {
    this.setTimers();
  }

  ngOnDestroy() {
    this.clearTimeouts();
  }

  clearTimeouts() {
    this.timeouts.map((item, index) => {
      clearTimeout(this.timeouts[index]);
      this.timeouts[index] = null;
    });
  }

  setTimers() {
    this.showTime.map((time, index) => {
      this.timeouts[index] = setTimeout(() => {
        // this.showTime[index] = item;
      }, time);
    });
  }

  onResetShowTime() {
    this.clearTimeouts();
    this.showTime = [3000, 6000, 9000];
    this.setTimers();
  }

  onDismiss(id) {
    this.showDismiss[id] = false;
  }

  onResetDismiss() {
    this.showDismiss = [true, true, true];
  }

  onToggleDismiss() {
    this.dismissible = !this.dismissible;
  }

  // dismissible = true;
  // alerts: any = [
  //   {
  //     type: 'success',
  //     msg: `You successfully read this important alert message.`
  //   },
  //   {
  //     type: 'info',
  //     msg: `This alert needs your attention, but it's not super important.`
  //   },
  //   {
  //     type: 'danger',
  //     msg: `Better check yourself, you're not looking too good.`
  //   }
  // ];
  //
  // alertsHtml: any = [
  //   {
  //     type: 'success',
  //     msg: `<strong>Well done!</strong> You successfully read this important alert message.`
  //   },
  //   {
  //     type: 'info',
  //     msg: `<strong>Heads up!</strong> This alert needs your attention, but it's not super important.`
  //   },
  //   {
  //     type: 'danger',
  //     msg: `<strong>Warning!</strong> Better check yourself, you're not looking too good.`
  //   }
  // ];
  //
  // index = 0;
  // messages = [
  //   'You successfully read this important alert message.',
  //   'Now this text is different from what it was before. Go ahead and click the button one more time',
  //   'Well done! Click reset button and you\'ll see the first message'
  // ];
  //
  // alertsDismiss: any = [];
  //
  // reset(): void {
  //   this.alerts = this.alerts.map((alert: any) => Object.assign({}, alert));
  // }
  //
  // changeText() {
  //   if (this.messages.length - 1 !== this.index) {
  //     this.index++;
  //   }
  // }
  //
  // add(): void {
  //   this.alertsDismiss.push({
  //     type: 'info',
  //     msg: `This alert will be closed in 5 seconds (added: ${new Date().toLocaleTimeString()})`,
  //     timeout: 5000
  //   });
  // }
}
