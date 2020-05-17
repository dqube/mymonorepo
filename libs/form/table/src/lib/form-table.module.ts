import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import {
  PageService,
  SortService,
  FilterService,
  GroupService,
  ToolbarService,
  ColumnChooserService,
  ReorderService,
  PdfExportService,
  CommandColumnService,
  SearchService,
  ResizeService,
  GridModule,
  EditService,
  ExcelExportService,
  ColumnMenuService,
  ContextMenuService
} from '@syncfusion/ej2-angular-grids';
import { SidebarModule } from '@syncfusion/ej2-angular-navigations';
import { SynctableComponent } from './components/synctable/synctable.component';
import { FormlyModule } from '@cts/form-core';
import { FormlySyncfusionModule } from '@cts/form-sync'
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    GridModule,
    SidebarModule,
    ReactiveFormsModule,
    FormlyModule.forChild(),
    FormlySyncfusionModule,
  ],
  exports: [SynctableComponent],
  declarations: [SynctableComponent],
  providers: [
    PageService,
    SortService,
    FilterService,
    GroupService,
    EditService,
    ExcelExportService,
    ColumnChooserService,
    ColumnMenuService,
    SearchService,
    PdfExportService,
    ReorderService,
    CommandColumnService,
    ToolbarService,
    ResizeService,
    PageService,
    ContextMenuService
  ]
})
export class FormTableModule { }
