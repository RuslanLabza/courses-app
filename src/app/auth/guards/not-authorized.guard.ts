import { Injectable } from "@angular/core";
import { CanActivate, Router, UrlTree } from "@angular/router";
import { map, Observable } from "rxjs";
import { AuthService } from "../services/auth.service";

@Injectable({
  providedIn: "root",
})
export class NotAuthorizedGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.auth.isAuthorized$.pipe(
      map((token: string | null) => {
        if (token) {
          return this.router.parseUrl("/courses");
        } else {
          return true;
        }
      })
    );
  }
}
