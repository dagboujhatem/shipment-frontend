import {
  AfterViewChecked,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { CollapseDirective } from '@coreui/angular';

@Component({
  selector: 'app-navbars',
  templateUrl: './navbars.component.html',
  styleUrls: ['./navbars.component.scss'],
})
export class NavbarsComponent implements OnInit, AfterViewChecked {
  private _isCollapsed: boolean = true;
  set isCollapsed(value) {
    this._isCollapsed = value;
  }
  get isCollapsed() {
    // if (this.collapseRef) {
    //   // temp fix for "overflow: hidden"
    //   if (getComputedStyle(this.collapseRef.nativeElement).getPropertyValue('display') === 'flex') {
    //    this.renderer.removeStyle(this.collapseRef.nativeElement, 'overflow');
    //   }
    // }
    return this._isCollapsed;
  }

  @ViewChild(CollapseDirective, { read: ElementRef, static: false })
  collapse!: CollapseDirective;

  collapseRef;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {}

  ngAfterViewChecked(): void {
    this.collapseRef = this.collapse;
  }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

  updateCollapse(event) {
    if (event === 'collapsed') {
      this.isCollapsed = true;
    }
  }
}
