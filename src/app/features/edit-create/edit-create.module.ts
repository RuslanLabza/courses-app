import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EditCreateComponent } from "./edit-create.component";
import { EditCreateFormComponent } from "./components/edit-create-form/edit-create-form.component";
import { SharedModule } from "src/app/shared/shared.module";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [EditCreateComponent, EditCreateFormComponent],
  imports: [CommonModule, ReactiveFormsModule, SharedModule],
  exports: [EditCreateComponent],
})
export class EditCreateModule {}
