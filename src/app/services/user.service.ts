import { IUserHttp } from './../models/http-models/user-http.interface';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
declare const require: any;
const Users = require('../../assets/users.json');


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers(): Observable<IUserHttp> {
    return of(Users);
  }
}
