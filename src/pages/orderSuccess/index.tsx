import BgLineImg from '/Login/line.png'
import SuccessIcon from '@/assets/icons/success.svg'
import { Divider, Button } from 'antd'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from '@/utils/axios.ts'
import useSWR from 'swr'
import { OrderDataType } from '../../types/order.model'
import OrderInfoCard from '@/component/OrderInfoCard'

const axiosGet = async (url: string) => {
  return axios
    .get(url)
    .then((response) => {
      return response
    })
}

const orderSuccess = () => {
  const location = useLocation()
  const [orderId, setOrderId] = useState('')
  const [orderData, setOrderData] = useState<OrderDataType>()

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search)
    setOrderId(searchParams.get('id') || '')
  }, [])

  const [canFetch, setCanFetch] = useState(false)
  const fetchUrl = `/orders/${orderId}`
  const { data, error } = useSWR(canFetch ? fetchUrl : null, axiosGet)

  useEffect(() => {
    if (orderId) {
      setCanFetch(true)
    }
  }, [orderId])

  useEffect(() => {
    if (error) {
      console.error(error)
    }
  }, [error])

  useEffect(() => {
    if (!data) return
    setOrderData(data.result)
  }, [data])

  const navigate = useNavigate()

  const goToOrder = () => {
    navigate('/account/orders')
  }
  return (
    <>
      <section className="bg-neutral-120">
        <div className="p-4 md:max-w-[1296px] mx-auto grid grid-cols-12 md:gap-x-[72px]">
          {/* left */}
          <div className="gap-4 col-span-12 md:col-span-7 text-neutral-0 ">
            <div className="flex items-center">
              <img
                src={SuccessIcon}
                alt="success"
                className="row-span-3 mr-10 w-10 h-10 content-center"
              />
              <div className="text-4xl leading-heading font-bold">
                <p className="my-0">恭喜，{orderData?.userInfo?.name}！</p>
                <p className="my-0">您已預訂成功</p>
              </div>
            </div>
            <p className="font-normal">
              我們已發送訂房資訊及詳細內容至你的電子信箱，入住時需向櫃檯人員出示訂房人證件。
            </p>
            <Divider className="my-20" />
            <p className="font-bold">立即查看您的訂單紀錄</p>
            <Button type="primary" onClick={goToOrder}>前往我的訂單</Button>
            <Divider className="my-20" />
            <div className="flex flex-col">
              <p className="font-bold text-xl">訂房人資訊</p>
              <span className="mb-2">姓名</span>
              <span className="font-bold mb-6">
                {orderData?.userInfo?.name}
              </span>
              <span className="mb-2">手機號碼</span>
              <span className="font-bold mb-6">
                {orderData?.userInfo?.phone}
              </span>
              <span className="mb-2">電子信箱</span>
              <span className="font-bold mb-6">
                {orderData?.userInfo?.email}
              </span>
            </div>
          </div>
          {/* right */}
          <div className="col-span-12 mt-[60px] md:col-span-5 md:mt-0">
            <OrderInfoCard orderData={orderData} />
          </div>
        </div>
        <img src={BgLineImg} alt="bg" className="w-full h-28 bg-neutral-120" />
      </section>
    </>
  )
}

export default orderSuccess
