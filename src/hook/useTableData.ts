import { useState, useEffect } from "react";
import { api } from "@/utils/api";

export const useTableData = (endpoint: string) => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("");
  const [pagination, setPagination] = useState({ page: 1, limit: 5, total: 0 });

  useEffect(() => {
    fetchData();
  }, [filter, pagination.page, pagination.limit]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await api.get(endpoint, {
        params: {
          page: pagination.page,
          limit: pagination.limit,
          filter: filter
        }
      });
      setData(response.data.data);
      setPagination(prev => ({ ...prev, total: response.data.total }));
    } catch (error) {
      console.error("Error fetching data", error);
    }
    setLoading(false);
  };

  const addData = async (newItem: any) => {
    await api.post(endpoint, newItem);
    fetchData();
  };

  const updateData = async (id: number, updatedItem: any) => {
    await api.put(`${endpoint}/${id}`, updatedItem);
    fetchData();
  };

  const deleteData = async (id: number) => {
    await api.delete(`${endpoint}/${id}`);
    fetchData();
  };

  return { data, loading, addData, updateData, deleteData, setFilter, pagination, setPagination };
};