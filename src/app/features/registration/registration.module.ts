import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RegistrationComponent } from "./registration.component";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [RegistrationComponent],
  imports: [CommonModule, ReactiveFormsModule, SharedModule],
  exports: [RegistrationComponent],
})
export class RegistrationModule {}
