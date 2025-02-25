import { api } from "@/utils/api";

class ProductsService {
  static getall = async (page: number, limit: number, filter: string) => {
    const response = await api.get("/products/getAll", {
      params: { page, limit, filter }
    });
    return response.data;
  };

  static getone = async (id: number) => {
    const response = await api.get("/products/getOne/" + id);
    return response.data;
  };

  static getList = async () => {
    const response = await api.get("/products/getList");
    return response.data;
  };


  static create = async (data: any) => {
    const response = await api.post("/products/create", data);
    return response.data;
  };

  static update = async (id: number, data: any) => {
    const response = await api.patch("/products/update/" + id, data);
    return response.data;
  };

  static updateStatus = async (id: number, status: boolean) => {
    const response = await api.patch(`/products/updateStatus`, {
      id: id,
      status: status
    });
    return response.data;
  };

  static downloadExcel = (name: string) => {
    const response = api.get(`/products/exportExcel`, {
      params: { tableName: name },
      responseType: "blob"
    });

    return response;
  };

  static delete = async (id: number) => {
    const response = await api.delete(`/products/delete/${id}`);
    return response.data;
  };
}

export { ProductsService };
