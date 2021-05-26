import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnDestroy, OnInit, OnChanges {
  private _setTab: number;
  get setTab() {
    return this._setTab;
  }
  set setTab(value: number) {
    this._setTab = value || 0;
  }
  private interval;

  private _lorem: string[] = [
    '1. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    '2. Mauris vel dolor justo. Nullam malesuada vitae quam in ullamcorper. Vivamus lobortis orci vel velit egestas, eu vulputate libero posuere. Sed elementum turpis eleifend consequat maximus. Praesent id euismod leo. Pellentesque eu nulla venenatis, ornare diam nec, ullamcorper erat. Fusce tincidunt sapien in quam bibendum pulvinar. Aliquam odio tellus, dapibus feugiat eros quis, condimentum vehicula nisi. Fusce feugiat quam velit.',
    '3. Disabled.',
    '4. Nullam quis semper ligula. Donec vel nulla lorem. Proin cursus eget mi accumsan bibendum. Duis scelerisque vestibulum ultricies. In vitae quam viverra, cursus magna at, vehicula lorem. Nulla tincidunt, mi ac consequat tincidunt, diam nisl tempus libero, quis vulputate nunc diam et erat. Pellentesque dapibus sem ultrices aliquet efficitur. Phasellus pulvinar enim eu dignissim ultrices. Morbi pellentesque at tortor eu tincidunt. Nunc molestie.',
  ];
  public get lorem() {
    return [...this._lorem];
  }

  private _tabs: any[] = [
    { header: 'Home', panel: this.lorem[0], icon: 'cil-home' },
    { header: 'Profile', panel: this.lorem[1], icon: 'cil-user' },
    {
      header: 'Disabled',
      panel: this.lorem[2],
      icon: 'cil-meh',
      disabled: true,
    },
    { header: 'Messages', panel: this.lorem[3], icon: 'cil-envelope-closed' },
  ];

  public get tabs() {
    // const tabs = this._tabs.map((item) => Object.assign(Object.create(null), item));
    // console.log('tabs:', tabs);
    // return tabs;
    return this._tabs;
  }

  public get tabs2() {
    // const tabs = this._tabs.map((item) => Object.assign(Object.create(null), item));
    // console.log('tabs:', tabs);
    // return tabs;
    return this._tabs.filter((tab) => !tab.disabled);
  }

  constructor() {
    this.setTab = 0;
  }

  ngOnInit() {
    // this.interval = setInterval(() => {
    //   const idx = this.setTab
    //   this.setTab = idx + 1 > 3 ? 0 : idx + 1;
    // } ,5000);
  }

  ngOnDestroy(): void {
    // clearInterval(this.interval);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes, this.setTab);
  }

  onTabChange(e) {
    console.log('onTabChange', e);
  }
}
