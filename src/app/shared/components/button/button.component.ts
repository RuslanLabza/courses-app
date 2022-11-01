import { Component, Input, OnInit } from "@angular/core";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss"],
})
export class ButtonComponent implements OnInit {
  @Input("type") buttonType?: string;
  @Input() buttonText?: string;
  @Input() iconName?: IconProp;

  constructor() {}

  ngOnInit(): void {}
}
