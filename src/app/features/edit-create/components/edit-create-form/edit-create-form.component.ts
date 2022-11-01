import { Component, OnInit } from "@angular/core";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { authorNameValidator } from "src/app/shared/utils/author-name-validator";

@Component({
  selector: "app-edit-create-form",
  templateUrl: "./edit-create-form.component.html",
  styleUrls: [
    "../../../../shared/styles/form.scss",
    "./edit-create-form.component.scss",
  ],
})
export class EditCreateFormComponent implements OnInit {
  editCreateForm!: FormGroup;
  newAuthorIsSubmitted = false;
  buttonTextCreateAuthor = "create author";
  buttonTextCancel = "cancel";
  buttonTextCreate = "create course";

  constructor() {}

  ngOnInit(): void {
    this.editCreateForm = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      newAuthor: new FormGroup({
        name: new FormControl(null, [authorNameValidator()]),
      }),
      authors: new FormArray([
        new FormControl("Author One"),
        new FormControl("Author Two"),
      ]),
      duration: new FormControl(null, [Validators.required, Validators.min(0)]),
    });
  }

  get title() {
    return this.editCreateForm.get("title");
  }

  get description() {
    return this.editCreateForm.get("description");
  }

  get authorName() {
    return this.editCreateForm.get("newAuthor.name");
  }

  get authors() {
    return this.editCreateForm.get("authors") as FormArray;
  }

  get duration() {
    return this.editCreateForm.get("duration");
  }

  onSubmit() {
    console.log("onSubmit", this.editCreateForm.value);
  }

  onNewAuthorSubmit() {
    this.authors.push(new FormControl(this.authorName?.value));
    this.newAuthorIsSubmitted = true;
  }

  onRemoveAuthor(index: number) {
    this.authors.removeAt(index);
  }

  calculateWidth(authorName: string) {
    return `${authorName.length * 7}px`;
  }
}
