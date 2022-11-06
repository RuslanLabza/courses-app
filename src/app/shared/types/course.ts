import { Author } from "./author";

export interface Course {
  id?: string;
  title: string;
  description: string;
  creationDate?: string;
  duration: number;
  authors: (string | Author)[];
}
