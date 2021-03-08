import { Injectable } from '@angular/core';
import {HttpService} from './http.service';
import {UsersPerm, UsersPermRes} from 'src/app/shared/interfaces';
import { environment } from 'src/environments/environment';
import {Observable} from "rxjs";
import {UsersService} from "./users.service";

@Injectable()
export class UserPermission{
  constructor(private userService: UsersService){

  }

  public setUserPermission(): Observable<any> {

    const userPerm = new Observable(observer=>{

        this.userService.getUser().then(res => {
          if (res.serviceResult && res.serviceResult.success) {
            const user = res.data;
            // @ts-ignore
            console.log(user[0].user)
            const userPermData = res.data;
            return observer.next(userPermData)
          }
            // else {
            //   console.log('Error', res);
            // }
          });
      })
    return userPerm;
    };
  }
  // private  setUserPermission(): void{
  //   this.userPermService.getUser().then(res => {
  //     if (res.serviceResult && res.serviceResult.success){
  //       this.userPerm = res.data;
  //       const user = res.data;
  //       // @ts-ignore
  //       console.log(user[0].user)
  //     }
  //     else {
  //       console.log('Error', res);
  //     }
  //   });
  // }

