import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { SnackBarDetailsModel, SnackBarServiceMode } from './_models/snackbar-details';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserModel } from './_models/user-model';
import { selectIsBusy, selectIsLoggedIn, selectSnackbarDetails, selectUser } from './state/app.selector';
import { clearSnackBar } from './state/app.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild(MatMenuTrigger, { static: false }) trigger: MatMenuTrigger;

  recheckIfInMenu: boolean;

  user$: Observable<UserModel>;
  isBusy$: Observable<Boolean>;
  isUserLoggedIn$: Observable<Boolean>;
  snackBarDetails$: Observable<SnackBarDetailsModel>;

  constructor(private _store: Store,
    private _snackBar: MatSnackBar) {

    this.isBusy$ = this._store.select(selectIsBusy);
    this.isUserLoggedIn$ = this._store.select(selectIsLoggedIn);
    this.user$ = this._store.select(selectUser);
    this.snackBarDetails$ = this._store.select(selectSnackbarDetails);

    this.snackBarDetails$.subscribe(details => this.showSnackBar(details));
  }

  ngOnInit() {
    this.recheckIfInMenu = false;
  }

  openResourceMenu() {
    this.trigger.openMenu();
  }

  closeResourceMenu() {
    setTimeout(() => {
      if (this.recheckIfInMenu === false) {
        this.trigger.closeMenu();
      }
    }, 175);
  }

  showSnackBar(details: SnackBarDetailsModel) {

    console.log('Showing snack bar');
    console.log(details);

    if (details) {
      this._snackBar.open(details.message, '', {
        duration: details.time > 0 ? details.time : 2500,
        horizontalPosition: details.horizontalPosition,
        verticalPosition: details.verticalPosition,
        panelClass: this.getPanelClass(details.mode)
      }).afterDismissed().subscribe(x => this._store.dispatch(clearSnackBar()));
    }
  }

  getPanelClass(mode: SnackBarServiceMode) {
    switch (mode) {
      case 'Success':
        return ['primary-snackbar', 'login-snackbar'];
      case 'Info':
        return ['primary-snackbar', 'login-snackbar'];
      case 'Error':
        return ['red-snackbar', 'red-snackbar'];
      case 'Warn':
        return ['red-snackbar', 'red-snackbar'];
    }
  }

}
