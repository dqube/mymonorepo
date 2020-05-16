import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { GridColumns, GridOptions, GridSortSetting, GridSearchSetting, GridFilterSetting, QueryString, FilterEventModel, GridPageSetting } from '../../models/table.config';
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
  ToolbarItems,
  ActionEventArgs,
  SortDescriptorModel
} from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { Subject } from "rxjs";
import { closest } from "@syncfusion/ej2-base";
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';
@Component({
  selector: 'cts-synctable',
  templateUrl: './synctable.component.html',
  styleUrls: ['./synctable.component.scss']
})
export class SynctableComponent implements OnInit {

  @Input() gridData: Subject<DataStateChangeEventArgs>;
  /** The column description of your data */

  @Input() options: GridOptions;

  @Input()
  public id: string;
  @Input()
  public idKey: any;



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
  public commandClicked: EventEmitter<any> = new EventEmitter();

  @Output()
  public toolbarClicked: EventEmitter<any> = new EventEmitter();

  @Output()
  public dataStateChaged: EventEmitter<DataStateChangeEventArgs> = new EventEmitter();

  @Input()
  public groupByOptions: GroupSettingsModel = {};



  @ViewChild('grid') public grid: GridComponent;

  public columns: GridColumns[];
  public pageSizes: string[] = ["10", "20", "40", "80", "100"];
  public initialPage: { pageSize: number; pageSizes: string[] };
  public allowGrouping?: boolean;
  public allowPaging?: boolean;
  public allowFiltering?: boolean;
  public allowResizing?: boolean;
  public allowSorting?: boolean;
  public filterSettings: GridFilterSetting;
  public toolbar: object[] = [];
  public selectOptions: object;
  public commands: CommandModel[] = [];
  public editSettings: EditSettingsModel;
  public sortSettings: GridSortSetting;
  public searchSettings: GridSearchSetting;
  public pageSettings: GridPageSetting;
  private query: QueryString;
  @ViewChild('sidebar') sidebar: SidebarComponent;
  public type: string = 'Over';
  public target: string = '.content';
  public onCreated(args: any) {
    this.sidebar.element.style.visibility = '';
  }
  constructor() {

    this.query = new QueryString();
  }

  ngOnInit(): void {
    // this.customAttributes = { class: "custom-grid-header" };
    this.id = this.options.id;
    this.columns = this.options.columns;
    this.allowGrouping = this.options.allowGrouping;
    this.allowPaging = this.options.allowPaging;
    this.pageSettings = this.options.pagingOption;
    this.allowFiltering = this.options.allowFiltering;
    this.allowResizing = this.options.allowResizing;
    this.allowSorting = this.options.allowSorting;
    this.selectOptions = { type: "Multiple", persistSelection: true };
    this.editSettings = {
      allowDeleting: true,
      allowAdding: true
    };

    this.initilizeCommandColumn();
    //this.toolbar= ['PdfExport'];
    this.initializeToolBar();
    this.initializeSortSettings();
    this.initializeSearchSettings();
    this.initializeFilterSettings();
  }
  rowIsSelected(event: RowSelectEventArgs): void {
    this.rowSelected.emit(event);
  }
  onDataStateChanged(state: DataStateChangeEventArgs) {
    this.dataStateChaged.emit(state);
  }
  closeClick() {
    this.sidebar.hide();
    
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
  initializeSortSettings(): void {
    const gridcolumns = this.options.columns.filter(elem => elem.allowSorting === true);
    if (gridcolumns != null) {
      const sortColumns: SortDescriptorModel[] = [];
      gridcolumns.forEach((column, index) => {
        sortColumns.push({
          field: column.field,
          direction: column.sortDirection
        });
      });
      const gridSortSetting: GridSortSetting = {
        columns: sortColumns
      }
    } else {
      const gridSortSetting = this.options.sortOptions;
      this.sortSettings = gridSortSetting;
    }

  }
  initializeSearchSettings(): void {
    const gridcolumns = this.options.columns.filter(elem => elem.allowSearching === true);
    if (gridcolumns != null) {
      const searchColumns: string[] = [];
      gridcolumns.forEach((column, index) => {
        searchColumns.push(column.field);
      });
      const gridsearchSettings: GridSearchSetting = {
        fields: searchColumns,
        operator: 'contains', key: '', ignoreCase: true
      }
      this.searchSettings = gridsearchSettings;
    } else {
      const gridsearchSettings = this.options.searchOption;
      this.searchSettings = gridsearchSettings;
    }
  }
  initializeFilterSettings(): void {
    if (this.options.filterOption != null) {
      const gridfilterSettings = this.options.filterOption;
      this.filterSettings = gridfilterSettings;
    } else {
      this.filterSettings = { type: "Menu" };

    }
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
      case "filter":
        console.log('filter----')
        console.log(args.item.id)
        this.sidebar.show();
        break;
    }
  }
  private prepareQuery(): string {
    let searchString = `selectedColumns=${this.query.selectedColumns.toString()}&`;

    if (this.query.searchString) {
      searchString += `searchString=${this.query.searchString}&`;
    }

    if (this.query.sortBy) {
      searchString += `sortBy=${this.query.sortBy}&sortDirection=${this.query.sortDirection}&`;
    }

    searchString += `pageSize=${this.query.pageSize}&pageNumber=${this.query.pageNumber}`;

    return searchString;
  }
  actionEndHandler(args: ActionEventArgs) {
    console.log(args);
    console.log(args.requestType);
    switch (args.requestType) {
      case "sorting":
        this.query.sortDirection = args["direction"];
        this.query.sortBy = args["columnName"];

        break;
      case "filtering":
        const filteringModel = new FilterEventModel();
        filteringModel.columnName = args["currentFilterObject"]["field"];
        filteringModel.operator = args["currentFilterObject"]["operator"];
        filteringModel.value = args["currentFilterObject"]["value"];
        console.log(this.query);
        console.log(filteringModel);
        break;
      case "searching":
        console.log(this.query);
        console.log(args.searchString);
        this.query.searchString = args.searchString;

        break;
      case "paging":
        this.query.searchString = args["searchString"];

        break;
    }

    if (args.requestType !== "refresh") {
      this.dataQueried.emit(this.prepareQuery());
    }

    if (
      this.query.pageSize !== this.grid.pageSettings.pageSize ||
      this.query.pageNumber !== this.grid.pageSettings.currentPage
    ) {
      this.query.pageSize = this.grid.pageSettings.pageSize;
      this.query.pageNumber = this.grid.pageSettings.currentPage;

      this.dataQueried.emit(this.prepareQuery());
    }
  }
}
