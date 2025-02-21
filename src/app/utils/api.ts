// utils/api.ts
import axios from "axios";
import { useAuthStore } from "../store/auth.store";

const API_URL = process.env.NEXT_PUBLIC_NESTJS_BACKEND_URL || "http://localhost:3000";

export const api = axios.create({
  baseURL: API_URL
});

api.interceptors.request.use((config) => {
  const { accessToken } = useAuthStore.getState();
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});
