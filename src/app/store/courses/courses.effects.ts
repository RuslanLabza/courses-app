import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, of } from "rxjs";
import { CoursesService } from "src/app/services/courses.service";
import { Author } from "src/app/shared/types/author";
import { Course } from "src/app/shared/types/course";
import {
  CourseAddEditGetResponse,
  CoursesAllResponse,
} from "src/app/shared/types/coursesServiceRequestsResponses";
import { AuthorsStateFacade } from "../authors/authors.facade";
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
import { CoursesStateFacade } from "./courses.facade";

@Injectable()
export class CoursesEffects {
  getAll$ = createEffect(() =>
    this.actions$.pipe(
      ofType(requestAllCourses),
      exhaustMap(() =>
        this.coursesService.getAll().pipe(
          map((coursesResponse) => {
            let courses = (<CoursesAllResponse>coursesResponse).result;
            this.authorsStateFacade.getAuthors();
            this.authorsStateFacade.authors$.subscribe(
              (authors: Author[]): Course[] =>
                (courses = courses.map(
                  (course) =>
                    <Course>{
                      ...course,
                      authors: course.authors.map((authorId) =>
                        authors.find((author) => author.id === authorId)
                      ),
                    }
                ))
            );

            return courses;
          }),
          map((courses) => {
            return requestAllCoursesSuccess({
              courses: courses,
            });
          }),
          catchError((error) => of(requestAllCoursesFail(error)))
        )
      )
    )
  );

  filteredCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(requestFilteredCourses),
      exhaustMap((searchBody) =>
        this.coursesStateFacade.allCourses$.pipe(
          map((courses) =>
            requestFilteredCoursesSuccess({
              courses: courses.filter((course) =>
                course.title.includes(searchBody.searchBody.title![0])
              ),
            })
          ),
          catchError((error) => of(requestFilteredCoursesFail(error)))
        )
      )
    )
  );

  getSpecificCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(requestSingleCourse),
      exhaustMap(({ id }) =>
        this.coursesService.getCourse(id).pipe(
          map((response) => {
            let course = (<CourseAddEditGetResponse>response).result;
            this.authorsStateFacade.getAuthors();
            this.authorsStateFacade.authors$.subscribe((authors: Author[]) => {
              course = {
                ...course,
                authors: <Author[]>(
                  course.authors.map((authorId) =>
                    authors.find((author) => author.id === authorId)
                  )
                ),
              };
            });

            return course;
          }),
          map((course) => {
            return requestSingleCourseSuccess({
              course: course,
            });
          }),
          catchError((error) => of(requestSingleCourseFail(error)))
        )
      )
    )
  );

  deleteCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(requestDeleteCourse),
      exhaustMap(({ id }) =>
        this.coursesService.deleteCourse(id).pipe(
          map(() => requestAllCourses()),
          catchError((error) => of(requestDeleteCourseFail(error)))
        )
      )
    )
  );

  editCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(requestEditCourse),
      exhaustMap(({ id, course }) =>
        this.coursesService.editCourse(id, course).pipe(
          map((course) => requestEditCourseSuccess({ course: <Course>course })),
          catchError((error) => of(requestEditCourseFail(error)))
        )
      )
    )
  );

  createCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(requestCreateCourse),
      exhaustMap(({ course }) =>
        this.coursesService.createCourse(course).pipe(
          map((course) =>
            requestCreateCourseSuccess({ course: <Course>course })
          ),
          catchError((error) => of(requestCreateCourseFail(error)))
        )
      )
    )
  );

  redirectToTheCoursesPage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          requestCreateCourseSuccess,
          requestEditCourseSuccess,
          requestSingleCourseFail
        ),
        exhaustMap(() => this.router.navigate(["/courses"]))
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private coursesService: CoursesService,
    private authorsStateFacade: AuthorsStateFacade,
    private coursesStateFacade: CoursesStateFacade,
    private router: Router
  ) {}
}
