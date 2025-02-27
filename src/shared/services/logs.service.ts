import { api } from "@/utils/api";

interface LoginFormData {
  event_type: string;
  event_detail: string;
}

class LogsService  {
  static getall = async (page: number, limit: number, filter: string) => {
    const response = await api.get("logs/getAll", {
      params: { page, limit, filter }
    });
    return response.data;
  };


  static create = async (formData: LoginFormData) => {
    try {
      const response = await api.post("/logs/create", formData);
      console.log('response', response);
      return response.data;
    } catch (error) {
      console.error('Login request failed:', error);
      throw new Error('Login request failed');
    }
  };


  static getone = async (id: number) => {
    const response = await api.get("/logs/getOne/" + id);
    return response.data;
  };

  static getList = async () => {
    const response = await api.get("/logs/getList");
    return response.data;
  };


  static update = async (id: number, data: any) => {
    const response = await api.patch("/logs/update/" + id, data);
    return response.data;
  };

  static updateStatus = async (id: number, status: boolean) => {
    const response = await api.patch(`/logs/updateStatus`, {
      id: id,
      status: status
    });
    return response.data;
  };

  static downloadExcel = (name: string) => {
    const response = api.get(`/logs/exportExcel`, {
      params: { tableName: name },
      responseType: "blob"
    });

    return response;
  };

  static delete = async (id: number) => {
    const response = await api.delete(`/logs/delete/${id}`);
    return response.data;
  };

}

export { LogsService };