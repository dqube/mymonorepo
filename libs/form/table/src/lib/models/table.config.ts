import { CommandButtonOptions, CommandModel, SortSettingsModel, SearchSettingsModel, FilterSettingsModel, ColumnModel, PageSettingsModel, SortDirection } from '@syncfusion/ej2-angular-grids';
import { ItemModel } from '@syncfusion/ej2-navigations';
import { FormlyFieldConfig } from '@cts/form-core';

// export interface GridColumns {
//     key: string;
//     header: string;
//     width?: number;
//     format?: string;
//     visible?: boolean;
//     type: string;
//     textAlign?: string;
//     hederAlign?: string;    
//     allowSorting?: boolean;    
//     allowResizing?: boolean;   
//     showColumnMenu?: boolean;    
//     allowFiltering?: boolean;   
//     allowGrouping?: boolean;    
//     allowReordering?: boolean;
// }

export interface GridOptions {
    id:string;
    columns: GridColumns[];
    data: Object[];
    columnChooser: boolean;
    allowGrouping? : boolean;
    allowPaging? :boolean;
    allowFiltering?:boolean;
    allowResizing?: boolean;   
    allowSorting?:boolean;
    commands?: GridCommands[];
    toolbars?: GridToolbar[];
    sortOptions?: GridSortSetting;
    searchOption?:GridSearchSetting;
    filterOption?:GridFilterSetting;
    pagingOption?:GridPageSetting;
    filterFormModel?: FormlyFieldConfig[];
    filterModel?:any;
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
    allowSorting?: boolean;    
    allowResizing?: boolean;   
    showColumnMenu?: boolean;    
    allowFiltering?: boolean;   
    allowGrouping?: boolean;    
    allowReordering?: boolean;
  }
  export interface GridColumns extends ColumnModel{
    columnOrder?:number;
    sortDirection?:GridSortDirection;
    allowSearching?:boolean;
  }

export declare type GridCommands =CommandModel;

export declare type GridSortSetting = SortSettingsModel;
export declare type GridSortDirection=SortDirection;
export declare type GridPageSetting =PageSettingsModel;

export declare type GridSearchSetting =SearchSettingsModel;
export declare type GridFilterSetting =FilterSettingsModel;

export declare type GridToolbar = ItemModel;

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