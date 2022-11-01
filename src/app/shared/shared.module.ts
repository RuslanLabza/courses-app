import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./components/header/header.component";
import { ButtonComponent } from "./components/button/button.component";
import { InfoComponent } from "./components/info/info.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { EmailValidatorDirective } from "./directives/email-validator.directive";
import { DurationPipe } from "./pipes/duration.pipe";
import { CreationDatePipe } from "./pipes/creation-date.pipe";
import { SearchComponent } from "./components/search/search.component";
import { FormsModule } from "@angular/forms";

const COMPONENTS = [
  HeaderComponent,
  ButtonComponent,
  InfoComponent,
  SearchComponent,
  EmailValidatorDirective,
  DurationPipe,
  CreationDatePipe,
];

@NgModule({
  declarations: COMPONENTS,
  imports: [CommonModule, FormsModule, FontAwesomeModule],
  exports: COMPONENTS,
})
export class SharedModule {}
