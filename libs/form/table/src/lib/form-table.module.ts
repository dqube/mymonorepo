import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { PageService, SortService, FilterService, GroupService, ToolbarService, ColumnChooserService } from '@syncfusion/ej2-angular-grids';
import { SynctableComponent } from './components/synctable/synctable.component';

@NgModule({
  imports: [CommonModule, BrowserModule, GridModule],
  declarations: [SynctableComponent],
  exports: [SynctableComponent],
  providers: [PageService,
    SortService,
    FilterService,
    GroupService,
    ToolbarService,
    ColumnChooserService
  ]
})
export class FormTableModule {}
