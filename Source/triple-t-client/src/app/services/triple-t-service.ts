import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthenticatedUserModel } from '../_models/authenticated-user-model';
import { LoginUserModel } from '../_models/login-user-model';
import { RegisterUserModel } from '../_models/register-user-model';

@Injectable({
    providedIn: 'root'
})
export class TripleTService {
    public baseUrl = environment.tripletEndpoint;
    constructor(private httpClient: HttpClient) { }

    loginUser(input: LoginUserModel): Observable<AuthenticatedUserModel> {
        console.log(input);
        return this.httpClient.post<AuthenticatedUserModel>(`${this.baseUrl}/user/login`, input);
    }

    registerUser(input: RegisterUserModel): Observable<Number> {
        return this.httpClient.post<Number>(`${this.baseUrl}/user/register`, input);
    }
}