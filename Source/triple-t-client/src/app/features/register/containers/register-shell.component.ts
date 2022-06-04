import { Component, } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { RegisterUserModel } from 'src/app/_models/register-user-model';
import { SnackBarService } from 'src/app/_core/services/SnackBarService';
import { registerUser } from '../../../state/app.actions';

@Component({
  selector: 'app-register-shell',
  templateUrl: './register-shell.component.html',
  styleUrls: ['./register-shell.component.css']
})
export class RegisterShellComponent {

  constructor(private _store: Store,
    private _snackbarService: SnackBarService) {

    this._snackbarService.show({
      message: 'Hello',
      horizontalPosition: "center",
      mode: "Success",
      verticalPosition: "bottom",
      time: 2500
    })
  }

  registerUser(userDetails: RegisterUserModel): void {
    this._store.dispatch(registerUser({ payload: userDetails }));
  }
}
