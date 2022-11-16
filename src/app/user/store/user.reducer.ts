import { Action, createReducer, on } from "@ngrx/store";
import {
  requestCurrentUser,
  requestCurrentUserFail,
  requestCurrentUserSuccess,
} from "./user.actions";

export const userFeatureKey = "user";

export interface UserState {
  isAdmin: boolean;
  name: string;
}

export const initialState: UserState = {
  isAdmin: false,
  name: "",
};

const reducer = createReducer(
  initialState,
  on(requestCurrentUser, (state) => ({ ...state })),
  on(requestCurrentUserSuccess, (state, { user }) => {
    return {
      ...state,
      ...user,
    };
  }),
  on(requestCurrentUserFail, (state) => ({ ...state }))
);

export const userReducer = (
  state: UserState = initialState,
  action: Action
): UserState => reducer(state, action);
