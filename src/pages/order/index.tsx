import arrowLeftIcon from '@/assets/icons/arrow-left.svg'
import { Divider, Form, message } from 'antd'

import { useState, useEffect } from 'react'
import OrderPriceCard from './OrderPriceCard'
import UserInfoForm from './UserInfoForm'
import LoadingModal from './LoadingModal'
import axios from '@/utils/axios.ts'
import { useNavigate } from 'react-router-dom'
import useSWRMutation from 'swr/mutation'
import { orderDetailType } from '@/types/order.model'
import { FormDataType } from '@/types/form.model'
import {  RoomSubItemInfo } from "@/types/room.model";
import { RootState } from '@/store.ts'
import { useAppSelector } from '@/hooks/storeHooks'
import BaseInformation from '@/component/BaseInformation'
import ItemsRoom from '@/component/ItemsRoom'

const area: RoomSubItemInfo[] = [
  { title: '市景', isProvide: true },
  { title: '獨立衛浴', isProvide: true },
  { title: '客廳', isProvide: true },
  { title: '書房', isProvide: true },
  { title: '樓層電梯', isProvide: true },
]

interface Info {
  context: string | string[]
  title: string
}

type lineTitleProps = {
  title: string
}

const LineTitle = ({ title }: lineTitleProps) => {
  return (<>
    <div className="font-bold title-line">{title}</div>
  </>)
}

const InfoItem = ({ context, title }: Info) => {
  return (
    <div className="flex justify-start">
      <div className="grid flex-1">
        <LineTitle title={title} />
        <div className="">
          {context && (typeof context === 'string' ? (
            <p>{context}</p>
          ) : (
            context.map((el: string, index: number) => <p key={index}>{el}</p>)
          ))}
        </div>
      </div>
      <div className="self-center font-bold">編輯</div>
    </div>
  )
}

const OrderDetail = ({
  name,
  checkInDate,
  checkOutDate,
  peopleNum,
}: orderDetailType) => {
  return (
    <>
      <div className="font-bold leading-heading text-2xl">訂房資訊</div>
      <div className="grid">
        <InfoItem title={'選擇房型'} context={name}></InfoItem>
        <InfoItem
          title={'訂房日期'}
          context={[`入住：${checkInDate}`, `退房：${checkOutDate}`]}
        ></InfoItem>
        <InfoItem title={'訂房人數'} context={`${peopleNum}人`}></InfoItem>
      </div>
    </>
  )
}

const Order = () => {
  const [messageApi] = message.useMessage();

  const navigate = useNavigate()
  const orderDetailData = useAppSelector((state: RootState) => state.room)
  useEffect(() => {
    if (!orderDetailData?.detail?._id) {
      messageApi.open({
        type: 'error',
        content: '請選擇房間!',
      });
      navigate('/rooms')
    }
  }, [])
  const [isSubmittable, setIsSubmittable] = useState(false)
  const [isOpenLoadingModal, setIsOpenLoadingModal] = useState(false)
  const [form] = Form.useForm()
  const formValues = Form.useWatch([], form)



  useEffect(() => {
    form.validateFields({ validateOnly: true }).then(
      () => {
        handleSubmittable(true)
      },
      () => {
        handleSubmittable(false)
      },
    )
  }, [formValues])
  const fetchUrl = `/orders`

  type ApiResponse = {
    result?: any
    status: number
  }

  const submitPost = async (url: string, { arg }: { arg: FormDataType }): Promise<ApiResponse> => {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWE2N2ZkNWE2NWI2N2I3NjRlNmFiNDQiLCJpYXQiOjE3MDY2ODM5MDUsImV4cCI6MTcwNzI4ODcwNX0.CACW-Rbmm75iXJzIoJ75U_u5BGciNaapUDqnD4N1-X0'
    return axios
      .post<ApiResponse>(url, arg, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        return response
      })
  }

  const { trigger } = useSWRMutation(fetchUrl, submitPost)

  const closeLoadingModal = () => {
    setIsOpenLoadingModal(false)
  }
  const handleSubmittable = (status: boolean) => {
    setIsSubmittable(status)
  }

  const handleSubmit = async () => {
    setIsOpenLoadingModal(true)
    const postData: FormDataType = {
      roomId: orderDetailData?.detail?._id || '',
      checkInDate: orderDetailData.dateStart,
      checkOutDate: orderDetailData.dateEnd,
      peopleNum: orderDetailData.people,
      userInfo: {
        address: {
          zipcode: formValues.address.district,
          detail: formValues.address.detail,
        },
        name: formValues.name,
        phone: formValues.phone,
        email: formValues.email,
      },
    }
    const result = await trigger(postData)
    closeLoadingModal()
    const orderId = result?.result?._id
    if (orderId) {
      navigate(`/orderSuccess?id=${orderId}`)
    } else {
      console.error(result.result)
    }
  }

  return (
    <>
      <main className="p-4 md:p-0 md:my-[120px] md:max-w-[1296px] mx-auto grid md:gap-x-[72px] grid-cols-12">
        {/* breadcrumb */}
        <div className="flex items-center font-bold col-span-12">
          <img src={arrowLeftIcon} alt="arrowicon" className="h-10 w-10" />
          <p className="font-bold leading-heading text-3xl">確認訂房資訊</p>
        </div>
        <section className="grid gap-y-10 col-span-12 md:col-span-7">
          <OrderDetail
            name={orderDetailData?.detail?.name || ''}
            checkInDate={orderDetailData?.dateStart || ''}
            checkOutDate={orderDetailData?.dateEnd || ''}
            peopleNum={orderDetailData.people || 0}
          />
          <Divider className="m-0 h-2" orientationMargin="0" />
          <div className="font-bold leading-heading text-3xl">訂房人資訊</div>
          <UserInfoForm form={form} />
          <Divider className="m-0 h-2" orientationMargin="0" />
          <LineTitle title={'房型基本資訊'} />
          <BaseInformation baseInfo={{
            size: orderDetailData?.detail?.areaInfo || '',
            bed: orderDetailData?.detail?.bedInfo || '',
            capacity: orderDetailData?.detail?.maxPeople || 0
          }} />
          <LineTitle title={'房間格局'} />
          <ItemsRoom items={area} />
          <LineTitle title={'房內設備'} />
          <ItemsRoom
            items={orderDetailData?.detail?.facilityInfo || []}
          />
          <LineTitle title={'備品提供'} />
          <ItemsRoom
            items={orderDetailData?.detail?.amenityInfo || []}
          />

        </section>
        <section className="col-span-12 mt-10 md:col-span-5 md:mt-0">
          <OrderPriceCard
            orderDetail={orderDetailData}
            isSubmittable={isSubmittable}
            handleSubmit={handleSubmit}
          />
          <LoadingModal isOpen={isOpenLoadingModal} />
        </section>
      </main>
    </>
  )
}

export default Order
