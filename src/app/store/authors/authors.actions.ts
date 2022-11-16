import { createAction, props } from "@ngrx/store";
import { Author } from "src/app/shared/types/author";

export const requestAuthors = createAction("[Authors] Load Authors");
export const requestAuthorsSuccess = createAction(
  "[Authors] Load Authors Success",
  props<{ authors: Author[] }>()
);
export const requestAuthorsFail = createAction(
  "[Authors] Load Authors Failure"
);
export const requestAddAuthor = createAction(
  "[Authors] Add Author",
  props<{ name: string }>()
);
export const requestAddAuthorSuccess = createAction(
  "[Authors] Add Author Success",
  props<{ author: Author }>()
);
export const requestAddAuthorFail = createAction(
  "[Authors] Add Author Failure"
);
export const resetAddedAuthor = createAction(
  "[Authors] Reset Author",
  props<{ id: string }>()
);
