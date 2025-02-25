import { useTableData } from "@/hook/useTableData";
import Modal from "@/shared/components/Modal";
import Table from "@/shared/components/Table";
import React, { useState } from "react";

const OrdersTable = () => {
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
    <div className="p-5">
      <h1 className="text-xl font-bold">Logs Table</h1>
      <button onClick={() => setIsModalOpen(true)} className="bg-green-500 text-white px-3 py-1 my-3">Add New</button>

      <input
        type="text"
        placeholder="Filter..."
        onChange={(e) => setFilter(e.target.value)}
        className="border px-2 py-1 mb-4"
      />

      <Table
        columns={["event_type", "event_detail"]}
        header={[ "ประเภทกิจกรรม", "รายละเอียดกิจกรรม", "สถานะ"]}
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

export default OrdersTable;