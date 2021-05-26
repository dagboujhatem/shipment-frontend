import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [ToastrService],
})
export class ToasterComponent implements OnInit {
  @ViewChild(ToastContainerDirective, { static: true }) toastContainer!: ToastContainerDirective;

  constructor(private toastr: ToastrService) {}

  ngOnInit() {
    this.toastr.overlayContainer = this.toastContainer;
  }

  showSuccess() {
    this.toastr.success('Hello world!', 'Success!');
  }

  showError() {
    this.toastr.error('Hello world!', 'Error!');
  }

  showWarning() {
    this.toastr.warning('Hello world!', 'Warning!');
  }

  showInfo() {
    this.toastr.info('Hello world!', 'Info');
  }
}
