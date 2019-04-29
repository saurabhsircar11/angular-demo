import { initialUserState, IUserState } from '../states/user.state';
import { UserActions, EUserActions } from '../actions/user.actions';

export const userReducers = (
    state = initialUserState,
    action
): IUserState => {
    switch (action.type) {
        case EUserActions.GetUsersSuccess: {
            return {
                ...state,
                users: action.payload
            };
        }
        case EUserActions.GetUserSuccess: {
            return {
                ...state,
                selectedUser: action.payload
            };
        }

        default:
            return state;
    }
};

