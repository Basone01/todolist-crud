import HTTP from "libs/http";
import { SERVER_URL } from "config/config";
import { ToDoListFeature } from "./types";

type ITodoResponse = {
  _id: string;
  title: string;
  description: string;
  user_id: string;
  createdAt: string;
  updatedAt: string;
};

export default class TodoService {
  http: HTTP;
  token: string;
  constructor(token: string, http: HTTP = new HTTP(`${SERVER_URL}/todos`)) {
    this.token = token;
    this.http = http;
  }

  setToken(token: string) {
    this.token = token;
  }

  getHeaders() {
    return {
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.token}`,
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

  async create(todo: ToDoListFeature.ITodo) {
    return this.http.post<ITodoResponse>("/", todo, {
      headers: this.getHeaders(),
    });
  }

  async update(_id: string, todo: ToDoListFeature.ITodo) {
    return this.http.put(`/${_id}`, todo, {
      headers: this.getHeaders(),
    });
  }
}
