import { Component } from '@angular/core';
import { FieldType } from '@cts/form-core';

@Component({
  selector: 'cts-form-syncfusion-switch',
  template: ` 
  <ul>
  <li>
<label [for]="id">  {{ to.label }} </label>
<ejs-switch
[formlyAttributes]="field"
[formControl]="formControl"
[checked]="formControl.value">
</ejs-switch>
</li>
</ul>
  `,
})
export class FormlyFieldSwitch extends FieldType {
  defaultOptions = {
    templateOptions: {
      options: [],
      formCheck: 'custom', // 'custom' | 'stacked' | 'inline'
    },
  };

}
