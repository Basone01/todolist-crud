import HTTP from "libs/http";
import { SERVER_URL } from "config/config";
import { ToDoListFeature } from "./types";
import AuthService from "features/auth/authService";

type ITodoResponse = {
  _id: string;
  title: string;
  description: string;
  user_id: string;
  createdAt: string;
  updatedAt: string;
};

export default class TodoService {
  authService: AuthService;
  http: HTTP;
  constructor(authService: AuthService, http: HTTP = new HTTP()) {
    this.authService = authService;
    this.http = http;
    this.http.setBaseUrl(`${SERVER_URL}/todos`);
  }

  getHeaders() {
    return {
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.authService.token}`,
    };
  }

  async getAll() {
    return this.http.get<ITodoResponse[]>("/", {
      headers: this.getHeaders(),
    });
  }

  async getById(_id: string) {
    return this.http.get<ITodoResponse>(`/${_id}`, {
      headers: this.getHeaders(),
    });
  }

  async create(todo: ToDoListFeature.ITodoForm) {
    return this.http.post<ITodoResponse>("/", todo, {
      headers: this.getHeaders(),
    });
  }

  async update(_id: string, todo: ToDoListFeature.ITodoForm) {
    return this.http.put<ToDoListFeature.ITodo>(`/${_id}`, todo, {
      headers: this.getHeaders(),
    });
  }

  async delete(_id: string) {
    return this.http.delete(`/${_id}`, {
      headers: this.getHeaders(),
    });
  }
}
