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
      columns: this.columns,
      data: this.products,
      columnChooser: true
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
}
