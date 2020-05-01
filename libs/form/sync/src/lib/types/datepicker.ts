import { Component } from '@angular/core';
import { FieldType } from '@cts/form-core';

@Component({
  selector: 'cts-form-syncfusion-datepicker',
  template: `  
  <ejs-datepicker
  [min]="to.min"
  [max]="to.max"
  [formlyAttributes]="field"
  [formControl]="formControl">
   </ejs-datepicker>     
  `,
})
export class FormlyFieldDate extends FieldType {}