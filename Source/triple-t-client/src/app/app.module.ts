import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './features/home/home.component';
import { AboutComponent } from './features/about/about.component';
import { RegisterFormComponent } from './features/register/components/register-form/register-form.component';
import { RegisterShellComponent } from './features/register/containers/register-shell.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './state/app.effects';
import { LoginFormComponent } from './features/login/components/login-form/login-form.component';
import { LoginShellComponent } from './features/login/containers/login-shell.component';
import { HeaderInterceptor } from './_core/http-interceptors/header-interceptor';
import { LoaderInterceptor } from './_core/http-interceptors/loader-interceptor';
import { SnackBarService } from './_core/services/SnackBarService';
import { LayoutComponent } from './app-components/layout/layout.component';
import { AppShellComponent } from './app-containers/app-shell.component';
import { appReducer } from './state/app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    RegisterFormComponent,
    RegisterShellComponent,
    LoginFormComponent,
    LoginShellComponent,
    LayoutComponent,
    AppShellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    StoreModule.forRoot({ appState: appReducer }),
    EffectsModule.forRoot([AppEffects]),
    StoreDevtoolsModule.instrument({ name: 'triple-t', maxAge: 25, logOnly: environment.production })
  ],
  providers: [
    SnackBarService,
    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
  ],
  bootstrap: [AppShellComponent]
})
export class AppModule { }
