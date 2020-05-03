import { Component, OnInit, Input } from '@angular/core';
import { GridColumns } from '../../models/table.config';
import { PageSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'cts-synctable',
  templateUrl: './synctable.component.html',
  styleUrls: ['./synctable.component.scss']
})
export class SynctableComponent implements OnInit {

  @Input() gridData:  any[];
  /** The column description of your data */
  @Input() columns: GridColumns[];

  @Input() pageSize = 5;
  /** Enable disable grouping default disabled */
  @Input() groupable = false;
  /** Enable disable pagination default enabled */
  @Input() pageable = true;
  public data: object[];

  public pageSettings: PageSettingsModel;
  
  constructor() { }

  ngOnInit(): void {
    this.pageSettings = { pageSize: this.pageSize };}

}
