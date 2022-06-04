import { createReducer, on } from '@ngrx/store';
import { clearSnackBar, loginUserFailed, loginUserSuccess, logoutUser, registerUser, registerUserFailed, registerUserSuccess, showSnackBar, toggleBusyIndicator } from './app.actions';
import { AppState } from './app.state';

const initialAppState: AppState = {
    user: null,
    error: null,
    isBusy: false,
    snackbarDetails: null
}

export const appReducer = createReducer(initialAppState,
    on(registerUserSuccess, (state,) => ({
        ...state,
        error: null
    })),
    on(registerUserFailed, (state, { payload }) => ({
        ...state,
        error: payload
    })),
    on(loginUserSuccess, (state, { payload }) => (
        {
            ...state,
            user: payload.user,
            error: null
        })),
    on(loginUserFailed, (state, { payload }) => ({
        ...state,
        user: null,
        error: payload
    })),
    on(logoutUser, (state) => ({
        ...state,
        user: null,
    })),
    on(toggleBusyIndicator, (state, { payload }) => ({
        ...state,
        isBusy: payload
    })),
    on(showSnackBar, (state, { payload }) => ({
        ...state,
        snackbarDetails: payload
    })),
    on(clearSnackBar, (state) => ({
        ...state,
        snackbarDetails: null
    })),
);