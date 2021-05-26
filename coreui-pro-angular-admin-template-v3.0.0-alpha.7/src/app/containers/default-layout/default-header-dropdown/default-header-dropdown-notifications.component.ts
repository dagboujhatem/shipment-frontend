import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-header-dropdown-notifications',
  templateUrl: './default-header-dropdown-notifications.component.html',
})
export class DefaultHeaderDropdownNotificationsComponent implements OnInit {
  public items = 5;

  constructor() {}

  ngOnInit(): void {}
}
