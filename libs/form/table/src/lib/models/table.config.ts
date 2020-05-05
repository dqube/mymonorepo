
export interface GridColumns {
    field: string;
    headerText?: string;
    textAlign?: string;
    width?: number;
    visible?: boolean;
}

export interface GridOptions {
    columns: GridColumns[];
    data: Object[];
    columnChooser: boolean;
    allowGrouping? : boolean;
}