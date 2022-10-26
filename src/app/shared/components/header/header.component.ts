import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  logoUrl$ = "https://d17btkcdsmqrmh.cloudfront.net/logo.svg";
  constructor() {}

  ngOnInit(): void {}
}
