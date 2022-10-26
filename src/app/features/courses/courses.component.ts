import { Component, OnInit } from "@angular/core";
import { Course } from "./components/course-card/course-card.component";

@Component({
  selector: "app-courses",
  templateUrl: "./courses.component.html",
  styleUrls: ["./courses.component.scss"],
})
export class CoursesComponent implements OnInit {
  buttonTextHeader = "logout";
  buttonTextInfo = "add new course";
  titleInfo = "your list is empty";
  textInfo = "Please use 'Add New Course' button to add your first course";

  mockedCourseList: Course[] = [
    {
      id: "de5aaa59-90f5-4dbc-b8a9-aaf205c551ba",
      title: "JavaScript",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
                      has been the industry's standard dummy text ever since the 1500s, when an unknown 
                      printer took a galley of type and scrambled it to make a type specimen book. It has survived 
                      not only five centuries, but also the leap into electronic typesetting, remaining essentially u
                      nchanged.`,
      creationDate: "8/3/2021",
      duration: 160,
      authors: ["Vasiliy Dobkin", "Nicolas Kim"],
    },
    {
      id: "b5630fdd-7bf7-4d39-b75a-2b5906fd0916",
      title: "Angular",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
                      has been the industry's standard dummy text ever since the 1500s, when an unknown 
                      printer took a galley of type and scrambled it to make a type specimen book.`,
      creationDate: "10/11/2020",
      duration: 210,
      authors: ["Anna Sidorenko", "Valentina Larina"],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
