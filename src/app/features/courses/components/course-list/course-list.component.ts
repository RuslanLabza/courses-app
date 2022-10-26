import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { faPencil, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Course } from "../course-card/course-card.component";

@Component({
  selector: "app-course-list",
  templateUrl: "./course-list.component.html",
  styleUrls: ["./course-list.component.scss"],
})
export class CourseListComponent implements OnInit {
  buttonTextCard = "show course";
  iconRemoveCard = faTrashCan;
  iconEditCard = faPencil;

  @Input() courses!: Course[];
  @Input() coursesIsEditable!: boolean;
  @Output() showCourse = new EventEmitter<Course>();
  @Output() deleteCourse = new EventEmitter<Course>();
  @Output() editCourse = new EventEmitter<Course>();

  constructor() {}

  ngOnInit(): void {}
}
