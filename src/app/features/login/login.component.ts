import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/auth/services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["../../shared/styles/form.scss", "./login.component.scss"],
})
export class LoginComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    this.auth
      .login({ email: form.value.email, password: form.value.password })
      .subscribe(() => {
        this.router.navigate(["/courses"]);
      });
  }
}
