import { Modal as AntModal } from 'antd';
import { CheckCircleFilled, CloseCircleFilled } from '@ant-design/icons';

interface StatusModalProps {
  message?: string;
}

const StatusModal = {
  success: (message: string = 'ดำเนินการสำเร็จ') => {
    AntModal.success({
      icon: <CheckCircleFilled className="text-green-500" />,
      content: message,
      centered: true,
      okText: 'ตกลง',
      okType: 'primary',
      maskClosable: true,
    });
  },

  error: (message: string = 'เกิดข้อผิดพลาด') => {
    AntModal.error({
      icon: <CloseCircleFilled className="text-red-500" />,
      content: message,
      centered: true,
      okText: 'ตกลง',
    });
  }
};

export default StatusModal;