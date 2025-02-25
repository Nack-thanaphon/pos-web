import { PencilIcon, TrashIcon } from "lucide-react";
import React from "react";

interface TableProps {
  columns: string[];
  header: string[];
  data: any[];
  onEdit: (item: any) => void;
  onDelete: (id: number) => void;
  pagination: {
    page: number;
    limit: number;
    total: number;
  };
  onPageChange: (newPage: number) => void;
  onLimitChange: (newLimit: number) => void;
}

const Table: React.FC<TableProps> = ({ columns, header, data, onEdit, onDelete, pagination, onPageChange, onLimitChange }) => {
  return (
    <div className="overflow-x-auto bg-white shadow-md rounded-lg">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No.</th>
            {header?.map((col, index) => (
              <th key={index} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data?.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-100">
              <td className="px-6 py-4 whitespace-nowrap">{rowIndex + 1 + (pagination.page - 1) * pagination.limit}</td>
              {columns?.map((col, colIndex) => (
                <td key={colIndex} className="px-6 py-4 whitespace-nowrap">{row[col]}</td>
              ))}
              <td className="px-6 py-4 flex space-x-2">
                <button onClick={() => onEdit(row)} className="text-blue-500 hover:text-blue-700">
                  <PencilIcon className="h-5 w-5" />
                </button>
                <button onClick={() => onDelete(row.id)} className="text-red-500 hover:text-red-700">
                  <TrashIcon className="h-5 w-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between items-center mt-4">
        <div>
          <label>
            Rows per page:
            <select value={pagination.limit} onChange={(e) => onLimitChange(Number(e.target.value))} className="ml-2 border rounded p-1">
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
            </select>
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <button onClick={() => onPageChange(pagination.page - 1)} disabled={pagination.page === 1} className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50">
            Previous
          </button>
          <span>{pagination.page}</span>
          <button onClick={() => onPageChange(pagination.page + 1)} disabled={pagination.page * pagination.limit >= pagination.total} className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Table;