import {
  AfterContentChecked,
  Component,
  OnInit,
  SecurityContext,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { NgxTippyService } from 'ngx-tippy-wrapper';

@Component({
  selector: 'app-popovers',
  templateUrl: './popovers.component.html',
  styleUrls: ['./popovers.component.scss'],
})
export class PopoversComponent implements OnInit, AfterContentChecked {
  placements = [
    'top-start',
    'top',
    'top-end',
    'right-start',
    'right',
    'right-end',
    'left-start',
    'left',
    'left-end',
    'bottom-start',
    'bottom',
    'bottom-end',
    'auto-start',
    'auto',
    'auto-end',
  ];

  tippyPropsDefault = {
    allowHTML: true,
    appendTo: 'parent',
    theme: 'cpopover',
    trigger: 'click',
  };

  content: string = 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.';
  simple =
    '<h3 class="popover-header">Popover header</h3> <div class="popover-body">Popover text</div>';

  popovers = [];

  constructor(
    private sanitizer: DomSanitizer,
    private tippyService: NgxTippyService
  ) {}

  ngOnInit() {
    this.popovers = this.placementProps();
  }

  ngAfterContentChecked() {
    // this.tippyService.showAll();
  }

  sanitize(value) {
    return this.sanitizer.sanitize(SecurityContext.HTML, value);
  }

  get simpleProps() {
    const content = this.sanitize(
      '<h3 class="popover-header">Popover header</h3> <div class="popover-body">Popover text</div>'
    );
    return { ...this.tippyPropsDefault, content, trigger: 'mouseenter focus' };
  }

  placementProps() {
    const props = this.placements.map((placement) => {
      const content = this.sanitize(
        `<h3 class="popover-header">Popover ${placement}</h3> <div class="popover-body">${this.content}</div>`
      );
      return { ...this.tippyPropsDefault, content, placement };
    });
    return props;
  }
}
