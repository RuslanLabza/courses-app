import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { emailValidator } from "src/app/shared/utils/email-validator";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["../../shared/styles/form.scss", "./registration.component.scss"],
})
export class RegistrationComponent implements OnInit {
  registrationForm!: FormGroup;
  buttonTextRegistration = "login";

  constructor() {}

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
      email: new FormControl(null, [Validators.required, emailValidator()]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  get name() {
    return this.registrationForm.get("name");
  }
  get email() {
    return this.registrationForm.get("email");
  }
  get password() {
    return this.registrationForm.get("password");
  }

  onSubmit() {
    console.log(this.registrationForm);
  }
}
