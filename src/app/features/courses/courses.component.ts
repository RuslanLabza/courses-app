import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { CoursesStoreService } from "src/app/services/courses-store.service";
import { Course } from "src/app/shared/types/course";
import { CoursesSearchBody } from "src/app/shared/types/coursesServiceRequestsResponses";
import { UserStoreService } from "src/app/user/services/user-store.service";

@Component({
  selector: "app-courses",
  templateUrl: "./courses.component.html",
  styleUrls: ["./courses.component.scss"],
})
export class CoursesComponent implements OnInit {
  courseList$!: Observable<Course[]>;
  coursesIsEditable$!: Observable<boolean>;

  constructor(
    private router: Router,
    private coursesStoreService: CoursesStoreService,
    private userStoreService: UserStoreService
  ) {}

  ngOnInit(): void {
    this.coursesStoreService.getAll();
    this.userStoreService.getAll();
    this.courseList$ = this.coursesStoreService.courses$;
    this.coursesIsEditable$ = this.userStoreService.isAdmin$;
  }

  onAddCourse() {
    this.router.navigate(["/courses", "add"]);
  }

  onSearchCourses(searchValue: string) {
    const searchBody: CoursesSearchBody = {
      title: [searchValue],
    };
    this.coursesStoreService.searchCourses(searchBody);
  }
}
