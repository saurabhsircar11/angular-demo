import { IUserHttp } from '../../../models/http-models/user-http.interface';
import { Observable, of } from 'rxjs';
declare const require: any;
const Users = require('../../../../assets/users.json');


export class UserServiceMock {

  constructor() { }

  getUsers(): Observable<IUserHttp> {
    return of(Users);
  }
}
