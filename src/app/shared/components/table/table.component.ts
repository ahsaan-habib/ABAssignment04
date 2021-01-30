import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DistrictInfo} from '../../interfaces';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() data!: DistrictInfo[];
  @Output() rowRemoved = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }
  public deleteRow(index: number): void{
    this.data.splice(index, 1);
    this.rowRemoved.emit(index);
  }

}
