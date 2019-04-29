import { IUser } from './../../models/user.interface';
import { IUserState } from './../states/user.state';
import { selectUserList, selectSelectedUser } from './user.selector';

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

const stateMock: IUserState = {
    users: userMock,
    selectedUser: {
        id: 1,
        name: 'Luis Suarez',
        cardNumber: 'XXXX-XXXX-XXXX-4321',
        cardType: 'Visa'
    }
};

describe('User Selector', () => {
    it('User List selector', () => {
        expect(selectUserList.projector(stateMock)).toBe(stateMock.users);
    });

    it('Selected User selector', () => {
        expect(selectSelectedUser.projector(stateMock)).toBe(stateMock.selectedUser);
    });
});


