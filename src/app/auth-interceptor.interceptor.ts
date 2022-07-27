import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    const userToken = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJwYkBiYXNtaWxlLmNvbSIsImV4cCI6NjIxMzg5MjAwNzgsImlhdCI6MTY1ODkyMDA3OH0.o2JyO77OITeHU1FJkbYjxlio2h0vlI3esCen8o8GsXnCQBlpjKP6_wNiH3Z6Qhk02HflKUtGnAzhGWIQj6CExw';
    const modifiedReq = req.clone({ 
      headers: req.headers.set('Authorization', `bearer ${userToken}`),
    });
    return next.handle(modifiedReq);
  }
}