import { Injectable } from "@angular/core";
import { BehaviorSubject, tap } from "rxjs";
import { Author } from "../shared/types/author";
import {
  AddAuthorResponse,
  AuthorDeleteResponse,
  AuthorsResponse,
} from "../shared/types/authorsServiceRequestsResponses";
import { AuthorsService } from "./authors.service";

@Injectable({
  providedIn: "root",
})
export class AuthorsStoreService {
  private isLoading$$ = new BehaviorSubject<boolean>(false);
  private authors$$ = new BehaviorSubject<Author[]>([]);
  public isLoading$ = this.isLoading$$.asObservable();
  public authors$ = this.authors$$.asObservable();

  constructor(private authorsService: AuthorsService) {}

  getAll() {
    this.isLoading$$.next(true);
    this.authorsService.getAll().subscribe((res) => {
      if ((<AuthorsResponse>res).successful) {
        this.authors$$.next((<AuthorsResponse>res).result);
        this.isLoading$$.next(false);
      }
    });
  }

  addAuthor(name: string) {
    this.isLoading$$.next(true);
    return this.authorsService.addAuthor(name).pipe(
      tap((res) => {
        if ((<AddAuthorResponse>res).successful) {
          this.getAll();
        }
      })
    );
  }

  deleteAuthor(id: string) {
    this.isLoading$$.next(true);
    return this.authorsService.deleteAuthor(id).pipe(
      tap((res) => {
        if ((<AuthorDeleteResponse>res).successful) {
          this.getAll();
        }
      })
    );
  }
}
