import { createAction, props } from "@ngrx/store";
import { UserState } from "./user.reducer";

export const requestCurrentUser = createAction("[User] Load User");
export const requestCurrentUserSuccess = createAction(
  "[User] Load User Success",
  props<{ user: UserState }>()
);
export const requestCurrentUserFail = createAction("[User] Load User Failure");
