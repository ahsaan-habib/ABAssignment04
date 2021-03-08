import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DistrictRoutingModule } from './district-routing.module';
import { DistrictComponent } from './district.component';
import {SharedComponentModule} from "../shared-component.module";
import { DAboutComponent } from './d-about/d-about.component';
import {UsersModule} from "../users/users.module";
// import {AboutComponent} from "../pages/about/about.component";
// direct call of a component from routing is accessible but multiple module can't declare same component simultaneously

@NgModule({
  declarations: [
    DistrictComponent,
    DAboutComponent,
    ],
  imports: [
    CommonModule,
    DistrictRoutingModule,
    SharedComponentModule,
    UsersModule
  ]
})
export class DistrictModule { }
