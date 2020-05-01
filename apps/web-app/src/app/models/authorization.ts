import { FormlyFieldConfig, ColumnLayout, ControlType } from '@cts/form-core'
export interface authorization {
    name: string;
    authType: string;

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
                        { label: 'Snickers', value: 'snickers' },
                        { label: 'Baby Ruth', value: 'baby_ruth' },
                        { label: 'Milky Way', value: 'milky_way' },
                    ],
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
                    lookup: { id: 2, desc: 'sample', categoryId: 1 },
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
        type: ControlType.MultiSelect,
        key: 'multiselect',
        templateOptions: {
            label: 'Multiselect',
            options: [
                { label: 'Snickers', value: 'snickers' },
                { label: 'Baby Ruth', value: 'baby_ruth' },
                { label: 'Milky Way', value: 'milky_way' },
            ],
        },
    },
];