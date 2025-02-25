import { useTableData } from "@/hook/useTableData";
import Modal from "@/shared/components/Modal";
import Table from "@/shared/components/Table";
import Table2 from "@/shared/components/Table2";
import { Download, Filter, Search } from "lucide-react";
import React, { useState } from "react";

const LogsTable = () => {
  const { data, addData, updateData, deleteData, setFilter, pagination, setPagination } = useTableData("logs/getAll");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);

  const handleEdit = (item: any) => {
    setEditingItem(item);
    setIsModalOpen(true);
  };

  const handleDelete = (id: number) => {
    deleteData(id);
  };

  const handleSave = (item: any) => {
    if (editingItem) {
      updateData(editingItem.id, item);
    } else {
      addData(item);
    }
    setIsModalOpen(false);
  };

  const handlePageChange = (newPage: number) => {
    setPagination(prev => ({ ...prev, page: newPage }));
  };

  const handleLimitChange = (newLimit: number) => {
    setPagination(prev => ({ ...prev, limit: newLimit, page: 1 }));
  };

  return (
    <div className="p-0">
      <div className="p-4 border-b border-gray-100 bg-gray-50 flex flex-wrap justify-between items-center gap-3">
        <div className="flex items-center justify-between space-x-2 w-full">
          <div className="flex gap-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                onChange={(e) => setFilter(e.target.value)}
                className="pl-9 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>
            <button className="p-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100">
              <Filter className="h-4 w-4" />
            </button>
          </div>
          <div>
            <button onClick={() => setIsModalOpen(true)} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center">
              <Download className="h-4 w-4 mr-2" />
              Add New
            </button>
          </div>
        </div>
      </div>
      <Table2
        columns={["event_type", "event_detail"]}
        header={["ประเภทกิจกรรม", "รายละเอียดกิจกรรม", "สถานะ"]}
        data={data}
        onEdit={handleEdit}
        onDelete={handleDelete}
        pagination={pagination}
        onPageChange={handlePageChange}
        onLimitChange={handleLimitChange}
      />

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target as HTMLFormElement);
            handleSave(Object.fromEntries(formData.entries()));
          }}
        >
          <input name="name" placeholder="Name" defaultValue={editingItem?.name || ""} className="border p-2 w-full mb-2" />
          <select name="status" defaultValue={editingItem?.status || "active"} className="border p-2 w-full mb-2">
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
          <button type="submit" className="bg-blue-500 text-white px-3 py-1 mt-3">Save</button>
        </form>
      </Modal>
    </div>
  );
};

export default LogsTable;