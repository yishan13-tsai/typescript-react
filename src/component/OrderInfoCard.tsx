import CheckIcon from '@/assets/icons/ic_check.svg'
import { useEffect, useState } from 'react'
import { Card, Divider } from 'antd'
import { OrderDataType } from '@/types/order.model'

type subItemGridSizeType = 'big' | 'small'

type OrderInfoCardProps = {
  orderData: OrderDataType | undefined
  children?: any
  subItemGridSize?: subItemGridSizeType
}

type RoomSubItemProps = {
  title: string
  items: { title: string }[]
  gridSize: subItemGridSizeType
}

const OrderInfoCard = ({
  orderData,
  children,
  subItemGridSize = 'small',
}: OrderInfoCardProps) => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    if (orderData) {
      setLoading(false)
    }
  }, [orderData])

  const roomSubItems = ({
    title,
    items,
    gridSize = 'small',
  }: RoomSubItemProps) => {
    const gridClass =
      gridSize === 'small'
        ? 'grid-cols-2 md:grid-cols-3'
        : 'grid-cols-2 md:grid-cols-5'
    return (
      <>
        <div className="border-[1px] rounded-lg border-solid p-4 border-neutral-40">
          <p className="title-line">{title}</p>
          <div className={`grid gap-2 ${gridClass}`}>
            {items.map((item, index) => {
              return (
                <div key={index}>
                  <img
                    src={CheckIcon}
                    alt="check"
                    className="align-bottom mr-2"
                  />
                  {item?.title}
                </div>
              )
            })}
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <Card className="p-10 gap-6" loading={loading}>
        <span>預訂參考編號： {orderData?._id}</span>
        <p className="text-xl font-bold">即將來的行程</p>
        <img
          src={orderData?.roomId?.imageUrl}
          alt={orderData?.roomId?.name}
          className="w-full"
        />
        <p className="font-bold text-lg">
          <span>{orderData?.roomId?.name}，1晚</span> |{' '}
          <span>住宿人數：{orderData?.peopleNum} 位</span>
        </p>
        {/* api回應的資料沒有相關內容先用假的 */}
        <p className="title-line">入住：6 月 10 日星期四，12:00 前可入住</p>
        <p className="title-line before:border-neutral-60">
          退房：6 月 11 日星期三，12:00 前退房
        </p>
        <Divider />
        <div className="grid gap-y-6">
          {roomSubItems({
            title: '房內設備',
            items: orderData?.roomId?.facilityInfo || [],
            gridSize: subItemGridSize,
          })}
          {roomSubItems({
            title: '備品提供',
            items: orderData?.roomId?.amenityInfo || [],
            gridSize: subItemGridSize,
          })}
        </div>
        {children}
      </Card>
    </>
  )
}

export default OrderInfoCard
