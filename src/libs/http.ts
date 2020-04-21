import axios, { AxiosRequestConfig } from "axios";

export type IHttpConfig = AxiosRequestConfig;

export default class HTTP {
  baseUrl: string;

  constructor(baseUrl: string = "") {
    this.baseUrl = baseUrl;
  }

  setBaseUrl(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async get<T = {}>(url: string, config?: IHttpConfig) {
    return axios
      .get<T>(`${this.baseUrl}${url}`, config)
      .then((res) => res.data)
      .catch((error) => {
        if (error.response) {
          throw error.response;
        }
        throw error;
      });
  }

  async post<T = {}>(url: string, body?: object, config?: IHttpConfig) {
    return axios
      .post<T>(`${this.baseUrl}${url}`, body, config)
      .then((res) => res.data)
      .catch((error) => {
        if (error.response) {
          throw error.response;
        }
        throw error;
      });
  }

  async put<T = {}>(url: string, body?: object, config?: IHttpConfig) {
    return axios
      .put<T>(`${this.baseUrl}${url}`, body, config)
      .then((res) => res.data)
      .catch((error) => {
        if (error.response) {
          throw error.response;
        }
        throw error;
      });
  }

  async delete<T = {}>(url: string, config?: IHttpConfig) {
    return axios
      .delete<T>(`${this.baseUrl}${url}`, config)
      .then((res) => res.data)
      .catch((error) => {
        if (error.response) {
          throw error.response;
        }
        throw error;
      });
  }
}
