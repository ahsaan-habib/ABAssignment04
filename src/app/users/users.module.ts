import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import {DistrictService, HttpService, StudentService, TeacherService, UrlService} from "../common/services";
import {DialogService} from "../common/services/dialog.service";
import {UsersService} from "../common/services/users.service";


@NgModule({
  declarations: [
    UsersComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  providers: [UsersService],
})

export class UsersModule{ }
