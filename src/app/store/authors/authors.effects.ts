import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, of } from "rxjs";
import { AuthorsService } from "src/app/services/authors.service";
import {
  AddAuthorResponse,
  AuthorsResponse,
} from "src/app/shared/types/authorsServiceRequestsResponses";
import {
  requestAddAuthor,
  requestAddAuthorSuccess,
  requestAuthors,
  requestAuthorsFail,
  requestAuthorsSuccess,
} from "./authors.actions";

@Injectable()
export class AuthorsEffects {
  getAuthors$ = createEffect(() =>
    this.actions$.pipe(
      ofType(requestAuthors),
      exhaustMap(() =>
        this.authorsService.getAll().pipe(
          map((authorsResponse) =>
            requestAuthorsSuccess({
              authors: (<AuthorsResponse>authorsResponse).result,
            })
          ),
          catchError(() => of(requestAuthorsFail()))
        )
      )
    )
  );

  addAuthor$ = createEffect(() =>
    this.actions$.pipe(
      ofType(requestAddAuthor),
      exhaustMap(({ name }) =>
        this.authorsService.addAuthor(name).pipe(
          map((addAuthorResponse) => {
            return requestAddAuthorSuccess({
              author: (<AddAuthorResponse>addAuthorResponse).result,
            });
          }),
          catchError(() => of(requestAuthorsFail()))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private authorsService: AuthorsService
  ) {}
}
