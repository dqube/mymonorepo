import { Component } from '@angular/core';
import { FieldType } from '@cts/form-core';

@Component({
  selector: 'cts-form-syncfusion-daterangepicker',
  template: `  
  <ejs-daterangepicker
  [min]="to.min"
  [max]="to.max"
  [formlyAttributes]="field"
  [formControl]="formControl">
   </ejs-daterangepicker>     
  `,
})
export class FormlyFieldDateRange extends FieldType {}