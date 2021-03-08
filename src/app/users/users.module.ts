import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import {UsersService} from '../common/services';
import {UserPermission} from '../common/services';


@NgModule({
  declarations: [
    UsersComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  providers: [UsersService, UserPermission],
})

export class UsersModule{ }
