import { CoursesState } from "./courses.reducer";

export const isAllCoursesLoadingSelector = (state: { courses: CoursesState }) =>
  state.courses.isAllCoursesLoading;
export const isSearchingStateSelector = (state: { courses: CoursesState }) =>
  state.courses.isSearchState;
export const isSingleCourseLoadingSelector = (state: {
  courses: CoursesState;
}) => state.courses.isSingleCourseLoading;
export const getCourses = (state: { courses: CoursesState }) =>
  state.courses.courses;
export const getAllCourses = (state: { courses: CoursesState }) =>
  state.courses.allCourses;
export const getCourse = (state: { courses: CoursesState }) =>
  state.courses.course;
export const getErrorMessage = (state: { courses: CoursesState }) =>
  state.courses.errorMessage;
