import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DropDownListModule, MultiSelectModule, AutoCompleteModule } from '@syncfusion/ej2-angular-dropdowns';
import { TextBoxModule, NumericTextBoxModule  } from '@syncfusion/ej2-angular-inputs';
import { DatePickerModule, DateTimePickerModule, DateRangePickerModule } from '@syncfusion/ej2-angular-calendars';
import { CheckBoxModule, RadioButtonModule, SwitchModule  } from '@syncfusion/ej2-angular-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

import { FormlyModule } from '@cts/form-core';
import { FormlySelectModule } from '@cts/form-core/select';
import { SYNCFUSION_FORMLY_CONFIG, FIELD_TYPE_COMPONENTS } from './ui-syncfusion.config';

enableRipple(true);

@NgModule({
  declarations: FIELD_TYPE_COMPONENTS,
  imports: [
    CommonModule,
    CheckBoxModule,
    RadioButtonModule,
    SwitchModule ,
    DropDownListModule,
    MultiSelectModule,
    AutoCompleteModule,
    TextBoxModule,
    NumericTextBoxModule,
    DatePickerModule,
    DateTimePickerModule,
    DateRangePickerModule,
    ReactiveFormsModule,
    FormlySelectModule,
    FormlyModule.forChild(SYNCFUSION_FORMLY_CONFIG),
  ],
})
export class FormlySyncfusionModule { }
