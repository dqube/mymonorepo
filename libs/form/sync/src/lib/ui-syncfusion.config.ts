import { ConfigOption } from '@cts/form-core';
import {
  FormlyFieldInput,
  FormlyFieldTextArea,
  FormlyFieldCheckbox,
  FormlyFieldRadio,
  FormlyFieldSelect,
  FormlyFieldNumber,
  FormlyFieldSwitch,
  FormlyFieldMultiCheckbox,
  FormlyFieldAutoComplete,
  FormlyFieldMultiSelect,
  FormlyFieldDate,
  FormlyFieldDateTime,
  FormlyFieldDateRange,
} from './types/types';
import { FormlyWrapperFormField } from './wrappers/wrappers';

export const FIELD_TYPE_COMPONENTS = [
  // types
  FormlyFieldInput,
  FormlyFieldNumber,
  FormlyFieldTextArea,
  FormlyFieldCheckbox,
  FormlyFieldRadio,
  FormlyFieldSelect,
  FormlyFieldSwitch,
  FormlyFieldAutoComplete,
  FormlyFieldMultiSelect,
  FormlyFieldMultiCheckbox,
  FormlyFieldDate,
  FormlyFieldDateTime,
  FormlyFieldDateRange,

  // wrappers
  FormlyWrapperFormField,
];

export const SYNCFUSION_FORMLY_CONFIG: ConfigOption = {
  types: [
    {
      name: 'input',
      component: FormlyFieldInput,
      wrappers: ['form-field'],
    },
    {
      name: 'number',
      component: FormlyFieldNumber,
      wrappers: ['form-field'],
    },
    {
      name: 'textarea',
      component: FormlyFieldTextArea,
      wrappers: ['form-field'],
    },
    {
      name: 'checkbox',
      component: FormlyFieldCheckbox,
      wrappers: ['form-field'],
    },
    {
      name: 'radio',
      component: FormlyFieldRadio,
      wrappers: ['form-field'],
    },
    {
      name: 'select',
      component: FormlyFieldSelect,
      wrappers: ['form-field'],
    },
    {
      name: 'autocomplete',
      component: FormlyFieldAutoComplete,
      wrappers: ['form-field'],
    },
    {
      name: 'multiselect',
      component: FormlyFieldMultiSelect,
      wrappers: ['form-field'],
    },
    {
      name: 'multicheckbox',
      component: FormlyFieldMultiCheckbox,
      wrappers: ['form-field'],
    },
    {
      name: 'switch',
      component: FormlyFieldSwitch,
      wrappers: ['form-field'],
    },
    {
      name: 'date',
      component: FormlyFieldDate,
      wrappers: ['form-field'],
    },
    {
      name: 'datetime',
      component: FormlyFieldDateTime,
      wrappers: ['form-field'],
    },
    {
      name: 'daterange',
      component: FormlyFieldDateRange,
      wrappers: ['form-field'],
    },
  ],
  wrappers: [
    { name: 'form-field', component: FormlyWrapperFormField },
  ],
};
