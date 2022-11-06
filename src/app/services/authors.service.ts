import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthorsService {
  private host = "http://localhost:4000/";

  constructor(private httpClient: HttpClient) {}

  getAll() {
    const url = this.host + "authors/all";

    return this.httpClient.get(url);
  }

  addAuthor(name: string) {
    const url = this.host + "authors/add";

    //user should be Admin in order to make call
    return this.httpClient.post(url, { name });
  }

  deleteAuthor(id: string) {
    const url = this.host + `authors/${id}`;

    //user should be Admin in order to make call
    return this.httpClient.delete(url);
  }
}
