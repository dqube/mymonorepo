import { Component } from '@angular/core';
import { FieldType } from '@cts/form-core';

@Component({
  selector: 'cts-form-syncfusion-radio',
  template: `   
<ul class='list-unstyled'>
<ng-container *ngFor="let option of to.options | formlySelectOptions:field | async; let i = index;">
<li>
<ejs-radiobutton
[id]="id + '_' + i"
[label]="[option.label]"
[checked]="formControl.value && (this.to.type === 'array' ? formControl.value.includes(option.value) : formControl.value[option.value])"
[value]="[option.value]" name="[option.value]"
(change)="onChange(option.value, true)">
[formlyAttributes]="field">
</ejs-radiobutton>
</li>
</ng-container>
</ul>
  `,
})
export class FormlyFieldRadio extends FieldType {
  onChange(value: any, checked: boolean) {
    console.log("value:" + value);
    console.log("checked:" + checked);
    if (this.to.type === 'array') {
      console.log("array:");
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
