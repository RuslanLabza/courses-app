import { Inject, Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class SessionStorageService {
  constructor(@Inject(Window) private window: Window) {}

  setToken(token: string) {
    this.window.sessionStorage.setItem("_token", token);
  }

  getToken() {
    return this.window.sessionStorage.getItem("_token");
  }

  deleteToken() {
    this.window.sessionStorage.removeItem("_token");
  }
}
