import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Course } from "src/app/shared/types/course";
import { CoursesSearchBody } from "src/app/shared/types/coursesServiceRequestsResponses";
import {
  requestAllCourses,
  requestCreateCourse,
  requestDeleteCourse,
  requestEditCourse,
  requestFilteredCourses,
  requestSingleCourse,
} from "./courses.actions";
import { CoursesState } from "./courses.reducer";
import {
  getAllCourses,
  getCourse,
  getCourses,
  getErrorMessage,
  isAllCoursesLoadingSelector,
  isSearchingStateSelector,
  isSingleCourseLoadingSelector,
} from "./courses.selectors";

@Injectable({ providedIn: "root" })
export class CoursesStateFacade {
  public isAllCoursesLoading$ = this.store.select(isAllCoursesLoadingSelector);
  public isSingleCourseLoading$ = this.store.select(
    isSingleCourseLoadingSelector
  );
  public isSearchingState$ = this.store.select(isSearchingStateSelector);
  public courses$ = this.store.select(getCourses);
  public allCourses$ = this.store.select(getAllCourses);
  public course$ = this.store.select(getCourse);
  public errorMessage$ = this.store.select(getErrorMessage);

  constructor(private store: Store<{ courses: CoursesState }>) {}

  getAllCourses(): void {
    this.store.dispatch(requestAllCourses());
  }

  getSingleCourse(id: string): void {
    this.store.dispatch(requestSingleCourse({ id }));
  }

  getFilteredCourses(searchBody: CoursesSearchBody): void {
    this.store.dispatch(requestFilteredCourses({ searchBody }));
  }

  editCourse(id: string, course: Course): void {
    this.store.dispatch(requestEditCourse({ id, course }));
  }

  createCourse(course: Course): void {
    this.store.dispatch(requestCreateCourse({ course }));
  }

  deleteCourse(id: string): void {
    this.store.dispatch(requestDeleteCourse({ id }));
  }
}
