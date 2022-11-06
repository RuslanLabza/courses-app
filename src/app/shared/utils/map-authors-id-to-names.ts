import { Author } from "../types/author";

export function mapAuthorsIdsToObject(
  authorsList: Author[],
  courseAuthorsArr: Array<string | Author>
) {
  return courseAuthorsArr.map((courseAuthorId: string | Author) => {
    return authorsList[
      authorsList.findIndex((author) => author.id === courseAuthorId)
    ];
  });
}
