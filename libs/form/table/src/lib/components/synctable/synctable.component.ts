import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { GridColumns, GridOptions } from '../../models/table.config';
import { PageSettingsModel, GridComponent, FilterSettingsModel, CommandModel, EditSettingsModel, TextWrapSettingsModel, DataStateChangeEventArgs, GroupSettingsModel, RowSelectEventArgs, IRow, Column, CommandClickEventArgs } from '@syncfusion/ej2-angular-grids';
import { Subject } from "rxjs";
import { closest } from "@syncfusion/ej2-base";
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

  @Output()
  public commandClicked: EventEmitter<any> = new EventEmitter();

  @Input()
  public groupByOptions: GroupSettingsModel = {};

  @Output()
  public dataStateChaged: EventEmitter<DataStateChangeEventArgs> = new EventEmitter();

  @ViewChild("grid", { static: false })
  public grid: GridComponent;

  public pageSizes: string[] = ["10", "20", "40", "80", "100"];
  public initialPage: { pageSize: number; pageSizes: string[] };
  public filterSettings: FilterSettingsModel;
  public toolbar: object[] = [];
  public selectOptions: object;
  public commands: CommandModel[] = [];
  public editSettings: EditSettingsModel;

  constructor() { 
    this.initialPage = {
      pageSize: 10,
      pageSizes: this.pageSizes
    };
  }

  ngOnInit(): void {
    // this.customAttributes = { class: "custom-grid-header" };

    this.filterSettings = { type: "Menu" };
    this.selectOptions = { type: "Multiple", persistSelection: true };
    this.editSettings = {
      allowDeleting: true,
      allowAdding: true
    };

    this.initilizeCommandColumn();
  }
  rowIsSelected(event: RowSelectEventArgs): void {
    this.rowSelected.emit(event);
  }
  onDataStateChanged(state: DataStateChangeEventArgs) {
    this.dataStateChaged.emit(state);
  }

  initilizeCommandColumn(): void {
      this.commands.push({
        title:"edit",
        buttonOption: {
          iconCss: "e-icons e-edit",
          cssClass: "e-flat",
          click: this.editAction.bind(this)
        }
      });

      this.commands.push({
        title:"delete",
        buttonOption: {
          iconCss: "e-icons e-delete",
          cssClass: "e-flat",
          click: this.deleteAction.bind(this)
        }
      });
  }

  deleteAction(event: Event) {
    // console.log(closest(event.target as Element, ".e-row").getAttribute("data-uid")); 
    // this.deleteRecord.emit("deletecommandclicked");
    // this.deleteRecord.emit("deletecommandclicked");
    // const rowObj: IRow<Column> = this.grid.getRowObjectFromUID(
    //   closest(event.target as Element, ".e-row").getAttribute("data-uid")
    // );
    // if (confirm("Are you sure to delete")) {
    //   this.deleteRecord.emit(rowObj.data);
    // } else {
    //   return null;
    // }
  }
  commandClick(args: CommandClickEventArgs): void {
    console.log(JSON.stringify(args.rowData));
    this.commandClicked.emit(args);
}
  private editAction(event: Event): void {
    // const rowObj: IRow<Column> = this.grid.getRowObjectFromUID(
    //   closest(event.target as Element, ".e-row").getAttribute("data-uid")
    // );
    // const key = this.idKey ? this.idKey : "Id";

    // if (this.editRoute) {
    //   this.router.navigate([`/${this.editRoute}/${rowObj.data[key]}/update`]);
    // } else {
    //   this.router.navigate([`${rowObj.data[key]}/update`], {
    //     relativeTo: this.activatedRoute
    //   });
    // }

    //  this.editRecord.emit(rowObj.data);
  }

}
