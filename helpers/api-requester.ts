import axios from "axios";

export const apiRequester = axios.create({
  baseURL: "http://localhost:3333",
});
