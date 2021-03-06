import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DistrictInfo} from '../../interfaces';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() data!: DistrictInfo[];
  @Input() showAction!: boolean;
  @Input() deleteAction!: boolean;
  @Input() headerClass!: string;
  @Output() rowRemoved = new EventEmitter<number>();
  @Output() rowRestore = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  public tableMessage = 'This message is from table component accessable via @ViewChild';

  public deleteRow(index: number): void{
    // this.data.splice(index, 1);
    this.rowRemoved.emit(index);
  }
  public restoreRow(index: number): void{
    // this.data.splice(index, 1);
    this.rowRestore.emit(index);
  }

}
