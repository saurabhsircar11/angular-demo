import { IConfig } from './../../models/config.interface';
import { switchMap } from 'rxjs/operators';
import { GetConfig, EConfigActions, GetConfigSuccess } from './../actions/config.actions';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { ConfigService } from '../../services/config.service';
import { of } from 'rxjs';


@Injectable()
export class ConfigEffects {
    constructor(
        private configService: ConfigService,
        private actions$: Actions
    ) { }
    @Effect()
    getConfig$ = this.actions$.pipe(
        ofType<GetConfig>(EConfigActions.GetConfig),
        switchMap(() => this.configService.getConfig()),
        switchMap((config: IConfig) => {
            return of(new GetConfigSuccess(config));
        })
    );
}
