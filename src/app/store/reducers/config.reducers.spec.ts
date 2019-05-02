import { EConfigActions, ConfigActions } from '../actions/config.actions';
import { configReducers } from './config.reducers';
import { IConfigState } from '../states/config.state';

describe('Config Reducer', () => {
    it('Get Config Success', () => {
        const action: ConfigActions = {
            type: EConfigActions.GetConfigSuccess, payload: {
                adminName: 'Saurabh Sircar',
            }
        };
        const output: IConfigState = {
            config: {
                adminName: 'Saurabh Sircar'

            }
        };

        expect(configReducers({
            config: {
                adminName: 'El Maestro Tabarez',
                permission: ['users']
            }
        }, action)).toEqual(output);
    });

    it('default case', () => {

        const action = { type: 'default', payload: null };


        expect(configReducers({
            config: {
                adminName: 'El Maestro Tabarez',
                permission: ['users']
            }
        }, action)).toEqual({
            config: {
                adminName: 'El Maestro Tabarez',
                permission: ['users']
            }
        });

    });
});
