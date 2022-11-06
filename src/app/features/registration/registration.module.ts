import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RegistrationComponent } from "./registration.component";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";
import { RegistrationRoutingModule } from "./registration-routing.module";

@NgModule({
  declarations: [RegistrationComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RegistrationRoutingModule,
    SharedModule,
  ],
  exports: [RegistrationComponent],
})
export class RegistrationModule {}
