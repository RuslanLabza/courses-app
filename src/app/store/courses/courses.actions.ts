import { createAction, props } from "@ngrx/store";
import { Course } from "src/app/shared/types/course";
import { CoursesSearchBody } from "src/app/shared/types/coursesServiceRequestsResponses";

export const requestAllCourses = createAction("[Courses] Load Courses");
export const requestAllCoursesSuccess = createAction(
  "[Courses] Load Courses Success",
  props<{ courses: Course[] }>()
);
export const requestAllCoursesFail = createAction(
  "[Courses] Load Courses Failure",
  props<{ error: string }>()
);
export const requestSingleCourse = createAction(
  "[Courses] Load Single Course",
  props<{ id: string }>()
);
export const requestSingleCourseSuccess = createAction(
  "[Courses] Load Single Course Success",
  props<{ course: Course }>()
);
export const requestSingleCourseFail = createAction(
  "[Courses] Load Single Course Failure",
  props<{ error: string }>()
);
export const requestFilteredCourses = createAction(
  "[Courses] Load Filtered Courses",
  props<{ searchBody: CoursesSearchBody }>()
);
export const requestFilteredCoursesSuccess = createAction(
  "[Courses] Load Filtered Courses Success",
  props<{ courses: Course[] }>()
);
export const requestFilteredCoursesFail = createAction(
  "[Courses] Load Filtered Courses Failure",
  props<{ error: string }>()
);
export const requestDeleteCourse = createAction(
  "[Courses] Delete Course",
  props<{ id: string }>()
);
export const requestDeleteCourseFail = createAction(
  "[Courses] Delete Course Failure",
  props<{ error: string }>()
);
export const requestEditCourse = createAction(
  "[Courses] Edit Course",
  props<{ id: string; course: Course }>()
);
export const requestEditCourseSuccess = createAction(
  "[Courses] Edit Course Success",
  props<{ course: Course }>()
);
export const requestEditCourseFail = createAction(
  "[Courses] Edit Course Failure",
  props<{ error: string }>()
);
export const requestCreateCourse = createAction(
  "[Courses] Create Course",
  props<{ course: Course }>()
);
export const requestCreateCourseSuccess = createAction(
  "[Courses] Create Course Success",
  props<{ course: Course }>()
);
export const requestCreateCourseFail = createAction(
  "[Courses] Create Course Failure",
  props<{ error: string }>()
);
