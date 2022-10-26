import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CoursesComponent } from "./courses.component";
import { SharedModule } from "src/app/shared/shared.module";
import { CourseModule } from "../course/course.module";
import { CourseCardComponent } from './components/course-card/course-card.component';
import { CourseListComponent } from './components/course-list/course-list.component';

@NgModule({
  declarations: [CoursesComponent, CourseCardComponent, CourseListComponent],
  imports: [CommonModule, CourseModule, SharedModule],
  exports: [CoursesComponent],
})
export class CoursesModule {}
