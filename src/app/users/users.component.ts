import {Component, OnInit } from '@angular/core';
import {UsersService} from '../common/services';
import {UserPermission} from '../common/services';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  constructor(private userPermService: UsersService, private userPermission: UserPermission) {
    // this.setUserPermission();
  }


  ngOnInit(): void {
    // this.getUserPerm();
  }

}
