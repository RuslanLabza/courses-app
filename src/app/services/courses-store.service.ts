import { Injectable } from "@angular/core";
import { BehaviorSubject, map } from "rxjs";
import { Course } from "../shared/types/course";
import {
  CourseAddEditGetResponse,
  CoursesAllResponse,
  CourseDeleteResponse,
  CoursesSearchBody,
} from "../shared/types/coursesServiceRequestsResponses";
import { AuthorsStoreService } from "./authors-store.service";
import { CoursesService } from "./courses.service";

@Injectable({
  providedIn: "root",
})
export class CoursesStoreService {
  private isLoading$$ = new BehaviorSubject<boolean>(false);
  private courses$$ = new BehaviorSubject<Course[]>([]);
  public isLoading$ = this.isLoading$$.asObservable();
  public courses$ = this.courses$$.asObservable();

  constructor(
    private coursesService: CoursesService,
    private authorsStoreService: AuthorsStoreService
  ) {}

  getAll() {
    this.isLoading$$.next(true);
    this.coursesService.getAll().subscribe((res) => {
      if ((<CoursesAllResponse>res).successful) {
        this.courses$$.next((<CoursesAllResponse>res).result);
        this.isLoading$$.next(false);
      }
    });
  }

  createCourse(course: Course) {
    this.isLoading$$.next(true);
    return this.coursesService.createCourse(course).pipe(
      map((res) => {
        if ((<CourseAddEditGetResponse>res).successful) {
          this.getAll();
        }
      })
    );
  }

  editCourse(id: string, course: Course) {
    this.isLoading$$.next(true);
    return this.coursesService.editCourse(id, course).pipe(
      map((res) => {
        if ((<CourseAddEditGetResponse>res).successful) {
          this.getAll();
        }
      })
    );
  }

  getCourse(id: string) {
    return this.coursesService.getCourse(id).pipe(
      map((res) => {
        return (<CourseAddEditGetResponse>res).result;
      })
    );
  }

  deleteCourse(id: string) {
    this.isLoading$$.next(true);
    this.coursesService.deleteCourse(id).subscribe((res) => {
      if ((<CourseDeleteResponse>res).successful) {
        this.getAll();
        this.authorsStoreService.getAll();
      }
    });
  }

  searchCourses(searchBody: CoursesSearchBody) {
    this.isLoading$$.next(true);
    this.coursesService.searchCourses(searchBody).subscribe((res) => {
      if ((<CoursesAllResponse>res).successful) {
        this.courses$$.next((<CoursesAllResponse>res).result);
        this.authorsStoreService.getAll();
        this.isLoading$$.next(false);
      }
    });
  }
}
