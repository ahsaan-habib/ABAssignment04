import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {UsersService} from './users.service';

@Injectable()
export class UserPermission{
  constructor(private userService: UsersService){

  }

  public setUserPermission(): Observable<any> {
    let count = 0;
    const userPerm = new Observable(observer => {
        let testInterval: any;

        this.userService.getUser().then(res => {
          if (res.serviceResult && res.serviceResult.success) {
            const user = res.data;

            testInterval = setInterval(() => {
              // @ts-ignore
              console.log(user[0].user);
            }, 2000);

            const userPermData = res.data;
            observer.next(userPermData);
            console.log(userPermData, count);
          }
            // else {
            //   console.log('Error', res);
            // }
          });
        return {
          unsubscribe(): any {
            // only need for asynchronous function like(testInterval)
            // do nothing for synchronous object like(userPermData)
            clearInterval(testInterval);
            count++;
          }
        };
      });
    return userPerm;
    }
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

