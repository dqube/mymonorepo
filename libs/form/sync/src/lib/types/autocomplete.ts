import { Component } from '@angular/core';
import { FieldType } from '@cts/form-core';

@Component({
  selector: 'cts-form-syncfusion-autocomplete',
  template: `   
    <ejs-autocomplete 
    [dataSource]="to.options | formlySelectOptions:field | async"
    [fields]="fields"
    [formlyAttributes]="field"
    [placeholder]="to.placeholder"
    [formControl]="formControl">
    </ejs-autocomplete>
  `,
})
export class FormlyFieldAutoComplete extends FieldType {
  public fields: Object = { text: 'label', value: 'value' };
  defaultOptions = {
    templateOptions: { options: [] },
  };
}
