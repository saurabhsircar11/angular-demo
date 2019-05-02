import { hot, cold } from 'jasmine-marbles';
import { GetConfig, GetConfigSuccess } from './../actions/config.actions';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { ConfigEffects } from './config.effects';
import { TestBed } from '../../../../node_modules/@angular/core/testing';
import { ConfigService } from '../../services/config.service';
import { ConfigServiceMock } from './mocks/config.service.mock';



describe('Config effects', () => {
    let effects: ConfigEffects;
    let actions: Observable<any>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ConfigEffects, provideMockActions(() => actions), {
                provide: ConfigService,
                useClass: ConfigServiceMock
            }]

        });
        effects = TestBed.get(ConfigEffects);
    });

    it('get config should work', () => {
        const action = new GetConfig();
        const completed = new GetConfigSuccess({
            adminName: 'El Maestro Tabarez',
            permission: ['users']
        });
        actions = hot('--a-', { a: action });
        const expected = cold('--b', { b: completed });
        expect(effects.getConfig$).toBeObservable(expected);
    });
});
