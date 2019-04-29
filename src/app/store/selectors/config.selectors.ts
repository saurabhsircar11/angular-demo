import { IConfigState } from './../states/config.state';
import { createSelector } from '@ngrx/store';
import { IAppState } from './../states/app.state';

const configState = (state: IAppState) => state.config;

export const selectConfig = createSelector(
    configState,
    (state: IConfigState) => state.config
);
