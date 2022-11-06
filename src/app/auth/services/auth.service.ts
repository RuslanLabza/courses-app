import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, tap } from "rxjs";
import { LoginResponse } from "src/app/shared/types/loginServiceRequestsResponses";
import { User } from "src/app/shared/types/user";
import { UserStoreService } from "src/app/user/services/user-store.service";
import { SessionStorageService } from "./session-storage.service";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private host = "http://localhost:4000/";
  private isAuthorized$$ = new BehaviorSubject<string | null>(
    this.sessionStorage.getToken()
  );
  public isAuthorized$ = this.isAuthorized$$.asObservable();
  private name$$ = new BehaviorSubject<string | null>(null);
  public name$ = this.name$$.asObservable();

  constructor(
    private httpClient: HttpClient,
    private sessionStorage: SessionStorageService,
    private userStoreService: UserStoreService
  ) {}

  login({ email, password }: { email: string; password: string }) {
    const url = this.host + "login";

    return this.httpClient.post(url, { email, password, name: "" }).pipe(
      tap((res) => {
        if ((<LoginResponse>res).successful) {
          this.sessionStorage.setToken((<LoginResponse>res).result);
          this.userStoreService.getAll();
          this.isAuthorized$$.next((<LoginResponse>res).result);
          this.name$$.next((<LoginResponse>res).user.name);
        }
      })
    );
  }

  logout() {
    const url = this.host + "logout";

    return this.httpClient
      .delete(url, {
        observe: "response",
      })
      .pipe(
        tap((res) => {
          if (res.status === 200) {
            this.sessionStorage.deleteToken();
            this.userStoreService.getAll();
            this.isAuthorized$$.next(null);
          }
        })
      );
  }

  register(user: User) {
    const url = this.host + "register";

    return this.httpClient.post(url, user);
  }
}
