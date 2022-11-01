import { Component, Input, OnInit } from "@angular/core";

export interface Course {
  id: string;
  title: string;
  description: string;
  creationDate: string;
  duration: number;
  authors: string[];
}

@Component({
  selector: "app-course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.scss"],
})
export class CourseCardComponent implements OnInit {
  @Input() course!: Course;
  @Input() courseIsEditable!: boolean;

  title!: string;
  description!: string;
  creationDate!: string;
  duration!: number;
  authors!: string;

  constructor() {}

  ngOnInit(): void {
    this.title = this.course.title;
    this.description = this.course.description;
    this.creationDate = this.course.creationDate;
    this.duration = this.course.duration;
    this.authors = this.course.authors.join(", ");
  }
}
