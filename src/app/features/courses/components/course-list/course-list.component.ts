import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { faPencil, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Subscription } from "rxjs";
import { AuthorsStoreService } from "src/app/services/authors-store.service";
import { CoursesStoreService } from "src/app/services/courses-store.service";
import { Author } from "src/app/shared/types/author";
import { Course } from "src/app/shared/types/course";
import { mapAuthorsIdsToObject } from "src/app/shared/utils/map-authors-id-to-names";

@Component({
  selector: "app-course-list",
  templateUrl: "./course-list.component.html",
  styleUrls: ["./course-list.component.scss"],
})
export class CourseListComponent implements OnInit, OnDestroy {
  buttonTextCard = "show course";
  iconRemoveCard = faTrashCan;
  iconEditCard = faPencil;

  authorsSubs!: Subscription;

  @Input() courses!: Course[] | null;
  @Input() coursesIsEditable!: boolean | null;

  constructor(
    private authorsStoreService: AuthorsStoreService,
    private coursesStoreService: CoursesStoreService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authorsStoreService.getAll();
    this.authorsSubs = this.authorsStoreService.authors$.subscribe(
      (authors: Author[]) => {
        this.courses = <Course[]>this.courses?.map((course: Course) => {
          return {
            ...course,
            authors: mapAuthorsIdsToObject(authors, course.authors),
          };
        });
      }
    );
  }

  onRemoveCourse(courseId?: string) {
    if (window.confirm("Do you want to remove this course?")) {
      this.coursesStoreService.deleteCourse(<string>courseId);
    }
  }

  onEditCourse(courseId?: string) {
    this.router.navigate(["/courses", "edit", <string>courseId]);
  }

  onShowCourse(courseId?: string) {
    this.router.navigate(["/courses", courseId]);
  }

  ngOnDestroy() {
    this.authorsSubs.unsubscribe();
  }
}
