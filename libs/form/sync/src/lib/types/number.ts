import { Component } from '@angular/core';
import { FieldType } from '@cts/form-core';

@Component({
  selector: 'cts-form-syncfusion-number',
  template: `   
    <ejs-numerictextbox
    [formlyAttributes]="field"
    [placeholder]="to.placeholder"
    [format]="to.displayFormat"
    [min]="to['min']" [max]="to['max']"
    [class.e-error]="showError"
    [formControl]="formControl"></ejs-numerictextbox>
  `,
})
export class FormlyFieldNumber extends FieldType {}
