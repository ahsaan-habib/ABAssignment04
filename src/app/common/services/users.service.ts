import { Injectable } from '@angular/core';
import {HttpService} from './http.service';
import {UsersPermRes} from 'src/app/shared/interfaces';
import { environment } from 'src/environments/environment';

@Injectable()
export class UsersService{
  constructor(private httpService: HttpService){

  }

  public getUser(): Promise<UsersPermRes> {
    const url = environment.url.getUserPermission;
    return this.httpService.get(url);
  }

}
