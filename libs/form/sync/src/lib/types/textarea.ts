import { Component } from '@angular/core';
import { FieldType } from '@cts/form-core';

@Component({
  selector: 'cts-form-syncfusion-textarea',
  template: `
  <ejs-textbox
  [multiline]='true'
  [formlyAttributes]="field"
  [placeholder]="to.placeholder"
  [formControl]="formControl"></ejs-textbox>
  `,
})
export class FormlyFieldTextArea extends FieldType {}
