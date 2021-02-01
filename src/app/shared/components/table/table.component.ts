import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DistrictInfo} from '../../interfaces';


// @ts-ignore
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() data!: DistrictInfo[];
  @Output() rowRemoved = new EventEmitter<number>();
  @Output() deletedList = new EventEmitter<any>() ;


  constructor() { }

  ngOnInit(): void {
  }
  public deleteRow(index: number): void{
   this.deletedList.emit(this.data[index]);

    this.data.splice(index, 1);
    this.rowRemoved.emit(index);
  }

}
