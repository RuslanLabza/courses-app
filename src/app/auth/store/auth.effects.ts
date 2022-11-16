import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, of } from "rxjs";
import { LoginResponse } from "src/app/shared/types/loginServiceRequestsResponses";
import { AuthService } from "../services/auth.service";
import {
  requestLogin,
  requestLoginFail,
  requestLoginSuccess,
} from "./auth.actions";
import { AuthState } from "./auth.reducer";

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(requestLogin),
      exhaustMap(({ email, password }) =>
        this.authService.login({ email, password }).pipe(
          map((loginResponse) => {
            const authState: AuthState = {
              isAuthorized: (<LoginResponse>loginResponse).result,
              token: (<LoginResponse>loginResponse).result,
              errorMessage: "",
            };

            return requestLoginSuccess({ auth: authState });
          }),
          catchError((error) =>
            of(
              requestLoginFail({
                auth: {
                  isAuthorized: null,
                  token: "",
                  errorMessage: error,
                },
              })
            )
          )
        )
      )
    )
  );

  constructor(private actions$: Actions, private authService: AuthService) {}
}
