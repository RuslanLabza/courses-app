export interface UserGetResponse {
  successful: boolean;
  result: {
    name: string;
    email: string;
    password: string;
    role: UserRoles;
    id: string;
  };
}

export enum UserRoles {
  admin = "admin",
  user = "user",
}
