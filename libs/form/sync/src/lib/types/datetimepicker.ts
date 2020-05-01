import { Component } from '@angular/core';
import { FieldType } from '@cts/form-core';

@Component({
  selector: 'cts-form-syncfusion-datetimepicker',
  template: `  
  <ejs-datetimepicker
  [min]="to.min"
  [max]="to.max"
  [formlyAttributes]="field"
  [formControl]="formControl">
   </ejs-datetimepicker>     
  `,
})
export class FormlyFieldDateTime extends FieldType {}