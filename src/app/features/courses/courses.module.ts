import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CoursesComponent } from "./courses.component";
import { SharedModule } from "src/app/shared/shared.module";
import { CourseCardComponent } from "./components/course-card/course-card.component";
import { CourseListComponent } from "./components/course-list/course-list.component";
import { CoursesRoutingModule } from "./courses-routing.module";

@NgModule({
  declarations: [CoursesComponent, CourseCardComponent, CourseListComponent],
  imports: [CommonModule, CoursesRoutingModule, SharedModule],
})
export class CoursesModule {}
