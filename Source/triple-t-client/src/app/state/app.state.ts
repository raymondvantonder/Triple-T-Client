import { SnackBarDetailsModel } from "../_models/snackbar-details";
import { UserModel } from "../_models/user-model";

export interface AppState {
    user: UserModel | null;
    isBusy: Boolean;
    error: String | null;
    snackbarDetails: SnackBarDetailsModel | null;
}