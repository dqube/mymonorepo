import { Component } from '@angular/core';
import { FieldType } from '@cts/form-core';

@Component({
  selector: 'cts-form-syncfusion-select',
  template: `   
    <ejs-dropdownlist 
    [dataSource]="to.options | formlySelectOptions:field | async"
    [fields]="fields"
    [formlyAttributes]="field"
    [placeholder]="to.placeholder"
    [formControl]="formControl">
    </ejs-dropdownlist>
  `,
})
export class FormlyFieldSelect extends FieldType {
  public fields: Object = { text: 'label', value: 'value' };
  defaultOptions = {
    templateOptions: { options: [] },
  };
}
