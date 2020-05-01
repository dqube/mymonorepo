import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { authorization, authorizationFormModel } from './models/authorization';
import { FormlyFieldConfig } from '@cts/form-core';
import {LookupService} from '@cts/form/lookup'

@Component({
  selector: 'cts-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'web-app';
  constructor(private lookup: LookupService) {
    this.fields = lookup.bindLookup(authorizationFormModel);
}
  form = new FormGroup({});
  model: authorization = { name: 'Test Name', authType: '1' };
  fields: FormlyFieldConfig[];
  onSubmit() {
    console.log(this.model);
  }
}
