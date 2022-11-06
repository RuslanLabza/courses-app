import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login.component";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";
import { LoginRoutingModule } from "./login-routing.module";

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, FormsModule, LoginRoutingModule, SharedModule],
  exports: [LoginComponent],
})
export class LoginModule {}
