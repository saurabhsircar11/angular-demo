import { userReducers } from './user.reducers';
import { configReducers } from './config.reducers';
import { IAppState } from '../states/app.state';
import { ActionReducerMap } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';


export const appReducers: ActionReducerMap< IAppState, any> = {
    users: userReducers,
    config: configReducers,
    router: routerReducer
};
