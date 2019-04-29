import { selectUserList } from './../selectors/user.selector';
import { IUserHttp } from './../../models/http-models/user-http.interface';
import { UserService } from './../../services/user.service';
import { IAppState } from '../states/app.state';
import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';
import {
    GetUsersSuccess,
    EUserActions,
    GetUserSuccess,
    GetUser,
    GetUsers
} from '../actions/user.actions';

@Injectable()
export class UserEffects {
    constructor(
        private userService: UserService,
        private actions$: Actions,
        private store: Store<IAppState>
    ) { }

    @Effect()
    getUsers$ = this.actions$.pipe(
        ofType<GetUsers>(EUserActions.GetUsers),
        switchMap(() => this.userService.getUsers()),
        switchMap((userHttp: IUserHttp) => of(new GetUsersSuccess(userHttp.users)))
    );

    @Effect()
    getUser$ = this.actions$.pipe(
        ofType<GetUser>(EUserActions.GetUser),
        map(action => action.payload),
        withLatestFrom(this.store.pipe(select(selectUserList))),
        switchMap(([id, users]) => {
            const selectedUser = users.filter(user => user.id === +id)[0];
            return of(new GetUserSuccess(selectedUser));
        })
    );

}


