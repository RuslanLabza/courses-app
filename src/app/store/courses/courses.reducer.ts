import { Action, createReducer, on } from "@ngrx/store";
import { Course } from "src/app/shared/types/course";
import {
  requestAllCourses,
  requestAllCoursesFail,
  requestAllCoursesSuccess,
  requestCreateCourse,
  requestCreateCourseFail,
  requestCreateCourseSuccess,
  requestDeleteCourse,
  requestDeleteCourseFail,
  requestEditCourse,
  requestEditCourseFail,
  requestEditCourseSuccess,
  requestFilteredCourses,
  requestFilteredCoursesFail,
  requestFilteredCoursesSuccess,
  requestSingleCourse,
  requestSingleCourseFail,
  requestSingleCourseSuccess,
} from "./courses.actions";

export const coursesFeatureKey = "courses";

export interface CoursesState {
  allCourses: Course[];
  courses: Course[];
  course: Course | null;
  isAllCoursesLoading: boolean;
  isSingleCourseLoading: boolean;
  isSearchState: boolean;
  errorMessage: string;
}

export const initialState: CoursesState = {
  allCourses: [],
  courses: [],
  course: null,
  isAllCoursesLoading: false,
  isSingleCourseLoading: false,
  isSearchState: false,
  errorMessage: "",
};

const reducer = createReducer(
  initialState,
  on(requestAllCourses, (state) => ({ ...state, isAllCoursesLoading: true })),
  on(requestAllCoursesSuccess, (state, { courses }) => ({
    ...state,
    allCourses: courses,
    isAllCoursesLoading: false,
  })),
  on(requestAllCoursesFail, (state, { error }) => ({
    ...state,
    errorMessage: error,
    isAllCoursesLoading: false,
  })),
  on(requestSingleCourse, (state) => ({
    ...state,
    isSingleCourseLoading: true,
  })),
  on(requestSingleCourseSuccess, (state, { course }) => ({
    ...state,
    course: course,
    isSingleCourseLoading: false,
  })),
  on(requestSingleCourseFail, (state, { error }) => ({
    ...state,
    errorMessage: error,
    isSingleCourseLoading: false,
  })),
  on(requestFilteredCourses, (state) => ({ ...state, isSearchState: true })),
  on(requestFilteredCoursesSuccess, (state, { courses }) => ({
    ...state,
    courses: courses,
    isSearchState: false,
  })),
  on(requestFilteredCoursesFail, (state, { error }) => ({
    ...state,
    errorMessage: error,
    isSearchState: false,
  })),
  on(requestDeleteCourse, (state) => ({
    ...state,
    isSingleCourseLoading: true,
  })),
  on(requestDeleteCourseFail, (state, { error }) => ({
    ...state,
    errorMessage: error,
    isSingleCourseLoading: false,
  })),
  on(requestEditCourse, (state) => ({ ...state, isSingleCourseLoading: true })),
  on(requestEditCourseSuccess, (state, { course }) => ({
    ...state,
    course: course,
    isSingleCourseLoading: false,
  })),
  on(requestEditCourseFail, (state, { error }) => ({
    ...state,
    errorMessage: error,
    isSingleCourseLoading: false,
  })),
  on(requestCreateCourse, (state) => ({
    ...state,
    isSingleCourseLoading: true,
  })),
  on(requestCreateCourseSuccess, (state, { course }) => ({
    ...state,
    course: course,
    isSingleCourseLoading: false,
  })),
  on(requestCreateCourseFail, (state, { error }) => ({
    ...state,
    errorMessage: error,
    isSingleCourseLoading: false,
  }))
);

export const coursesReducer = (
  state: CoursesState = initialState,
  action: Action
): CoursesState => reducer(state, action);
