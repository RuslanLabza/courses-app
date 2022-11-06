import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private host = "http://localhost:4000/";

  constructor(private httpClient: HttpClient) {}

  getUser() {
    const url = this.host + "users/me";

    return this.httpClient.get(url);
  }
}
