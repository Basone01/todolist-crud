import HTTP from "libs/http";
import { SERVER_URL } from "config/config";

export default class AuthService {
  http: HTTP;
  token?: string;

  constructor(http: HTTP = new HTTP()) {
    this.http = http;
    this.http.setBaseUrl(`${SERVER_URL}/users/auth`);
  }

  getPersistedToken() {
    const token = localStorage.getItem("token");
    if (token) {
      this.token = token;
    }
  }
  clearToken() {
    localStorage.removeItem("token");
    this.token = undefined;
  }

  setToken(token: string) {
    this.token = token;
    localStorage.setItem("token", token);
  }

  async auth(username: string, password: string) {
    const response = await this.http.post<{ token: string }>("/", {
      username,
      password,
    });
    this.setToken(response.token);
    return response;
  }
}
