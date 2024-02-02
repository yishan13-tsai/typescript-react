import { Modal, Spin } from 'antd'

const FailedModal = ({ isOpen = false }) => {
  return (
    <Modal footer={null} width="80%" closeIcon={false} open={isOpen}>
      <div className="h-[75vh] flex justify-center items-center flex-col">
        <div className="mb-12">
          <Spin />
        </div>
        <img src="./logo-primary.png" alt="logo-primary" />
        <p className="text-xl font-bold text-neutral-100 mt-4">
          此使用者不存在
        </p>
      </div>
    </Modal>
  )
}

export default FailedModal
