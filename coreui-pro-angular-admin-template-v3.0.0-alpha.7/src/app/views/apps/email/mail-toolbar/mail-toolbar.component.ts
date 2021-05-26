import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-mail-toolbar',
  templateUrl: './mail-toolbar.component.html',
  styleUrls: ['./mail-toolbar.component.scss'],
})
export class MailToolbarComponent implements OnInit {
  @HostBinding('class') hostClass = 'toolbar mb-4';

  constructor() {}

  ngOnInit(): void {}
}
