import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { User } from "src/app/shared/types/user";
import { requestLogin } from "./auth.actions";
import { AuthState } from "./auth.reducer";
import {
  getSpecificErrorMessage,
  getToken,
  isUserAuthorized,
} from "./auth.selectors";

@Injectable({ providedIn: "root" })
export class AuthStateFacade {
  public isAuthorized$ = this.store.select(isUserAuthorized);
  public getToken$ = this.store.select(getToken);
  public getLoginErrorMessage$ = this.store.select(getSpecificErrorMessage);

  constructor(private store: Store<{ auth: AuthState }>) {}

  login(body: User): void {
    this.store.dispatch(requestLogin(body));
  }
}
