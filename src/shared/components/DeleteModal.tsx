import React from 'react';
import { Modal as AntModal } from 'antd';
import { ExclamationCircleFilled } from '@ant-design/icons';

interface DeleteModalProps {
  onDelete: () => Promise<void>;
}

const DeleteModal = ({ onDelete }: DeleteModalProps) => {
  const showDeleteConfirm = () => {
    AntModal.confirm({
      title: 'ยืนยันการลบข้อมูล',
      icon: <ExclamationCircleFilled />,
      content: 'คุณแน่ใจหรือไม่ว่าต้องการลบรายการนี้?',
      okText: 'ยืนยัน',
      okType: 'danger',
      cancelText: 'ยกเลิก',
      centered: true,
      // Add animation configs
      transitionName: 'ant-zoom',
      maskTransitionName: 'ant-fade',
      async onOk() {
        try {
          await onDelete();
          AntModal.success({
            content: 'ลบข้อมูลสำเร็จ',
            centered: true,
            transitionName: 'ant-zoom',
            maskTransitionName: 'ant-fade',
          });
        } catch (error) {
          AntModal.error({
            title: 'เกิดข้อผิดพลาด',
            content: 'ไม่สามารถลบข้อมูลได้',
            centered: true,
            transitionName: 'ant-zoom',
            maskTransitionName: 'ant-fade',
          });
        }
      },
    });
  };

  return { showDeleteConfirm };
};

export default DeleteModal;