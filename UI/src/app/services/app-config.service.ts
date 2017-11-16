import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class AppConfigService {

  constructor(private http: Http) { }

  apiBaseUrl = 'http://localhost:6596/api';

  getApiBaseUrl() {
    return this.apiBaseUrl;
  }
}
