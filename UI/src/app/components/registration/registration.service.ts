import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { RegistrationModel } from './registrationModel';

@Injectable()
export class RegistrationService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private accountCreateUrl = 'http://localhost:54272/api/account/create';  // URL to web api

    constructor(private http: Http) { }

    create(registrationModel: RegistrationModel): Promise<RegistrationModel> {
        return this.http
            .post(this.accountCreateUrl, registrationModel, { headers: this.headers })
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
