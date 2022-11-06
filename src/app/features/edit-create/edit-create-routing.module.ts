import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EditCreateComponent } from "./edit-create.component";

const editCreateRoutes: Routes = [{ path: "", component: EditCreateComponent }];

@NgModule({
  imports: [RouterModule.forChild(editCreateRoutes)],
  exports: [RouterModule],
})
export class EditCreateRoutingModule {}
