import { useEffect, useState } from 'react'
import { Card, Divider, Button } from 'antd'
import { OrderDataType } from '@/types/order.model'
import { formatPrice } from '@/utils/format'

type OrderInfoCardProps = {
  list: OrderDataType[] | undefined
}

const getTotalPrice = (orderData: OrderDataType) => {
  const checkInDate = new Date(orderData?.checkInDate).getTime()
  const checkOutDate = new Date(orderData?.checkOutDate).getTime()
  const dayDiff = Number((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24))
  const roomPrice = orderData?.roomId?.price || 0
  return roomPrice * dayDiff
}

type OrderItemType = {
  data: OrderDataType
}

const OrderItem = ({ data }: OrderItemType) => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-1/3">
        <img
          src={data?.roomId?.imageUrl}
          alt={data?.roomId?.name}
          className="w-full rounded mr-2"
        />
      </div>
      <div className="flex-auto">
        <span>預訂參考編號： {data?._id}</span>
        <p className="text-bold">{data?.roomId?.name}</p>
        <p>住宿天數：{data?.peopleNum} 位</p>
        <p>住宿人數：1晚</p>
        {/* api回應的資料沒有相關內容先用假的 */}
        <p className="title-line">入住：6 月 10 日星期四</p>
        <p className="title-line before:border-neutral-60">
          退房：6 月 11 日星期三
        </p>
        <p>{formatPrice(getTotalPrice(data))}</p>
      </div>
      <Divider />
    </div>
  )
}

const OrderInfoCard = ({ list }: OrderInfoCardProps) => {
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  useEffect(() => {
    if (list?.length) {
      setLoading(false)
    }
  }, [list])
  const more = () => {
    setCurrentPage(currentPage + 1)
  }

  return (
    <>
      <Card className="p-10 gap-6" loading={loading}>
        <p className="className=text-xl font-bold">歷史訂單</p>
        {list?.length &&
          list
            .filter((el, index) => el && index < currentPage * 3)
            .map((el) => {
              if (!el?._id) return
              return (
                <>
                  <OrderItem data={el} key={el?._id}></OrderItem>
                </>
              )
            })}
        <div className="grid gap-y-6"></div>
        <Button className="w-full" onClick={() => more()}>
          查看更多
        </Button>
      </Card>
    </>
  )
}

export default OrderInfoCard
