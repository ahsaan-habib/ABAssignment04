import {Component, OnInit } from '@angular/core';
import {UsersPerm} from "../shared/interfaces";
import {UsersService} from "../common/services/users.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  constructor(private userPermService: UsersService) {
    this.setUserPermission();
  }


  public userPerm!: UsersPerm;
  public numberOfDeletedDistrict = 0;


  private  setUserPermission(): void{
    this.userPermService.getUser().then(res => {
      if (res.serviceResult && res.serviceResult.success){
        this.userPerm = res.data;
        const user = res.data;
        // @ts-ignore
        console.log(user[0].user)
      }
      else {
        console.log('Error', res);
      }
    });
  }


  ngOnInit(): void {
  }

}
