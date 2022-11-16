import { Action, createReducer, on } from "@ngrx/store";
import { Author } from "src/app/shared/types/author";
import {
  requestAddAuthor,
  requestAddAuthorFail,
  requestAddAuthorSuccess,
  requestAuthors,
  requestAuthorsFail,
  requestAuthorsSuccess,
  resetAddedAuthor,
} from "./authors.actions";

export const authorsFeatureKey = "authors";

export interface AuthorsState {
  authors: Author[];
  addedAuthor: Author | null;
}

export const initialState: AuthorsState = {
  authors: [],
  addedAuthor: null,
};

const reducer = createReducer(
  initialState,
  on(requestAuthors, (state) => ({ ...state })),
  on(requestAuthorsSuccess, (state, { authors }) => ({
    ...state,
    authors: authors,
  })),
  on(requestAuthorsFail, (state) => ({ ...state })),
  on(requestAddAuthor, (state) => ({ ...state })),
  on(requestAddAuthorSuccess, (state, { author }) => ({
    ...state,
    addedAuthor: author,
  })),
  on(requestAddAuthorFail, (state) => ({ ...state })),
  on(resetAddedAuthor, (state) => ({ ...state }))
);

export const authorsReducer = (
  state: AuthorsState = initialState,
  action: Action
): AuthorsState => reducer(state, action);
