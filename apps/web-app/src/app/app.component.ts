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
      { key: 'ProductID', width: 90, header: 'ProductID', type: 'number', visible: true },
      { key: 'ProductName', width: 120, header: 'ProductName', type: 'string', visible: true },
      { key: 'QuantityPerUnit', width: 120, header: 'QuantityPerUnit', type: 'string', visible: true },
      { key: 'UnitsInStock', width: 90, header: 'UnitsInStock', type: 'string' }
    ];
    this.data = data;
    this.gridOptions = {
      id:"persongrid",
      columns: this.columns,
      data: this.products,
      columnChooser: true,
      commands: [{
          title:"edit",
          name:'edit',
          buttonOption: {           
            iconCss: "e-icons e-edit",
            cssClass: "e-flat",
          }
        },
        {
          name:"delete",
            title:"delete",
            buttonOption: {
              iconCss: "e-icons e-delete",
              cssClass: "e-flat",
            }
          },
          {
            name:"view",
            title:"view",
            buttonOption: {
              iconCss: "e-icons e-edit",
              cssClass: "e-flat",
            }
          }
      ],
      toolbars: [
        { name: 'Collapse All', text: 'Collapse All', tooltipText: 'collection All', prefixIcon: 'e-collapse', id: 'collapseall', align: 'Right' },
        { name: 'Add', text: 'Add', tooltipText: 'Add', prefixIcon: "e-create", id: "create" },
        { name: 'PdfExport', text: 'Pdf Export', tooltipText: 'Pdf Export', prefixIcon: "e-pdfexport", id: "pdfExport" },
        { name: 'ExcelExport', text: 'Excel Export', tooltipText: 'Excel Export', prefixIcon: "e-excelexport", id: "excelExport" },
        { name: 'Print', text: 'Print', tooltipText: 'Print', prefixIcon: "e-print", id: "print" },
      ]
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
