import { Component, Input, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { UserStoreService } from "src/app/user/services/user-store.service";

@Component({
  selector: "app-info",
  templateUrl: "./info.component.html",
  styleUrls: ["./info.component.scss"],
})
export class InfoComponent implements OnInit {
  @Input() title = "";
  @Input() text?: string;
  isAdmin$!: Observable<boolean | null>;

  constructor(private userStoreService: UserStoreService) {}

  ngOnInit(): void {
    this.isAdmin$ = this.userStoreService.isAdmin$;
  }
}
