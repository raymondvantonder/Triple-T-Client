import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loginUser } from 'src/app/state/app.actions';
import { LoginUserModel } from 'src/app/_models/login-user-model';

@Component({
  selector: 'app-login-shell',
  templateUrl: './login-shell.component.html',
  styleUrls: ['./login-shell.component.css']
})
export class LoginShellComponent {

  constructor(private _store: Store) {
  }

  loginUser(userDetails: LoginUserModel): void {
    this._store.dispatch(loginUser({ payload: userDetails }));
  }
}
