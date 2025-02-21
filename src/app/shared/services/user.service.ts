import { api } from "@/app/utils/api";

class UsersService {
  static getall = async (page: number,limit: number,filter: string) => {
    const response = await api.get("/users/getAll",{
      params: { page,limit,filter }
    });
    return response.data;
  };

  static getone = async (id: number) => {
    const response = await api.get("/users/getOne/" + id);
    return response.data;
  };

  static findByToken = async (lineId: string) => {
    const response = await api.get("/users/findByToken/" + lineId);
    return response.data;
  };

  static getPermission = async (email: string) => {
    const response = await api.get("/users/getPermission/" + email);
    return response.data;
  };


  static checkEmailExit = async (email: string) => {
    const response = await api.get("/users/checkEmailExit/" + email);
    return response.data;
  };



  

  static getList = async () => {
    const response = await api.get("/users/getList");
    return response.data;
  };


  static create = async (data: any) => {
    const response = await api.post("/users/create",data);
    return response.data;
  };

  static update = async (id: number,data: any) => {
    const response = await api.patch("/users/update/" + id,data);
    return response.data;
  };

  static updateStatus = async (id: number,status: boolean) => {
    const response = await api.patch(`/users/updateStatus`,{
      id: id,
      status: status
    });
    return response.data;
  };

  static downloadExcel = (name: string) => {
    const response = api.get(`/users/exportExcel`,{
      params: { tableName: name },
      responseType: "blob"
    });

    return response;
  };

  static delete = async (id: number) => {
    const response = await api.delete(`/users/delete/${id}`);
    return response.data;
  };
}

export { UsersService };
