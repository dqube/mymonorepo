import { CommandButtonOptions, CommandModel } from '@syncfusion/ej2-angular-grids';
import { ItemModel } from '@syncfusion/ej2-navigations';

export interface GridColumns {
    key: string;
    header: string;
    width?: number;
    format?: string;
    visible?: boolean;
    type: string;
    textAlign?: string;
    hederAlign?: string;    
}

export interface GridOptions {
    id:string;
    columns: GridColumns[];
    data: Object[];
    columnChooser: boolean;
    allowGrouping? : boolean;
    commands?: GridCommands[];
    toolbars?: GridToolbar[];
}

export interface CustomGridColumns {
    header: string;
    key: string;
    width?: number;
    format?: string;
    visible?: boolean;
    type: string;
    textAlign?: string;
    hederAlign?: string;
  }
 
 export interface GridCommands extends CommandModel{
  name : string
}

export interface GridToolbar extends ItemModel{
  name:string
}

export declare type GridCommandButtonType = 
/** Default enum type */
'None' | 
/** Edit the current row */
'Edit' | 
/** Delete the current row */
'Delete' | 
/** Save the current edited row */
'Save' | 
/**  Cancel the edited state */
'Cancel';

  export class FilterEventModel {
    columnName?: string;
    propertyName?: string;
    operator?: string;
    value: string | number | boolean | Date;
    operation?: string;
    columns?: string;
  }
  export class GroupingEventModel {
    columnName: string;
    name: string;
    columns: string[];
  }

  export class QueryString {
    year?: string;
    selectedColumns = "";
    sortDirection = "Asc";
    sortBy = "";
    searchString = "";
    pageNumber = 0;
    pageSize = 10;
    filter: FilterEventModel[] = [];
  }
  export class SortingEventModel {
    columnName: string;
    direction: string;
    columns: string[];
  }