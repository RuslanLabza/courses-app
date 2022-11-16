import { createAction, props } from "@ngrx/store";
import { User } from "src/app/shared/types/user";
import { AuthState } from "./auth.reducer";

export const requestLogin = createAction("[Auth] Login", props<User>());
export const requestLoginSuccess = createAction(
  "[Auth] Login Success",
  props<{ auth: AuthState }>()
);
export const requestLoginFail = createAction(
  "[Auth] Login Failure",
  props<{ auth: AuthState }>()
);
export const requestRegister = createAction("[Auth] Register");
export const requestRegisterSuccess = createAction(
  "[Auth] Register Success",
  props<{ auth: AuthState }>()
);
export const requestRegisterFail = createAction("[Auth] Register Failure");
export const requestLogout = createAction("[Auth] Logout");
export const requestLogoutSuccess = createAction(
  "[Auth] Logout Success",
  props<{ auth: AuthState }>()
);
