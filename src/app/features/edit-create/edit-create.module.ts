import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EditCreateComponent } from "./edit-create.component";
import { EditCreateFormComponent } from "./components/edit-create-form/edit-create-form.component";
import { SharedModule } from "src/app/shared/shared.module";
import { ReactiveFormsModule } from "@angular/forms";
import { EditCreateRoutingModule } from "./edit-create-routing.module";

@NgModule({
  declarations: [EditCreateComponent, EditCreateFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EditCreateRoutingModule,
    SharedModule,
  ],
  exports: [EditCreateComponent],
})
export class EditCreateModule {}
