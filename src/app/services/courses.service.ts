import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Course } from "../shared/types/course";
import { CoursesSearchBody } from "../shared/types/coursesServiceRequestsResponses";

@Injectable({
  providedIn: "root",
})
export class CoursesService {
  private host = "http://localhost:4000/";

  constructor(private httpClient: HttpClient) {}

  getAll() {
    const url = this.host + "courses/all";

    return this.httpClient.get(url);
  }

  createCourse(course: Course) {
    const url = this.host + "courses/add";

    //user should be Admin in order to make call
    return this.httpClient.post(url, course);
  }

  editCourse(id: string, course: Course) {
    const url = this.host + `courses/${id}`;

    //user should be Admin in order to make call
    return this.httpClient.put(url, course);
  }

  getCourse(id: string) {
    const url = this.host + `courses/${id}`;

    return this.httpClient.get(url);
  }

  deleteCourse(id: string) {
    const url = this.host + `courses/${id}`;

    //user should be Admin in order to make call
    return this.httpClient.delete(url);
  }

  searchCourses(searchBody: CoursesSearchBody) {
    const url = this.host + `courses/filter`;
    let queryParams = new HttpParams();
    const searchBodyEdited = {
      duration: searchBody.duration?.join() || undefined,
      creationDate: searchBody.creationDate?.join() || undefined,
      description: searchBody.description?.join() || undefined,
      title: searchBody.title?.join() || undefined,
    };

    for (const [key, value] of Object.entries(searchBodyEdited)) {
      if (value) {
        queryParams = queryParams.append(key, value);
      }
    }

    return this.httpClient.get(url, { params: queryParams });
  }
}
