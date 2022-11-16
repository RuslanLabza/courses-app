import { AuthorsState } from "./authors.reducer";

export const getAuthors = (state: { authors: AuthorsState }) =>
  state.authors.authors;
export const getAddedAuthors = (state: { authors: AuthorsState }) =>
  state.authors.addedAuthor;
