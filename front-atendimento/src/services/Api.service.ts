import axios from "axios";

const BASE_URL_HTTPS = process.env.API_URL_HTTPS;
const BASE_URL_HTTP = process.env.API_URL_HTTP;

export const ApiHttps = axios.create({
  baseURL: BASE_URL_HTTPS,
});

export const ApiHttp = axios.create({
  baseURL: BASE_URL_HTTP,
});
