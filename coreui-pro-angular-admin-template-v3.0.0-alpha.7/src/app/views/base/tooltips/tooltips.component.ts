import {
  AfterContentChecked,
  Component,
  OnInit,
  SecurityContext,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { NgxTippyService } from 'ngx-tippy-wrapper';

@Component({
  selector: 'app-tooltips',
  templateUrl: './tooltips.component.html',
  styleUrls: ['./tooltips.component.scss'],
})
export class TooltipsComponent implements OnInit {
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
    interactive: true,
    allowHTML: true,
    appendTo: 'parent',
    theme: 'c-tooltip',
    trigger: 'mouseenter focus touchstart',
  };

  tooltips = [];

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.tooltips = this.placementProps();
  }

  sanitize(value) {
    return this.sanitizer.sanitize(SecurityContext.HTML, value);
  }

  get simpleProps() {
    return { ...this.tippyPropsDefault, content: 'Tooltip text' };
  }

  placementProps() {
    const props = this.placements.map((placement) => {
      const content = this.sanitize(
        `Tooltip with placement: <strong>${placement}</strong>`
      );
      return { ...this.tippyPropsDefault, content, placement };
    });
    return props;
  }
}
