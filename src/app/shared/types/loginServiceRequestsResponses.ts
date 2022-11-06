export interface LoginResponse {
  successful: boolean;
  result: string;
  user: {
    email: string;
    name: string;
  };
}
