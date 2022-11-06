import { Injectable } from "@angular/core";
import { CanLoad, Route, Router, UrlSegment, UrlTree } from "@angular/router";
import { map, Observable } from "rxjs";
import { AuthService } from "../services/auth.service";

@Injectable({
  providedIn: "root",
})
export class AuthorizedGuard implements CanLoad {
  constructor(private auth: AuthService, private router: Router) {}

  canLoad():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.auth.isAuthorized$.pipe(
      map((token: string | null) => {
        if (token) {
          return true;
        } else {
          return this.router.parseUrl("/login");
        }
      })
    );
  }
}
