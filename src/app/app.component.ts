import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth/services/auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  isAuthorized$!: Observable<string | null>;
  name$!: Observable<string | null>;

  constructor(private router: Router, private auth: AuthService) {}

  ngOnInit(): void {
    this.name$ = this.auth.name$;
    this.isAuthorized$ = this.auth.isAuthorized$;
  }

  logout() {
    this.auth.logout().subscribe(() => {
      this.router.navigate(["/login"]);
    });
  }
}
