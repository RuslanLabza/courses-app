import { Action, createReducer, on } from "@ngrx/store";
import {
  requestLogin,
  requestLoginFail,
  requestLoginSuccess,
  requestLogout,
  requestLogoutSuccess,
  requestRegister,
  requestRegisterFail,
  requestRegisterSuccess,
} from "./auth.actions";

export const authFeatureKey = "auth";

export interface AuthState {
  isAuthorized: string | null;
  token: string;
  errorMessage: string;
}

export const initialState: AuthState = {
  isAuthorized: window.sessionStorage.getItem("_token"),
  token: "",
  errorMessage: "",
};

const reducer = createReducer(
  initialState,
  on(requestLogin, (state) => ({ ...state })),
  on(requestLoginSuccess, (state, { auth }) => {
    return {
      ...state,
      ...auth,
    };
  }),
  on(requestLoginFail, (state) => ({ ...state })),
  on(requestRegister, (state) => ({ ...state })),
  on(requestRegisterSuccess, (state, { auth }) => {
    return {
      ...state,
      ...auth,
    };
  }),
  on(requestRegisterFail, (state) => ({ ...state })),
  on(requestLogout, (state) => ({ ...state })),
  on(requestLogoutSuccess, (state, { auth }) => {
    return {
      ...state,
      ...auth,
    };
  })
);

export const authReducer = (
  state: AuthState = initialState,
  action: Action
): AuthState => reducer(state, action);
