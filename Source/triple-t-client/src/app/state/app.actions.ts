import { RegisterUserModel } from '../_models/register-user-model';
import { createAction, props } from '@ngrx/store';
import { LoginUserModel } from '../_models/login-user-model';
import { AuthenticatedUserModel } from '../_models/authenticated-user-model';
import { SnackBarDetailsModel } from '../_models/snackbar-details';

export const registerUser = createAction(
    '[User] Register User',
    props<{ payload: RegisterUserModel }>()
);

export const registerUserSuccess = createAction(
    '[User] Register User Success'
);

export const registerUserFailed = createAction(
    '[User] Register User Failed',
    props<{ payload: String }>()
);

export const loginUser = createAction(
    '[User] Login User',
    props<{ payload: LoginUserModel }>()
);

export const loginUserSuccess = createAction(
    '[User] Login User Success',
    props<{ payload: AuthenticatedUserModel }>()
);

export const loginUserFailed = createAction(
    '[User] Login User Failed',
    props<{ payload: String }>()
);

export const logoutUser = createAction(
    '[User] Logout User'
);

export const toggleBusyIndicator = createAction(
    '[App] Toggle Busy Indicator',
    props<{ payload: Boolean }>()
);

export const showSnackBar = createAction(
    '[App] Show Snack Bar',
    props<{ payload: SnackBarDetailsModel }>()
);

export const clearSnackBar = createAction(
    '[App] Clear Snack Bar'
);
