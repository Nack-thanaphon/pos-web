import { useState, useEffect, useCallback } from "react";
import { api } from "@/utils/api";

interface Pagination {
  page: number;
  limit: number;
  total: number;
}

interface TableData<T> {
  data: T[];
  loading: boolean;
  error: string | null;
  filter: string;
  pagination: Pagination;
  setFilter: (filter: string) => void;
  setPagination: (pagination: Partial<Pagination>) => void;
  addData: (newItem: T) => Promise<void>;
  updateData: (id: number, updatedItem: T) => Promise<void>;
  deleteData: (id: number) => Promise<void>;
  getOneData: (id: number) => Promise<T>;  // Add this line
}

export const useTableData = <T>(endpoint: string): TableData<T> => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState("");
  const [pagination, setPagination] = useState<Pagination>({
    page: 1,
    limit: 5,
    total: 0
  });

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.get(`/${endpoint}/getAll`, {
        params: {
          page: pagination.page,
          limit: pagination.limit,
          filter: filter
        }
      });
      setData(response.data.data);
      setPagination(prev => ({ ...prev, total: response.data.total }));
    } catch (error) {
      const message = error instanceof Error ? error.message : 'An error occurred';
      setError(message);
      console.error("Error fetching data:", message);
    } finally {
      setLoading(false);
    }
  }, [endpoint, filter, pagination.page, pagination.limit]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const addData = async (newItem: T): Promise<void> => {
    setLoading(true);
    try {
      await api.post(`/${endpoint}/create`, newItem);
      await fetchData();
    } catch (error) {
      const message = error instanceof Error ? error.message : 'An error occurred';
      setError(message);
      throw error;
    }
  };  

  const updateData = async (id: number, updatedItem: T): Promise<void> => {
    setLoading(true);
    try {
      await api.patch(`${endpoint}/update/${id}`, updatedItem);
      await fetchData();
    } catch (error) {
      const message = error instanceof Error ? error.message : 'An error occurred';
      setError(message);
      throw error;
    }
  };

  const deleteData = async (id: number): Promise<void> => {
    setLoading(true);
    try {
      await api.delete(`${endpoint}/delete/${id}`);
      await fetchData();
    } catch (error) {
      const message = error instanceof Error ? error.message : 'An error occurred';
      setError(message);
      throw error;
    }
  };
  const getOneData = async (id: number): Promise<T> => {
    setLoading(true);
    try {
      const response = await api.get(`${endpoint}/getOne/${id}`);
      return response.data;
    } catch (error) {
      const message = error instanceof Error ? error.message : 'An error occurred';
      setError(message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    loading,
    error,
    filter,
    pagination,
    setFilter,
    setPagination: (newPagination: Partial<Pagination>) =>
      setPagination(prev => ({ ...prev, ...newPagination })),
    addData,
    updateData,
    getOneData,
    deleteData
  };
};