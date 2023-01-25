import axios from "axios";
import { BaseURL } from "../constants";

export class ServicesClass {
  service: any;
  constructor(parameters?: any) {
    this.service = axios.create({
      baseURL: BaseURL,
      timeout: 3000,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin ": "http://13.38.72.158/:3000",
      },
    });
    this.service.interceptors.response.use(
      this.handleSuccess,
      this.handleError
    );
  }

  handleSuccess(response: any) {
    return response;
  }

  handleError(error: any) {
    switch (error.response.status) {
      case 401:
        break;

      // break;
      case 403:
        break;
      case 404:
        // Not found
        //this.redirectTo('/404');
        break;
      default:
        // Internal server error
        // this.redirectTo("/500");

        break;
    }
    return Promise.reject(error);
  }

  post(...args: any) {
    return this.service.post(...args);
  }
}
