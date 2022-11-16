import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { requestAddAuthor, requestAuthors } from "./authors.actions";
import { AuthorsState } from "./authors.reducer";
import { getAddedAuthors, getAuthors } from "./authors.selectors";

@Injectable({ providedIn: "root" })
export class AuthorsStateFacade {
  public authors$ = this.store.select(getAuthors);
  public addedAuthor$ = this.store.select(getAddedAuthors);

  constructor(private store: Store<{ authors: AuthorsState }>) {}

  getAuthors(): void {
    this.store.dispatch(requestAuthors());
  }

  addAuthor(name: string): void {
    this.store.dispatch(requestAddAuthor({ name }));
  }
}
