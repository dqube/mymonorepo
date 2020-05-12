import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { authorization, authorizationFormModel } from './models/authorization';
import { FormlyFieldConfig } from '@cts/form-core';
import { LookupService } from '@cts/form-lookup'
import { GridColumns, GridOptions } from '@cts/form-table'
import { products, data, sampleProducts } from './models/product';

@Component({
  selector: 'cts-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'web-app';
  constructor(private lookup: LookupService) {
    this.fields = lookup.bindLookup(authorizationFormModel);
    this.columns = [
      { key: 'ProductID', width: 90, header: 'ProductID', type: 'number', visible: true, allowSorting: false },
      { key: 'ProductName', width: 120, header: 'ProductName', type: 'string', visible: true },
      { key: 'QuantityPerUnit', width: 120, header: 'QuantityPerUnit', type: 'string', visible: true },
      { key: 'UnitsInStock', width: 90, header: 'UnitsInStock', type: 'string' }
    ];
    this.data = data;
    this.gridOptions = {
      id: "persongrid",
      columns: this.columns,
      data: this.products,
      columnChooser: true,
      commands: [{
        title: "edit",
        buttonOption: {
          iconCss: "e-icons e-edit",
          cssClass: "e-flat",
        }
      },
      {
        title: "delete",
        buttonOption: {
          iconCss: "e-icons e-delete",
          cssClass: "e-flat",
        }
      },
      {
        title: "view",
        buttonOption: {
          iconCss: "e-icons e-edit",
          cssClass: "e-flat",
        }
      }
      ],
      toolbars: [
        { text: 'Collapse All', tooltipText: 'collection All', prefixIcon: 'e-collapse', id: 'collapseall' },
        { text: 'Add', tooltipText: 'Add', prefixIcon: "e-create", id: "create" },
        { text: 'Pdf Export', tooltipText: 'Pdf Export', prefixIcon: "e-pdfexport", id: "pdfExport" },
        { text: 'Excel Export', tooltipText: 'Excel Export', prefixIcon: "e-excelexport", id: "excelExport" },
        { text: 'Print', tooltipText: 'Print', prefixIcon: "e-print", id: "print" },
        { text: 'Search', tooltipText: 'Search', id: "search", align: 'Right' },
      ],
      sortOptions: {
        columns: [
          { field: 'ProductName', direction: 'Ascending' },
          { field: 'UnitsInStock', direction: 'Ascending' }
        ]
      },
      searchOption: {
        fields: [
          'ProductName', 'UnitsInStock'
        ],
        operator: 'contains', key: '', ignoreCase: true
      },
     
      // filterOption: {
      //   type: "Menu" ,
      //   columns: [
      //     { field: 'ProductName', matchCase: false, operator: 'startswith', predicate: 'and', value: '' },
      //     { field: 'UnitsInStock', matchCase: false, operator: 'startswith', predicate: 'and', value: '' }
      //   ]
      // }
    }
  }
  form = new FormGroup({});
  model: authorization = { name: 'Test Name', authType: '1', autocomplete: "1" };
  products: any[] = products;
  gridOptions: GridOptions;
  columns: GridColumns[];
  data: Object[];
  fields: FormlyFieldConfig[];

  onSubmit() {
    console.log(this.model);
  }
  onSelected(eve: any) {
    console.log(eve.data);
  }
  onDataStateChanged(eve: any) {
    console.log(eve.data);

  }
  onRecordDeleted(eve: any) {
    console.log(eve);

  }
  onCommandClicked(args: any) {

    console.log('-----------');

    console.log(args);

  }
  onToolbarClicked(args: any) {
    console.log('-----------');
    console.log(args);
  }
}
