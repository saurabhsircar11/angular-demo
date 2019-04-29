import { IConfig } from './../../models/config.interface';
import { IConfigState } from './../states/config.state';
import { selectConfig } from './config.selectors';

const stateMock: IConfigState = {
    config: {
        adminName: 'El Maestro Tabarez',
        permission: ['users']
    }
};

describe('Config Selector', () => {
    it('selectConfig', () => {
        expect(selectConfig.projector(stateMock)).toBe(stateMock.config);
    });
});
