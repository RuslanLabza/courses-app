import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import {
  UserGetResponse,
  UserRoles,
} from "src/app/shared/types/userServiceRequestsResponses";
import { UserService } from "./user.service";

@Injectable({
  providedIn: "root",
})
export class UserStoreService {
  private isAdmin$$ = new BehaviorSubject<boolean>(false);
  private name$$ = new BehaviorSubject<string | null>(null);
  public isAdmin$ = this.isAdmin$$.asObservable();
  public name$ = this.name$$.asObservable();

  constructor(private userService: UserService) {}

  getAll() {
    this.userService.getUser().subscribe((res) => {
      if ((<UserGetResponse>res).successful) {
        this.isAdmin$$.next(
          (<UserGetResponse>res).result.role === UserRoles.admin
        );
        this.name$$.next((<UserGetResponse>res).result.name);
      }
    });
  }
}
