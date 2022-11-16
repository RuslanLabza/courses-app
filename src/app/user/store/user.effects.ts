import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, exhaustMap, map } from "rxjs/operators";
import {
  UserGetResponse,
  UserRoles,
} from "src/app/shared/types/userServiceRequestsResponses";
import { UserService } from "../services/user.service";
import {
  requestCurrentUser,
  requestCurrentUserFail,
  requestCurrentUserSuccess,
} from "./user.actions";
import { UserState } from "./user.reducer";

@Injectable()
export class UserEffects {
  getCurrentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(requestCurrentUser),
      exhaustMap(() =>
        this.userService.getUser().pipe(
          map((userResponse) => {
            const userState: UserState = {
              name: (<UserGetResponse>userResponse).result.name,
              isAdmin:
                (<UserGetResponse>userResponse).result.role === UserRoles.admin,
            };

            return requestCurrentUserSuccess({ user: userState });
          }),
          catchError(() => of(requestCurrentUserFail()))
        )
      )
    )
  );

  constructor(private actions$: Actions, private userService: UserService) {}
}
