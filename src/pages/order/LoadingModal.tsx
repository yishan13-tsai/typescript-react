import { Modal, Spin } from 'antd'

const LoadingModal = ({ isOpen = false }) => {
  return (
    <Modal footer={null} width="80%" closeIcon={false} open={isOpen}>
      <div className="h-[75vh] flex justify-center items-center flex-col">
        <div className="mb-12">
          <Spin />
        </div>
        <img src="./logo-primary.png" alt="logo-primary" />
        <p className="text-xl font-bold text-neutral-100 mt-4">
          正在處理你的預定
        </p>
      </div>
    </Modal>
  )
}

export default LoadingModal
