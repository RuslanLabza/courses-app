import { UserState } from "./user.reducer";

export const getName = (state: { user: UserState }) => state.user.name;
export const isAdmin = (state: { user: UserState }) => state.user.isAdmin;
