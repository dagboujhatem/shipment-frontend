import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.scss'],
})
export class SwitchesComponent implements OnInit {
  state = [];
  radio = '1';

  constructor() {
    this.state[0] = false;
    this.state[1] = true;
  }

  ngOnInit() {
    // console.log(this.state);
  }

  toggleChange(event) {
    this.state[1] = event.checked;
    // console.log('toggle event', this.state[1], event);
  }

  radioChange(event) {
    this.radio = event.value;
    // console.log('radio event', this.radio, event.value, event);
  }
}
