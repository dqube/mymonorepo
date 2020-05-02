import { FormlyFieldConfig, ColumnLayout, ControlType } from '@cts/form-core'
export interface authorization {
    name: string;
    authType: string;
    autocomplete:string;


}

export let authorizationFormModel: FormlyFieldConfig[] = [
    {
        fieldGroupClassName: 'row',
        fieldGroup: [
            {
                className: ColumnLayout.TwoColumn,
                type: ControlType.TextBox,
                key: 'firstName',
                templateOptions: {
                    label: 'First Name',
                    required: true,
                },
                validation: { messages: { required: 'You need to provide a name.' } }
            },
            {
                className: ColumnLayout.TwoColumn,
                type: ControlType.TextBox,
                key: 'lastName',
                templateOptions: {
                    label: 'Last Name',
                },
                expressionProperties: {
                    'templateOptions.disabled': '!model.firstName',
                },
            },
        ],
    },
    {
        className: 'section-label',
        template: '<hr /><div><strong>Address:</strong></div>',
    },
    {
        fieldGroupClassName: 'row',
        fieldGroup: [
            {
                className: ColumnLayout.TwoColumn,
                type: ControlType.TextBox,
                key: 'street',
                templateOptions: {
                    label: 'Street',
                },
            },
            {
                className: ColumnLayout.FourColumn,
                type: ControlType.Select,
                key: 'cityName',
                templateOptions: {
                    label: 'City',
                    lookup: { id: 1, desc: 'sample', categoryId: 1 },
                    options: [
                        { desc: 'Snickers', id: 'snickers' },
                        { desc: 'Baby Ruth', id: 'baby_ruth' },
                        { desc: 'Milky Way', id: 'milky_way' },
                    ],
                    valueProp: 'id',
                    labelProp: 'desc',
                },
            },
            {
                className: ColumnLayout.FourColumn,
                type: ControlType.NumericTextBox,
                key: 'zip',
                templateOptions: {
                    label: 'Zip',
                    max: 99999,
                    min: 0
                },
            },
        ],
    },

    { template: '<hr />' },
    {
        fieldGroupClassName: 'row',
        fieldGroup: [
            {
                className: ColumnLayout.TwoColumn,
                type: ControlType.TextArea,
                key: 'TextArea',
                templateOptions: {
                    label: 'Other Input',
                },
            },
            {
                className: ColumnLayout.FourColumn,
                type: ControlType.Switch,
                key: 'otherinput1',
                templateOptions: {
                    label: 'Switch',
                    required: true,
                },
                validation: { messages: { required: 'You need to provide a name.' } }
            },
            {
                className: ColumnLayout.FourColumn,
                type: ControlType.Autocomplete,
                key: 'autocomplete',
                templateOptions: {
                    label: 'Autocomplete',
                    lookup: { id: 1, desc: 'sample', categoryId: 1 },
                    options: [
                        {  id: '1' ,desc: 'Snickerss',categoryId: 1, value: '1',}
                    ],
                    valueProp: 'desc',
                    labelProp: 'desc',
                },
            },
        ],
    },

    { template: '<hr />' },
    

    {
        type: ControlType.CheckBox,
        key: 'otherToo',
        templateOptions: {
            label: 'Other Checkbox',
        },
    },
    {
        type: ControlType.DatePicker,
        key: 'otherToo',
        templateOptions: {
            label: 'DatePicker',
        },
    },
    {
        type: ControlType.DateTimePicker,
        key: 'datetime',
        templateOptions: {
            label: 'DateTimePicker',
        },
    },
    {
        type: ControlType.DateRangePicker,
        key: 'daterange',
        templateOptions: {
            label: 'DateRangePicker',
        },
    },
    {
        type: ControlType.MultiCheckBox,
        key: 'multicheckbox',
        templateOptions: {
            label: 'Multicheckbox',
            lookup: { id: 1, desc: 'sample', categoryId: 1 },
            options: [
                        {  id: '1' ,desc: 'Snickerss',categoryId: 1, value: '1',}
                    ],
            valueProp: 'id',
            labelProp: 'desc',
        },
    },
    {
        type: ControlType.Radio,
        key: 'radio',
        templateOptions: {
            label: 'Radio',
            lookup: { id: 1, desc: 'sample', categoryId: 1 },
            options: [
                        {  id: '1' ,desc: 'Snickerss',categoryId: 1, value: '1',}
                    ],
            valueProp: 'id',
            labelProp: 'desc',
        },
    },
    {
        type: ControlType.MultiSelect,
        key: 'multiselect',
        templateOptions: {
            label: 'Multiselect',
            lookup: { id: 1, desc: 'sample', categoryId: 1 },
            options: [
                        {  id: '1' ,desc: 'Snickerss',categoryId: 1, value: '1',}
                    ],
            valueProp: 'id',
            labelProp: 'desc',
        },
    },
];