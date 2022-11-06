import { Course } from "./course";

export interface CoursesAllResponse {
  successful: boolean;
  result: Course[];
}

export interface CourseAddEditGetResponse {
  successful: boolean;
  result: Course;
}

export interface CourseDeleteResponse {
  successful: boolean;
  result: string;
}

export interface CoursesSearchBody {
  duration?: string[];
  creationDate?: string[];
  description?: string[];
  title?: string[];
}
