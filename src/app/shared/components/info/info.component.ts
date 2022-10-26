import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-info",
  templateUrl: "./info.component.html",
  styleUrls: ["./info.component.scss"],
})
export class InfoComponent implements OnInit {
  @Input() title = "";
  @Input() text?: string;

  constructor() {}

  ngOnInit(): void {}
}
