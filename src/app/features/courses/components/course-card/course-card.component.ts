import { Component, Input, OnInit } from "@angular/core";
import { Author } from "src/app/shared/types/author";
import { Course } from "src/app/shared/types/course";

@Component({
  selector: "app-course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.scss"],
})
export class CourseCardComponent implements OnInit {
  @Input() course!: Course;
  @Input() courseIsEditable!: boolean | null;

  title!: string;
  description!: string;
  creationDate!: string;
  duration!: number;
  authors!: string;

  constructor() {}

  ngOnInit(): void {
    this.title = this.course.title;
    this.description = this.course.description;
    this.creationDate = this.course.creationDate!;
    this.duration = this.course.duration;
    this.authors = this.course.authors
      .map((author: string | Author) => (<Author>author).name)
      .join(", ");
  }
}
