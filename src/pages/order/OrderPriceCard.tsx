import { useEffect, useState } from 'react'
import { formatPrice } from '@/utils/format'
import { Card, Button, Divider, Spin } from 'antd'
import axios from '@/utils/axios.ts'
import useSWR from 'swr'
import { RoomState } from '@/slice/roomSlice'

const axiosGet = async (url: string) => {
  return axios.get(url).then((response) => {
    return response
  })
}

interface OrderPriceCardProps {
  orderDetail: RoomState
  isSubmittable: boolean
  handleSubmit: () => void
}

// type ResponseData = {
//   status: string;
//   result: any;
// }

type RoomInfo = {
  imageUrl: string
  name: string
  price: number
}

type PriceData = {
  title: string
  price: number
}

const OrderPriceCard = ({
  orderDetail,
  isSubmittable,
  handleSubmit,
}: OrderPriceCardProps) => {
  const [canFetch, setCanFetch] = useState(false)
  const roomId = orderDetail?.detail?._id || ''
  const fetchUrl = `/rooms/${roomId}`
  const [roomInfo, setRoomInfo] = useState<RoomInfo>()
  const [priceData, setPriceData] = useState<PriceData[]>([])
  const [totalPrice, setTotalPrice] = useState<number>(0)
  const { data, error, isLoading } = useSWR<any>(
    canFetch ? fetchUrl : null,
    axiosGet,
  )
  useEffect(() => {
    if (roomId) {
      setCanFetch(true)
    }
  }, [roomId])

  useEffect(() => {
    if (error) console.error(error)
  }, [error])

  useEffect(() => {
    if (!data) return
    setRoomInfo(data.result)
    const checkInDate = new Date(orderDetail?.dateStart).getTime()
    const checkOutDate = new Date(orderDetail?.dateEnd).getTime()
    const dayDiff = Number((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24))
    setPriceData([
      ...priceData,
      {
        title: `${formatPrice(data.result.price)} X ${dayDiff}晚`,
        price: data.result.price * dayDiff,
      },
    ])
  }, [data])

  useEffect(() => {
    setTotalPrice(
      (priceData?.length &&
        priceData.reduce((acc, cur) => {
          return acc + cur.price
        }, 0)) ||
        0,
    )
  }, [priceData])

  return (
    <Card className="p-10 md:sticky md:top-10">
      <Spin spinning={isLoading}>
        <img
          src={roomInfo?.imageUrl}
          alt={roomInfo?.name}
          className="w-full rounded"
        />
        <p className="text-2xl text-bold">價格詳情</p>
        <div className="grid gap-y-3 mb-6">
          {priceData?.length &&
            priceData.map((priceItem, index) => {
              const isDiscount = priceItem.price < 0
              return (
                <div className="flex justify-between" key={index}>
                  <span>{priceItem.title}</span>
                  <span className={isDiscount ? 'text-primary-100' : ''}>
                    {formatPrice(priceItem.price)}
                  </span>
                </div>
              )
            })}
          <Divider />
          <div className="flex justify-between font-bold">
            <span>總價</span>
            <span>{formatPrice(totalPrice)}</span>
          </div>
        </div>
        <Button
          type="primary"
          block
          onClick={handleSubmit}
          disabled={!isSubmittable}
        >
          確認訂單
        </Button>
      </Spin>
    </Card>
  )
}

export default OrderPriceCard
