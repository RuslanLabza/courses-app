import { Author } from "./author";

export interface AuthorsResponse {
  successful: boolean;
  result: Author[];
}

export interface AddAuthorResponse {
  successful: boolean;
  result: Author;
}

export interface AuthorDeleteResponse {
  successful: boolean;
  result: string;
}
