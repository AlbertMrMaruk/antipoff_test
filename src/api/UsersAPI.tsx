import { SignInData, SignUpData, UpdateUserData } from "./UsersAPI.types";
const API_URL = "https://reqres.in";

class UsersAPI {
  signInUser(data: SignInData): Promise<Response> {
    return fetch(`${API_URL}/api/login`, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }
  signUpUser(data: SignUpData): Promise<Response> {
    return fetch(`${API_URL}/api/register`, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }
  getUsers(page: number = 1) {
    return fetch(`${API_URL}/api/users?page=${page}`);
  }
  getUser(id: number) {
    return fetch(`${API_URL}/api/users/${id}`);
  }
  updateUser(id: number, data: UpdateUserData) {
    return fetch(`${API_URL}/api/users/${id}`, {
      method: "put",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }
}

const UsersAPIInstance = new UsersAPI();
export default UsersAPIInstance;
