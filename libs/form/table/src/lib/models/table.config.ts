
export interface GridColumns {
    field:string;
    headerText:string;
    textAlign:string;
    width:number;
}

export interface GridOptions {
    columns: GridColumns[];
    data:Object[];
}