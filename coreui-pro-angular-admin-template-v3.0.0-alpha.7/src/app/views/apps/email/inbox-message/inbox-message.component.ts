import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbox-message',
  templateUrl: './inbox-message.component.html',
  styleUrls: ['./inbox-message.component.scss'],
})
export class InboxMessageComponent implements OnInit {
  @Input() read: boolean;
  @Input() description =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';
  @Input() title = 'Lorem ipsum dolor sit amet';
  @Input() from = 'Lukasz Holeczek';
  @Input() date = 'Today, 3:47 PM';

  @HostBinding('class') hostClass = {
    'c-message': true,
    'c-message-read': this.read,
  };

  constructor() {}

  ngOnInit(): void {}
}
