import { Button, Modal } from 'antd'
import OrderInfoCard from '@/component/OrderInfoCard'
import HistoryOrderInfoCard from '@/component/HistoryOrderInfoCard'
import axios from '@/utils/axios.ts'
import useSWR from 'swr'
import { useEffect, useState } from 'react'
import { useAppSelector } from '@/hooks/storeHooks'
import { RootState } from '@/store.ts'
import { OrderDataType } from '@/types/order.model'
import { useNavigate } from 'react-router-dom'

const axiosGet = async (url: string) => {
  return axios.get(url).then((response) => {
    return response
  })
}
const axiosDelete = async (url: string) => {
  return axios.delete(url).then((response) => {
    return response
  })
}

export const Orders = () => {
  const navigate = useNavigate()
  const fetchUrl = '/admin/orders'
  const [canFetch, setCanFetch] = useState(false)
  // const [canDelete, setCanDelete] = useState(false)

  const currentUser = useAppSelector(
    (state: RootState) => state.user.currentUser,
  )
  const [orderList, setOrderList] = useState<OrderDataType[]>()
  const [incomingOrder, setIncomingOrder] = useState<OrderDataType>()
  const { data, error } = useSWR(canFetch ? fetchUrl : null, axiosGet)
  // const { data: deleteOrderData } = useSWR(
  //   canDelete ? `/admin/orders/${incomingOrder?._id}` : null,
  //   axiosDelete,
  // )

  useEffect(() => {
    if (currentUser?._id) {
      setCanFetch(true)
    }
  }, [currentUser])

  useEffect(() => {
    if (error) {
      console.error(error)
    }
  }, [error])

  useEffect(() => {
    if (!data?.result) return
    setOrderList(data.result)
    setIncomingOrder(data.result[data.result.length - 1])
    setCanFetch(false)
  }, [data])
  const [modal, contextHolder] = Modal.useModal()

  const cancelOrder = () => {
    modal.confirm({
      title: '確定要取消此房型的預訂嗎？',
      icon: null,
      okText: '確定取消',
      cancelText: '關閉視窗',
      async onOk() {
        if (incomingOrder?._id) {
          await axiosDelete(`/admin/orders/${incomingOrder?._id}`)
          refresh()
        }
      },
      onCancel() {},
    })
    // TODO: 判斷時間
  }

  const refresh = async () => {
    await axiosGet(fetchUrl)
    // console.log('go')
    // mutate({ ...data })
    // setIncomingOrder(data?.result[data?.result?.length - 1])
  }

  // useEffect(() => {
  //   if (!deleteOrderData?.result) return
  //   console.log(deleteOrderData?.result)
  //   setCanDelete(false)
  //   setIncomingOrder(undefined)
  //   // refresh()
  // }, [deleteOrderData])

  const goToRoom = () => {
    navigate(`/rooms/detail/${incomingOrder?.roomId?._id}`)
  }

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12 md:col-span-7">
        <OrderInfoCard orderData={incomingOrder}>
          <div className="flex gap-4 mt-10">
            <Button className="w-full" onClick={cancelOrder}>
              取消預定
            </Button>
            <Button type="primary" className="w-full" onClick={goToRoom}>
              查看詳情
            </Button>
          </div>
        </OrderInfoCard>
      </div>
      <div className="mt-6 md:mt-0 col-span-12 md:col-span-5">
        <HistoryOrderInfoCard list={orderList} />
      </div>
      {contextHolder}
    </div>
  )
}
