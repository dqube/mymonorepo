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
    this.columns =[
      { field:'ProductID', width:90,headerText:'ProductID', textAlign:'Right'},
      { field:'ProductName', width:120,headerText:'ProductName', textAlign:'Right'},
      { field:'QuantityPerUnit', width:120,headerText:'QuantityPerUnit', textAlign:'Right'},
      { field:'UnitsInStock', width:90,headerText:'UnitsInStock', textAlign:'Right'}
    ];
    this.data = data;
    this.gridOptions = {
      columns: this.columns,
      data :this.products
    }
  }
  form = new FormGroup({});
  model: authorization = { name: 'Test Name', authType: '1', autocomplete: "1" };
  products: any[] = sampleProducts;
  gridOptions: GridOptions;
  columns: GridColumns[];
  data: Object[];
  fields: FormlyFieldConfig[];

  onSubmit() {
    console.log(this.model);
  }

}
