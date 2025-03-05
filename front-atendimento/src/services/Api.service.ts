import axios from "axios";

enum Urls {
  BASE_URL_HTTPS = "https://fakestoreapi.com/",
  BASE_URL_HTTP = "http://localhost:8080/",
}

export const ApiHttps = axios.create({
  baseURL: Urls.BASE_URL_HTTPS,
});

export const ApiHttp = axios.create({
  baseURL: Urls.BASE_URL_HTTP,
});
