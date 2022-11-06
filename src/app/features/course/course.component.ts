import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CoursesStoreService } from "src/app/services/courses-store.service";
import { Course } from "src/app/shared/types/course";

@Component({
  selector: "app-course",
  templateUrl: "./course.component.html",
  styleUrls: ["./course.component.scss"],
})
export class CourseComponent implements OnInit {
  course!: Course;
  constructor(
    private route: ActivatedRoute,
    private coursesStoreService: CoursesStoreService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.coursesStoreService.getCourse(params["id"]).subscribe((course) => {
        this.course = course;
      });
    });
  }

  onShowCourses() {
    this.router.navigate(["/courses"]);
  }
}
