import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SnackBarDetailsModel } from '../_models/snackbar-details';
import { UserModel } from '../_models/user-model';
import { selectIsBusy, selectIsLoggedIn, selectSnackbarDetails, selectUser } from '../state/app.selector';
import { clearSnackBar } from '../state/app.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app-shell.component.html',
  styleUrls: ['./app-shell.component.css']
})
export class AppShellComponent {

  user$: Observable<UserModel>;
  isBusy$: Observable<Boolean>;
  isUserLoggedIn$: Observable<Boolean>;
  snackBarDetails$: Observable<SnackBarDetailsModel>;

  constructor(private _store: Store) {

    this.isUserLoggedIn$ = this._store.select(selectIsLoggedIn);
    this.isBusy$ = this._store.select(selectIsBusy);
    this.user$ = this._store.select(selectUser);
    this.snackBarDetails$ = this._store.select(selectSnackbarDetails);
  }

  clearSnackBar() {
    this._store.dispatch(clearSnackBar())
  }
}
