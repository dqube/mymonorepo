import { Component } from '@angular/core';
import { FieldType } from '@cts/form-core';

@Component({
  selector: 'cts-form-syncfusion-checkbox',
  template: `   
<ul class="list-unstyled">
<li>
<ejs-checkbox cssClass="e-primary"
[label]="to.label"
[formlyAttributes]="field"
[formControl]="formControl"
[checked]="formControl.value"
(change)="onChange(formControl.value, $event.checked)">
</ejs-checkbox>
</li></ul>
  `,
})
export class FormlyFieldCheckbox extends FieldType {
  defaultOptions = {
    templateOptions: {
      options: [],
      formCheck: 'custom', // 'custom' | 'stacked' | 'inline'
    },
  };

  onChange(value: any, checked: boolean) {
   
    this.formControl.patchValue({ ...this.formControl.value, [value]: checked });
    
    this.formControl.markAsTouched();
  }
}
