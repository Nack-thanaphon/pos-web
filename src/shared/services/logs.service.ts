import { api } from "@/utils/api";

interface LoginFormData {
  username: string;
  image: string;
  email: string;
}

class LogsService {
  static getall = async (page: number, limit: number, filter: string) => {
    const response = await api.get("logs/getAll", {
      params: { page, limit, filter }
    });
    return response.data;
  };
}

export { LogsService };