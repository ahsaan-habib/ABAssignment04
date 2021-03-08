import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableComponent} from './shared/components/table/table.component';
import {BdLocalPipe} from './shared/pipes/bd-local.pipe';
import {AboutComponent} from './pages/about/about.component';



@NgModule({
  declarations: [
    TableComponent,
    BdLocalPipe,
    AboutComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    TableComponent,
    BdLocalPipe,
    AboutComponent
  ],
})
export class SharedComponentModule { }
