import { Component } from '@angular/core';
import { FieldWrapper } from '@cts/form-core';

@Component({
  selector: 'cts-formly-wrapper-syncfusion-form-field',
  template: `
  <div class="form-group" [class.e-error]="showError">
  <label *ngIf="to.label && to.hideLabel !== true" [attr.for]="id">
    {{ to.label }}
    <span *ngIf="to.required && to.hideRequiredMarker !== true" class="e-error">*</span>
  </label>
      <ng-container #fieldComponent></ng-container>  
     
            <formly-validation-message
            *ngIf="showError"
            class="e-error"
            [field]="field">
          </formly-validation-message>
    <small *ngIf="to.description" class="form-text text-muted">{{ to.description }}</small>
</div>
  `,
})
export class FormlyWrapperFormField extends FieldWrapper {
}