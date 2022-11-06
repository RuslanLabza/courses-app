import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, Observable, throwError } from "rxjs";
import { SessionStorageService } from "../services/session-storage.service";

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {
  constructor(
    private sessionStorage: SessionStorageService,
    private router: Router
  ) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.sessionStorage.getToken();

    if (token) {
      request = request.clone({
        setHeaders: { Authorization: token },
      });
    }

    return next.handle(request).pipe<HttpEvent<any>>(
      catchError((err) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this.router.parseUrl("/login");
          }
        }
        return throwError(err);
      })
    );
  }
}
