import axios from "axios";

const baseURL = "https://quintal-tech-api.vercel.app";

const api = axios.create({
  baseURL,
});

export default api;
