import { Injectable,Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class TestInterceptor implements HttpInterceptor {

  constructor(private injector:Injector) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler){
    console.log({request});
    let commonUrl='http://127.0.0.1:5001/'
    
    
    let authService=this.injector.get(AuthService)

    let newRequest=request.clone({

       setHeaders:{
        Authorization:`Bearer ${authService.getToken()}`},

      url:commonUrl+request.url

    })
    return next.handle(newRequest);
  }
}