import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormlyModule } from '@cts/form-core';
import { FormlySyncfusionModule } from '@cts/form-sync'
import { ReactiveFormsModule } from '@angular/forms';
import { FormTableModule } from '@cts/form-table';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlySyncfusionModule,
    FormTableModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
