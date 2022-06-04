import { Injectable } from "@angular/core";
import { Store } from '@ngrx/store';
import { SnackBarDetailsModel } from "src/app/_models/snackbar-details";
import { showSnackBar } from "../../state/app.actions";

@Injectable()
export class SnackBarService {

    constructor(private _store: Store) {

    }

    show(details: SnackBarDetailsModel) {
        this._store.dispatch(showSnackBar({ payload: details }))
    }
}