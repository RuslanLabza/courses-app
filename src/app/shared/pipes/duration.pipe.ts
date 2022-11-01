import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "duration",
})
export class DurationPipe implements PipeTransform {
  transform(duration: number): string {
    const MINUTES_IN_HOUR = 60;
    const hours = Math.floor(duration / MINUTES_IN_HOUR);
    const minutes = duration % MINUTES_IN_HOUR;

    return `${hours < 10 ? "0" + hours : hours}:${
      minutes < 10 ? "0" + minutes : minutes
    }`;
  }
}
