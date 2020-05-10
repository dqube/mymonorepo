import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { GridColumns, GridOptions } from '../../models/table.config';
import {
  PageSettingsModel,
  GridComponent,
  FilterSettingsModel,
  CommandModel,
  EditSettingsModel,
  TextWrapSettingsModel,
  DataStateChangeEventArgs,
  GroupSettingsModel,
  RowSelectEventArgs,
  IRow,
  Column,
  CommandClickEventArgs,
  ToolbarItems
} from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
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
  public id: string;
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

  @Output()
  public toolbarClicked: EventEmitter<any> = new EventEmitter();

  @Input()
  public groupByOptions: GroupSettingsModel = {};

  @Output()
  public dataStateChaged: EventEmitter<DataStateChangeEventArgs> = new EventEmitter();

  @ViewChild('grid') public grid: GridComponent;


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
    this.id = this.options.id;
    this.filterSettings = { type: "Menu" };
    this.selectOptions = { type: "Multiple", persistSelection: true };
    this.editSettings = {
      allowDeleting: true,
      allowAdding: true
    };

    this.initilizeCommandColumn();
    //this.toolbar= ['PdfExport'];
    this.initializeToolBar();
  }
  rowIsSelected(event: RowSelectEventArgs): void {
    this.rowSelected.emit(event);
  }
  onDataStateChanged(state: DataStateChangeEventArgs) {
    this.dataStateChaged.emit(state);
  }

  initilizeCommandColumn(): void {
    const gridCommands = this.options.commands;
    if (gridCommands.length > 0) {
      gridCommands.forEach((command, index) => {
        this.commands.push({
          title: command.title,
          buttonOption: {
            iconCss: command.buttonOption.iconCss,
            cssClass: command.buttonOption.cssClass,
          }
        });
      });
    }
    // this.commands.push({
    //   title:"edit",
    //   buttonOption: {
    //     iconCss: "e-icons e-edit",
    //     cssClass: "e-flat",
    //     click: this.editAction.bind(this)
    //   }
    // });

    // this.commands.push({
    //   title:"delete",
    //   buttonOption: {
    //     iconCss: "e-icons e-delete",
    //     cssClass: "e-flat",
    //     click: this.deleteAction.bind(this)
    //   }
    // });
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
  initializeToolBar(): void {
    const gridToolbars = this.options.toolbars;

    if (gridToolbars.length > 0) {
      gridToolbars.forEach((toolbar, index) => {
        this.toolbar.push({
          text: toolbar.text,
          prefixIcon: toolbar.prefixIcon,
          id: toolbar.id,
          visible: toolbar.visible,
          align: toolbar.align,
          name: toolbar.name,
        });
      });
      // if (this.showAdd) {
      //   this.toolbar.push({
      //     text: "Add",
      //     prefixIcon: "e-create",
      //     id: "add"
      //   });
      // }
      // if (this.showPdfExport) {
      //   this.toolbar.push({
      //     text: "PdfExport",
      //     prefixIcon: "e-Pdf_Export",
      //     id: "pdfExport"
      //   });
      // }
      // if (this.showExcelExport) {
      //   this.toolbar.push({
      //     text: "ExcelExport",
      //     prefixIcon: "e-Excel_Export",
      //     id: "excelExport"
      //   });
      // }
      // if (this.showPrint) {
      //   this.toolbar.push({
      //     text: "Print",
      //     prefixIcon: "e-print",
      //     id: "print"
      //   });
      // }
    }


  }

  toolbarClick(args: ClickEventArgs): void {
    console.log(args)
    switch (args.item.id) {
      case "create":
        // if (this.addRoute.trim().length === 0) {
        //   this.router.navigate(["add"], { relativeTo: this.activatedRoute });
        // } else {
        //   this.router.navigate([this.addRoute]);
        // }
        this.toolbarClicked.emit(args.item);
        break;
      case "pdfExport":
        console.log('pdfexport----')
        console.log(args.item.id)
        this.grid.pdfExport();
        break;
      case "excelExport":
        console.log('excelExport----')
        console.log(args.item.id)
        this.grid.excelExport();
        break;
      case "print":
        console.log('print----')
        console.log(args.item.id)
        window.print();
        break;
    }
  }
}
