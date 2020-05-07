import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { GridColumns, GridOptions } from '../../models/table.config';
import { PageSettingsModel, GridComponent, FilterSettingsModel, CommandModel, EditSettingsModel, TextWrapSettingsModel, DataStateChangeEventArgs, GroupSettingsModel, RowSelectEventArgs } from '@syncfusion/ej2-angular-grids';
import { Subject } from "rxjs";
@Component({
  selector: 'cts-synctable',
  templateUrl: './synctable.component.html',
  styleUrls: ['./synctable.component.scss']
})
export class SynctableComponent implements OnInit {

  @Input() gridData: Subject<DataStateChangeEventArgs>;
  /** The column description of your data */
  @Input() columns: GridColumns[];

  @Input() options: GridOptions;

  @Input()
  public showUpdate: boolean;
  @Input()
  public showDelete: boolean;
  @Input()
  public showView: boolean;
  @Input()
  public showAdd = true;
  @Input()
  public showPrint: boolean;
  @Input()
  public showPdfExport: boolean;
  @Input()
  public showExcelExport: boolean;
  @Input()
  public showColumnChooser: boolean;

  @Input()
  public idKey: any;
  @Input()
  public pageSize = 50;

  @Input()
  public pageNumber = 1;

  @Input()
  public totalPages = 1;

  @Input()
  public deleteRoute = "";
  @Input()
  public editRoute: string;
  @Input()
  public addRoute = "";
  @Input()
  public allowGrouping: boolean;
  @Input()
  public wrapSettings: TextWrapSettingsModel;

  @Input()
  public updatePrivilage: string;
  @Input()
  public addPrivilage: string;
  @Input()
  public deletePrivilage: string;

  @Input()
  public customAttributes: { class: string };

  @Output()
  public dataQueried: EventEmitter<string> = new EventEmitter();
  @Output()
  public rowSelected: EventEmitter<any> = new EventEmitter();
  @Output()
  public deleteRecord: EventEmitter<any> = new EventEmitter();
  @Output()
  public editRecord: EventEmitter<any> = new EventEmitter();

  @Input()
  public groupByOptions: GroupSettingsModel = {};

  @Output()
  public dataStateChaged: EventEmitter<DataStateChangeEventArgs> = new EventEmitter();

  @ViewChild("grid", { static: false })
  public grid: GridComponent;

  public pageSizes: string[] = ["50", "100", "150", "200"];
  public initialPage: { pageSize: number; pageSizes: string[] };
  public filterSettings: FilterSettingsModel;
  public toolbar: object[] = [];
  public selectOptions: object;
  public commands: CommandModel[] = [];
  public editSettings: EditSettingsModel;

  constructor() { 
    this.initialPage = {
      pageSize: 50,
      pageSizes: this.pageSizes
    };
  }

  ngOnInit(): void {
    // this.customAttributes = { class: "custom-grid-header" };

    this.filterSettings = { type: "Menu" };
    this.selectOptions = { type: "Multiple", persistSelection: true };
  }
  rowIsSelected(event: RowSelectEventArgs): void {
    this.rowSelected.emit(event);
  }
  onDataStateChanged(state: DataStateChangeEventArgs) {
    this.dataStateChaged.emit(state);
  }
}
