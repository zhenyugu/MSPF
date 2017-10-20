import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class LoginService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private OAuthtTokenUrl = 'http://localhost:54272/oauth/token';  // URL to web api

  constructor(private http: Http) { }

  login(username: string, password: string) {
    const body = 'grant_type=password' + '&username=' + username + '&password=' + password;
    return this.http.post(this.OAuthtTokenUrl, body)
      .toPromise()
      .then(data => {
        const user = data.json();
        if (user && user.access_token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
      });
  }

}
