import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './app.state';

export const selectAppState = createFeatureSelector<AppState>('appState');

export const selectError = createSelector(selectAppState, (state) => {
    return state.error;
});

export const selectUser = createSelector(selectAppState, (state) => {
    return state.user;
});

export const selectIsLoggedIn = createSelector(selectAppState, (state) => {
    return state.user ? true : false;
});

export const selectIsBusy = createSelector(selectAppState, (state) => {
    return state.isBusy;
});

export const selectSnackbarDetails = createSelector(selectAppState, (state) => {
    return state.snackbarDetails;
});