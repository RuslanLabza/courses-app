import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { BehaviorSubject, Observable, Subscription } from "rxjs";
import { AuthorsStoreService } from "src/app/services/authors-store.service";
import { CoursesStoreService } from "src/app/services/courses-store.service";
import { Author } from "src/app/shared/types/author";
import { AddAuthorResponse } from "src/app/shared/types/authorsServiceRequestsResponses";
import { Course } from "src/app/shared/types/course";
import { authorNameValidator } from "src/app/shared/utils/author-name-validator";
import { EditCreateState } from "../../edit-create.component";

@Component({
  selector: "app-edit-create-form",
  templateUrl: "./edit-create-form.component.html",
  styleUrls: [
    "../../../../shared/styles/form.scss",
    "./edit-create-form.component.scss",
  ],
})
export class EditCreateFormComponent implements OnInit, OnDestroy {
  @Input() course!: {
    state: EditCreateState;
    course: Course | null;
  } | null;
  editCreateForm!: FormGroup;
  authors$$!: BehaviorSubject<(string | Author)[] | undefined>;
  authors$!: Observable<(string | Author)[] | undefined>;
  authorsSubs!: Subscription;
  newAuthorIsSubmitted = false;
  buttonTextCreateAuthor = "create author";
  buttonTextCancel = "cancel";
  buttonTextCreate = "create course";

  constructor(
    private coursesStoreService: CoursesStoreService,
    private authorsStoreService: AuthorsStoreService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authors$$ = new BehaviorSubject(this.course?.course?.authors);
    this.authors$ = this.authors$$.asObservable();

    this.editCreateForm = new FormGroup({
      title: new FormControl(this.course?.course?.title || null, [
        Validators.required,
      ]),
      description: new FormControl(this.course?.course?.description || null, [
        Validators.required,
      ]),
      newAuthor: new FormGroup({
        name: new FormControl(null, [authorNameValidator()]),
      }),
      authors: new FormArray([]),
      duration: new FormControl(this.course?.course?.duration || null, [
        Validators.required,
        Validators.min(0),
      ]),
    });

    this.authorsSubs = this.authors$$.subscribe((authors) => {
      this.authors.clear();
      authors?.forEach((author) =>
        this.authors.push(new FormControl((<Author>author).name))
      );
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
    const courseFormValues: Course = {
      title: this.editCreateForm.value.title,
      description: this.editCreateForm.value.description,
      duration: this.editCreateForm.value.duration,
      authors: this.authors$$.getValue()!.map((author) => (<Author>author).id),
    };

    if (this.course?.state === EditCreateState.edit) {
      this.coursesStoreService
        .editCourse(<string>this.course!.course!.id, courseFormValues)
        .subscribe(() => this.router.navigate(["/courses"]));
    }

    if (this.course?.state === EditCreateState.create) {
      this.coursesStoreService
        .createCourse(courseFormValues)
        .subscribe(() => this.router.navigate(["/courses"]));
    }
  }

  onNewAuthorSubmit() {
    this.authorsStoreService
      .addAuthor(this.authorName?.value)
      .subscribe((res) => {
        const newAuthorsArray = this.authors$$.getValue();
        newAuthorsArray?.push((<AddAuthorResponse>res).result);
        this.authors$$.next(newAuthorsArray);
        this.authorName?.patchValue(null);
        this.newAuthorIsSubmitted = true;
      });
  }

  onRemoveAuthor(index: number) {
    const newAuthorsArray = this.authors$$.getValue();
    this.authorsStoreService
      .deleteAuthor((<Author[]>newAuthorsArray)[index].id)
      .subscribe(() => {
        newAuthorsArray?.splice(index, 1);
        this.authors$$.next(newAuthorsArray);
      });
    this.authors.removeAt(index);
  }

  calculateWidth(authorName: string) {
    return `${authorName.length * 7}px`;
  }

  ngOnDestroy(): void {
    this.authorsSubs.unsubscribe();
  }
}
