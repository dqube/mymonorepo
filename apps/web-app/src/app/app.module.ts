import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormlyModule } from '@cts/form-core';
import { FormlySyncfusionModule } from '@cts/form-sync'
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlySyncfusionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
