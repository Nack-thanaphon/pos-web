import { api } from "@/utils/api";

interface LoginFormData {
  username: string;
  image: string;
  email: string;
}

class AuthService {
  static login = async (formData: LoginFormData) => {
    try {
      const response = await api.post("users/login", formData);
      return response.data;
    } catch (error) {
      console.error('Login request failed:', error);
      throw new Error('Login request failed');
    }
  };

  static checkUserRole = async (email: string) => {
    try {
      const response = await api.post("users/get-permission", { email });
      return response.data;
    } catch (error) {
      console.error('Check user role request failed:', error);
      throw new Error('Check user role request failed');
    }
  };

  static create = async (formData: string) => {
    try {
      const response = await api.post("users/create", formData);
      console.log('response', response);
      return response.data;
    } catch (error) {
      console.error('Login request failed:', error);
      throw new Error('Login request failed');
    }
  };

}

export { AuthService };