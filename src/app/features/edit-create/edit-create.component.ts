import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BehaviorSubject, Subscription } from "rxjs";
import { AuthorsStoreService } from "src/app/services/authors-store.service";
import { CoursesStoreService } from "src/app/services/courses-store.service";
import { Author } from "src/app/shared/types/author";
import { Course } from "src/app/shared/types/course";
import { mapAuthorsIdsToObject } from "src/app/shared/utils/map-authors-id-to-names";

export enum EditCreateState {
  edit = "edit",
  create = "create",
}

@Component({
  selector: "app-edit-create",
  templateUrl: "./edit-create.component.html",
  styleUrls: ["./edit-create.component.scss"],
})
export class EditCreateComponent implements OnInit, OnDestroy {
  authorsSubs?: Subscription;
  private course$$ = new BehaviorSubject<{
    state: EditCreateState;
    course: Course | null;
  } | null>(null);
  public course$ = this.course$$.asObservable();

  constructor(
    private route: ActivatedRoute,
    private coursesStoreService: CoursesStoreService,
    private authorsStoreService: AuthorsStoreService
  ) {}

  ngOnInit(): void {
    this.authorsStoreService.getAll();
    this.route.params.subscribe((params) => {
      if (params["id"]) {
        this.coursesStoreService.getCourse(params["id"]).subscribe((course) => {
          this.authorsSubs = this.authorsStoreService.authors$.subscribe(
            (authors: Author[]) => {
              this.course$$.next({
                state: EditCreateState.edit,
                course: {
                  ...(<Course>course),
                  authors: mapAuthorsIdsToObject(
                    authors,
                    (<Course>course).authors
                  ),
                },
              });
            }
          );
        });
      } else {
        this.course$$.next({
          state: EditCreateState.create,
          course: {
            id: "",
            title: "",
            description: "",
            creationDate: "",
            duration: 0,
            authors: [],
          },
        });
      }
    });
  }

  ngOnDestroy(): void {
    this.authorsSubs?.unsubscribe();
  }
}
