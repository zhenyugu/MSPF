import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class NoopInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Get the auth header from the service.
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        const accessToken = 'Bearer ' + currentUser.access_token;
        // Clone the request to add the new header.
        const authReq = req.clone(
            {
                headers: req.headers.set('Authorization', accessToken).set('UserId', currentUser.userId)
            });
        // Pass on the cloned request instead of the original request.
        return next.handle(authReq).do(event => {
            console.log(event);
            if (event instanceof HttpResponse) {
                if (event.status === 401) {
                    alert(1);
                }
            }
        });
    }
}