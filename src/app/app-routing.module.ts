import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthorizedGuard } from "./auth/guards/authorized.guard";
import { NotAuthorizedGuard } from "./auth/guards/not-authorized.guard";
import { AdminGuard } from "./user/guards/admin.guard";

const routes: Routes = [
  {
    path: "login",
    loadChildren: () =>
      import("./features/login/login.module").then((m) => m.LoginModule),
    canActivate: [NotAuthorizedGuard],
  },
  {
    path: "registration",
    loadChildren: () =>
      import("./features/registration/registration.module").then(
        (m) => m.RegistrationModule
      ),
    canActivate: [NotAuthorizedGuard],
  },
  {
    path: "courses",
    loadChildren: () =>
      import("./features/courses/courses.module").then((m) => m.CoursesModule),
    pathMatch: "full",
    canLoad: [AuthorizedGuard],
  },
  {
    path: "courses/add",
    loadChildren: () =>
      import("./features/edit-create/edit-create.module").then(
        (m) => m.EditCreateModule
      ),
    canLoad: [AuthorizedGuard],
    canActivate: [AdminGuard],
  },
  {
    path: "courses/edit/:id",
    loadChildren: () =>
      import("./features/edit-create/edit-create.module").then(
        (m) => m.EditCreateModule
      ),
    canLoad: [AuthorizedGuard],
    canActivate: [AdminGuard],
  },
  {
    path: "courses/:id",
    loadChildren: () =>
      import("./features/course/course.module").then((m) => m.CourseModule),
    canLoad: [AuthorizedGuard],
  },
  {
    path: "",
    redirectTo: "/courses",
    pathMatch: "full",
  },
  {
    path: "**",
    redirectTo: "/courses",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
