import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { map, catchError, exhaustMap } from "rxjs/operators";
import { TripleTService } from "../services/triple-t-service";
import { Router } from "@angular/router";
import { LoginUserModel } from "../_models/login-user-model";
import { loginUserFailed, loginUserSuccess, registerUserFailed, registerUserSuccess } from "./app.actions";
import { RegisterUserModel } from "../_models/register-user-model";

@Injectable()
export class AppEffects {

    constructor(private tripleTService: TripleTService,
        private actions$: Actions,
        private router: Router) { }

    login$ = createEffect(() =>
        this.actions$.pipe(
            ofType('[User] Login User'),
            exhaustMap((input: { payload: LoginUserModel }) =>
                this.tripleTService.loginUser(input.payload).pipe(
                    map(response => {
                        console.log(response);
                        localStorage.setItem('__Auth', response.user.token.toString())
                        return loginUserSuccess({ payload: response });
                    }),
                    catchError(error => of(loginUserFailed({ payload: error })))
                )
            )
        )
    );

    register$ = createEffect(() =>
        this.actions$.pipe(
            ofType('[User] Register User'),
            exhaustMap((action: RegisterUserModel) =>
                this.tripleTService.registerUser(action).pipe(
                    map(_ => {
                        this.router.navigate(['login']);
                        return registerUserSuccess();
                    }),
                    catchError(error => of(registerUserFailed({ payload: error })))
                )
            )
        )
    );
}