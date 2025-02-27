import { useTableData } from "@/hook/useTableData";
import DeleteModal from "@/shared/components/DeleteModal";
import Modal from "@/shared/components/Modal";
import StatusModal from "@/shared/components/StatusModal";
import Table2 from "@/shared/components/Table2";
import { Download, Filter, Plus, Search } from "lucide-react";
import React, { useState } from "react";


const LogsTable = () => {
  const { data, addData, updateData, deleteData, setFilter, pagination, getOneData, setPagination } = useTableData("logs");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);
  const [previewData, setPreviewData] = useState<any>(null);

  const handleEdit = (item: any) => {
    setEditingItem(item);
    setIsModalOpen(true);
  };

  const handleDelete = (id: number) => {
    const { showDeleteConfirm } = DeleteModal({
      onDelete: async () => {
        await deleteData(id);
      },
    });
    showDeleteConfirm();
  };

  const handleSave = (item: any) => {
    if (editingItem) {
      updateData(editingItem.id, item);
    } else {
      addData(item);
    }
    StatusModal.success('บันทึกข้อมูลสำเร็จ');
    setIsModalOpen(false);
  };

  const handlePageChange = (newPage: number) => {
    setPagination({
      page: newPage,
      limit: pagination.limit,
      total: pagination.total
    });
  };

  const handleLimitChange = (newLimit: number) => {
    setPagination({
      page: 1,
      limit: newLimit,
      total: pagination.total
    });
  };

  const handlePreview = async (id: number) => {
    try {
      const data = await getOneData(id);
      setPreviewData(data);
      setIsPreviewModalOpen(true);
    } catch (error) {
      console.error('Error fetching preview:', error);
    }
  };


  return (
    <div className="p-0">
      <div className="p-4 border-b border-gray-100 bg-gray-50 flex flex-wrap justify-between items-center gap-3">
        <div className="lg:flex items-center justify-between lg:space-x-2 w-full">
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
          <div className="mt-1">
            <button onClick={() => setIsModalOpen(true)} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center">
              <Plus className="h-4 w-4 mr-2" />
              เพิ่ม
            </button>
          </div>
        </div>
      </div>
      <Table2
        columns={["event_type", "event_detail"]}
        header={["ประเภทกิจกรรม", "รายละเอียดกิจกรรม", "สถานะ"]}
        data={data}
        onEdit={handleEdit}
        onPreview={handlePreview}
        onDelete={handleDelete}
        pagination={pagination}
        onPageChange={handlePageChange}
        onLimitChange={handleLimitChange}
      />

      {/* Preview Modal */}
      <Modal isOpen={isPreviewModalOpen} onClose={() => setIsPreviewModalOpen(false)}>
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-5">รายละเอียดกิจกรรม</h2>
          {previewData && (
            <div className="text-start space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">ประเภทกิจกรรม</label>
                <p className="mt-1 text-gray-900">{previewData.event_type}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">รายละเอียด</label>
                <p className="mt-1 text-gray-900">{previewData.event_detail}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">วันที่สร้าง</label>
                <p className="mt-1 text-gray-900">
                  {new Date(previewData.created_at).toLocaleString('th-TH')}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">อัพเดทล่าสุด</label>
                <p className="mt-1 text-gray-900">
                  {new Date(previewData.updated_at).toLocaleString('th-TH')}
                </p>
              </div>
            </div>
          )}
          <div className="mt-6 flex justify-end">
            <button
              onClick={() => setIsPreviewModalOpen(false)}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
            >
              ปิด
            </button>
          </div>
        </div>
      </Modal>

      {/* Create/Edit Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">
            {editingItem ? 'แก้ไขกิจกรรม' : 'เพิ่มกิจกรรม'}
          </h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target as HTMLFormElement);
              handleSave({
                event_type: formData.get('event_type') as string,
                event_detail: formData.get('event_detail') as string,
              });
            }}
            className="space-y-4"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700">ประเภทกิจกรรม</label>
              <input
                name="event_type"
                defaultValue={editingItem?.event_type || ""}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">รายละเอียด</label>
              <textarea
                name="event_detail"
                defaultValue={editingItem?.event_detail || ""}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                rows={4}
                required
              />
            </div>
            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
              >
                ยกเลิก
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                {editingItem ? 'บันทึก' : 'เพิ่ม'}
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default LogsTable;