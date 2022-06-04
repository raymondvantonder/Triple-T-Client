import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { finalize } from 'rxjs/operators';
import { toggleBusyIndicator } from '../../state/app.actions';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

    constructor(private _store: Store) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this._store.dispatch(toggleBusyIndicator({ payload: true }));
        return next.handle(req).pipe(
            finalize(() => {
                this._store.dispatch(toggleBusyIndicator({ payload: false }));
            })
        );
    }
}