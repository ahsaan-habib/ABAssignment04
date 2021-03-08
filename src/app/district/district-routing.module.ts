import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DistrictComponent } from './district.component';
import {DAboutComponent} from './d-about/d-about.component';
import {AboutComponent} from '../pages/about/about.component';


const routes: Routes = [
  { path: '', component: DistrictComponent },
  {path: 'a' , component: AboutComponent },
  // direct calling of a component from routing is permitted but multiple module can not declare same component simultaneously
  // solution: create shared component module and export it just like shared-component.module.ts
  {path: 'about' , component: DAboutComponent }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DistrictRoutingModule { }
