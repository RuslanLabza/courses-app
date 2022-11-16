import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { requestCurrentUser } from "./user.actions";
import { UserState } from "./user.reducer";
import { getName, isAdmin } from "./user.selectors";

@Injectable({ providedIn: "root" })
export class UserStateFacade {
  public name$ = this.store.select(getName);
  public isAdmin$ = this.store.select(isAdmin);

  constructor(private store: Store<{ user: UserState }>) {}

  getCurrentUser(): void {
    this.store.dispatch(requestCurrentUser());
  }
}
