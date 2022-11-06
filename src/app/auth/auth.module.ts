import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { TokenInterceptorService } from "./interceptors/token.interceptor";

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    { provide: Window, useValue: window },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
})
export class AuthModule {}
