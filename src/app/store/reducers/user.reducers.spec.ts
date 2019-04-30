import { EUserActions } from './../actions/user.actions';
import { userReducers } from './user.reducers';
describe('User Reducers', () => {
    it('Get Users Default', () => {
        expect(userReducers({ users: null, selectedUser: null }, { type: 'default' }))
            .toEqual({ users: null, selectedUser: null });
    });

    it('Get Users Success', () => {
        expect(userReducers({ users: null, selectedUser: null },
            {
                type: EUserActions.GetUsersSuccess,
                payload: [
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
                ]
            })).toEqual({
                users: [
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
                ],
                selectedUser: null
            });
    });

    it('Select User ', () => {
        expect(userReducers({ users: null, selectedUser: null },
            {
                type: EUserActions.GetUserSuccess, payload: {
                    id: 1,
                    name: 'Luis Suarez',
                    cardNumber: 'XXXX-XXXX-XXXX-4321',
                    cardType: 'Visa'
                }
            })).toEqual({
                users: null,
                selectedUser: {
                    id: 1,
                    name: 'Luis Suarez',
                    cardNumber: 'XXXX-XXXX-XXXX-4321',
                    cardType: 'Visa'
                }
            });
    });
});
