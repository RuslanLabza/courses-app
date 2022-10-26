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
  duration!: string;
  authors!: string;

  constructor() {}

  ngOnInit(): void {
    this.title = this.course.title;
    this.description = this.course.description;
    this.creationDate = this.pipeDate(this.course.creationDate);
    this.duration = this.pipeDuration(this.course.duration);
    this.authors = this.course.authors.join(", ");
  }

  pipeDate(creationDate: string): string {
    return creationDate
      .split("/")
      .map((num: string) => {
        return +num < 10 ? "0" + num : num;
      })
      .join(".");
  }

  pipeDuration(duration: number): string {
    const MINUTES_IN_HOUR = 60;
    const hours = Math.floor(duration / MINUTES_IN_HOUR);
    const minutes = duration % MINUTES_IN_HOUR;

    return `${hours < 10 ? "0" + hours : hours}:${
      minutes < 10 ? "0" + minutes : minutes
    } hours`;
  }
}
