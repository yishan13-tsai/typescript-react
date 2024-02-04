import { Modal } from 'antd'

const NoticeModal = ({ isOpen = false, message = '通知訊息', image = true }) => {
  return (
    <Modal footer={null} width="50%" closeIcon={false} open={isOpen}>
      <div className="h-[75vh] flex justify-center items-center flex-col">
        {image && <img src="./logo-primary.png" alt="logo-primary" />}
        <p className="text-xl font-bold text-neutral-100 mt-4">
          {message}
        </p>
      </div>
    </Modal>
  )
}

export default NoticeModal
