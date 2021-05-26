import { Component, ViewEncapsulation } from '@angular/core';
import { IOption } from 'ng-select';

@Component({
  templateUrl: 'advanced-forms.component.html',
  styleUrls: ['./advanced-forms.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AdvancedFormsComponent {
  // Angular 2 Input Mask

  public dateModel = '';
  public dateMask = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];

  public phoneModel = '';
  public phoneMask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  public taxModel = '';
  public taxMask = [/\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];

  public ssnModel = '';
  public ssnMask = [/\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  public eyeScriptModel = '';
  public eyeScriptMask = ['~', /\d/, '.', /\d/, /\d/, ' ', '~', /\d/, '.', /\d/, /\d/, ' ', /\d/, /\d/, /\d/];

  public ccnModel = '';
  public ccnMask = [/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/];


  // Datepicker

  minDate = new Date(2017, 5, 10);
  maxDate = new Date(2022, 9, 15);

  bsValue: Date = new Date();
  bsRangeValue: any = [new Date(2020, 7, 4), new Date(2020, 7, 20)];

  // Timepicker

  public hstep: number = 1;
  public mstep: number = 15;
  public ismeridian: boolean = true;
  public isEnabled: boolean = true;

  public mytime: Date = new Date();
  public options: any = {
    hstep: [1, 2, 3],
    mstep: [1, 5, 10, 15, 25, 30],
  };

  // ng2-select
  public countries: Array<IOption> = [
    { label: 'Belgium', value: 'BE' },
    { label: 'Danmark', value: 'DK' },
    { label: 'France', value: 'FR', disabled: true },
    { label: 'Luxembourg', value: 'LU' },
    { label: 'Netherlands', value: 'NL' },
  ];

  public selectedCountries: Array<string> = ['BE', 'NL'];

  public toggleMode(): void {
    this.ismeridian = !this.ismeridian;
  }

  public update(): void {
    const d = new Date();
    d.setHours(14);
    d.setMinutes(0);
    this.mytime = d;
  }

  public changed(): void {
    console.log('Time changed to: ' + this.mytime);
  }

  public clear(): void {
    this.mytime = void 0;
  }
}
