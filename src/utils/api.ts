import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_NESTJS_BACKEND_URL || "http://localhost:3500/";

export const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use((config) => {
  return config;
});