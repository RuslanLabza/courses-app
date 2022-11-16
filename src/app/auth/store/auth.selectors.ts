import { AuthState } from "./auth.reducer";

export const isUserAuthorized = (state: { auth: AuthState }) =>
  state.auth.isAuthorized;
export const getToken = (state: { auth: AuthState }) => state.auth.token;
export const getSpecificErrorMessage = (state: { auth: AuthState }) =>
  state.auth.errorMessage;
