import { IUser } from './../../models/user.interface';
import { IUserState } from './../states/user.state';
import { IAppState } from './../states/app.state';
import { UserService } from '../../services/user.service';
import { appReducers } from '../reducers/app.reducers';
import { GetUsers, GetUsersSuccess, GetUser, GetUserSuccess } from '../actions/user.actions';
import { UserEffects } from './user.effects';
import { TestBed } from '@angular/core/testing';
import { StoreModule, Store } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';
import { cold, hot } from 'jasmine-marbles';
import { Observable, of } from 'rxjs';
import { UserServiceMock } from './mocks/user.service.mock';


describe('user effect', () => {
    let effects: UserEffects;
    let actions: Observable<any>;
    let store: Store<IAppState>;
    const userMock: IUser[] = [
        {
            id: 1,
            name: 'Luis Suarez',
            cardNumber: 'XXXX-XXXX-XXXX-4321',
            cardType: 'Visa'
        },
        {
            id: 2,
            name: 'Lucas Torreira',
            cardNumber: 'XXXX-XXXX-XXXX-1369',
            cardType: 'Master'
        },
        {
            id: 3,
            name: 'Edison Cavani',
            cardNumber: 'XXXX-XXXX-XXXX-8888',
            cardType: 'Visa'
        }

    ];

    const stateMockUser: IUserState = {
        users: userMock,
        selectedUser: {
            id: 1,
            name: 'Luis Suarez',
            cardNumber: 'XXXX-XXXX-XXXX-4321',
            cardType: 'Visa'
        }
    };


    const stateMock: IAppState = {
        users: stateMockUser,
        config: null
    };


    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [StoreModule.forRoot(appReducers, { initialState: stateMock })],
            providers: [UserEffects, provideMockActions(() => actions), {
                provide: UserService,
                useClass: UserServiceMock
            }]
        });
        effects = TestBed.get(UserEffects);
        store = TestBed.get(Store);
    });

    it('get users should work', () => {
        const action = new GetUsers();
        const completed = new GetUsersSuccess([
            {
                id: 1,
                name: 'Luis Suarez',
                cardNumber: 'XXXX-XXXX-XXXX-4321',
                cardType: 'Visa'
            },
            {
                id: 2,
                name: 'Lucas Torreira',
                cardNumber: 'XXXX-XXXX-XXXX-1369',
                cardType: 'Master'
            },
            {
                id: 3,
                name: 'Edison Cavani',
                cardNumber: 'XXXX-XXXX-XXXX-8888',
                cardType: 'Visa'
            }
        ]);
        actions = hot('--a-', { a: action });
        const expected = cold('--b', { b: completed });
        expect(effects.getUsers$).toBeObservable(expected);
    });
    it('get user should work', () => {
        const action = new GetUser(1);
        const completed = new GetUserSuccess({
            id: 1,
            name: 'Luis Suarez',
            cardNumber: 'XXXX-XXXX-XXXX-4321',
            cardType: 'Visa'
        });
        actions = hot('--a-', { a: action });
        const expected = cold('--b', { b: completed });
        expect(effects.getUser$).toBeObservable(expected);
    });
});
