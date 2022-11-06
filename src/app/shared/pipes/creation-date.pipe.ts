import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "creationDate",
})
export class CreationDatePipe implements PipeTransform {
  transform(creationDate: string): string {
    return creationDate
      .split("/")
      .map((num: string) => {
        return +num < 10 ? "0" + +num : +num;
      })
      .join(".");
  }
}
