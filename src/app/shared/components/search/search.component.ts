import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["../../styles/form.scss", "./search.component.scss"],
})
export class SearchComponent implements OnInit {
  buttonTextSearch = "search";

  @Input() inputPlaceholder?: string;
  @Output() userSearch = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    this.userSearch.emit(form.value);
  }
}
