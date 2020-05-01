import { Component } from '@angular/core';
import { FieldType } from '@cts/form-core';

@Component({
  selector: 'cts-form-syncfusion-multicheckbox',
  template: `   
<ul class='list-unstyled'>
<ng-container *ngFor="let option of to.options | formlySelectOptions:field | async; let i = index;">
<li>
<ejs-checkbox cssClass="e-primary"
[id]="id + '_' + i"
[label]="[option.label]"
[formlyAttributes]="field"
[checked]="formControl.value && (this.to.type === 'array' ? formControl.value.includes(option.value) : formControl.value[option.value])"
(change)="onChange(option.value, $event.checked)">
</ejs-checkbox>
</li>
</ng-container>
</ul>
  `,
})
export class FormlyFieldMultiCheckbox extends FieldType {
  defaultOptions = {
    templateOptions: {
      options: [],
      formCheck: 'custom', // 'custom' | 'stacked' | 'inline'
    },
  };

  onChange(value: any, checked: boolean) {
    if (this.to.type === 'array') {
      this.formControl.patchValue(checked
        ? [...(this.formControl.value || []), value]
        : [...(this.formControl.value || [])].filter(o => o !== value),
      );
    } else {
      this.formControl.patchValue({ ...this.formControl.value, [value]: checked });
    }
    this.formControl.markAsTouched();
  }
}
