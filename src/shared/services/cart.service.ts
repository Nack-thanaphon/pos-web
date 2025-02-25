import axios from "axios";

class CommonService {
  static getall = async () => {
    const response = await axios.get("https://www.melivecode.com/api/attractions");
    return response.data;
  };

  static getone = async (id: number) => {
    const response = await axios.get(" https://www.melivecode.com/api/attractions/" + id);
    return response.data;
  };

}

export { CommonService };
