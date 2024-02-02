import arrowLeftIcon from '@/assets/icons/arrow-left.svg'
import { Divider, Form } from 'antd'

import { useState, useEffect } from 'react'
import OrderPriceCard from './OrderPriceCard'
import UserInfoForm from './UserInfoForm'
import LoadingModal from './LoadingModal'
import axios from '@/utils/axios.ts'
import { useNavigate } from 'react-router-dom'
import useSWRMutation from 'swr/mutation'
import { orderDetailType } from '@/types/order.model'
import { FormDataType } from '@/types/form.model'


// const infos: Info[] = [{ title: '選擇房型' }]

// interface Info {
//   title: string;
// }
// const InfoBlock = infos.map((title) => {

//   return (
//     <div className="flex justify-start">
//       <div className="grid gap-y-2 flex-1">
//         <div className="font-bold before:content-[''] before:border-l-4 before:h-full before:mr-3 before:border-[#BF9D7D] before:border-solid">選擇房型</div>
//         <div className="">{title}</div>
//       </div>
//       <div className="self-center font-bold">編輯</div>
//     </div>
//   )
// })

// {
//   "roomId": "65251f6095429cd58654bf12",
//   "checkInDate": "2023/06/18",
//   "checkOutDate": "2023/06/19",
//   "peopleNum": 2,
//   "userInfo": {
//     "address": {
//       "zipcode": 802,
//       "detail": "文山路23號"
//     },
//     "name": "Joanne Chen",
//     "phone": "0912345678",
//     "email": "example@gmail.com"
//   }
// }

// const onFinish = (values: any) => {
//   console.log('Success:', values);
// };

// const onFinishFailed = (errorInfo: any) => {
//   console.log('Failed:', errorInfo);
// };

interface Info {
  context: string | string[]
  title: string
}

const InfoItem = ({ context, title }: Info) => {
  return (
    <div className="flex justify-start">
      <div className="grid flex-1">
        <div className="font-bold title-line">{title}</div>
        <div className="">
          {typeof context === 'string' ? (
            <p>{context}</p>
          ) : (
            context.map((el: string, index: number) => <p key={index}>{el}</p>)
          )}
        </div>
      </div>
      <div className="self-center font-bold">編輯</div>
    </div>
  )
}

// type AddressType = {
//   zipcode: number;
//   detail: string
// }

// interface FieldType {
//   name?: string;
//   phone?: string;
//   email?: string;
//   address?: AddressType;
// };

// interface OrderFormItem {
//   label: string;
//   name: FieldType;
//   isRequired: boolean;
//   errorMessage: string;
//   placeholder: string;
// }

// const fields: OrderFormItem[] = [
//   { label: '姓名', name: 'name', isRequired: true, errorMessage: '請輸入姓名', placeholder: '請輸入姓名' },
//   { label: '手機號碼', name: 'phone', isRequired: true, errorMessage: '請輸入手機號碼', placeholder: '請輸入手機號碼' },
//   { label: '電子信箱', name: 'email', isRequired: true, errorMessage: '請輸入電子信箱', placeholder: '請輸入電子信箱' }
// ]

// const FormInput = ({ label, name, isRequired, errorMessage, placeholder }: OrderFormItem) => {
//   return (
//     <Form.Item<FieldType>
//       label={<span style={{ fontWeight: 700 }}>{label}</span>}
//       name={name}
//       rules={[{ required: isRequired ?? false, message: errorMessage }]}
//       className="w-full"
//     >
//       <Input placeholder={placeholder} />
//     </Form.Item>
//   )
// }

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

// const axiosGet = async (url: string) => {
//   return axios.get(url).then((response) => {
//     return response
//   })
// }

const Order = () => {
  const [orderDetailData] = useState<orderDetailType>({
    roomId: '65b90fc4f5d87d9cce6a4741',
    name: '豪華雙人房',
    checkInDate: '2023/11/12',
    checkOutDate: '2023/11/14',
    peopleNum: 2,
  })

  const [isSubmittable, setIsSubmittable] = useState(false)
  const [isOpenLoadingModal, setIsOpenLoadingModal] = useState(false)
  const [form] = Form.useForm()
  const formValues = Form.useWatch([], form)
  const navigate = useNavigate()

  // const onFinish = (values: any) => {
  //   console.log('Received values of form: ', values);
  // };
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
      roomId: orderDetailData.roomId || '',
      checkInDate: orderDetailData.checkInDate,
      checkOutDate: orderDetailData.checkOutDate,
      peopleNum: orderDetailData.peopleNum,
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
      <main className="p-4 md:max-w-[1296px] mx-auto grid md:gap-x-[72px] grid-cols-12">
        {/* breadcrumb */}
        <div className="flex items-center font-bold col-span-12">
          <img src={arrowLeftIcon} alt="arrowicon" className="h-10 w-10" />
          <p className="font-bold leading-heading text-3xl">確認訂房資訊</p>
        </div>
        <section className="grid gap-y-10 col-span-12 md:col-span-7">
          <OrderDetail
            name={orderDetailData.name}
            checkInDate={orderDetailData.checkInDate}
            checkOutDate={orderDetailData.checkOutDate}
            peopleNum={orderDetailData.peopleNum}
          />
          <Divider className="m-0 h-2" orientationMargin="0" />
          <div className="font-bold leading-heading text-3xl">訂房人資訊</div>
          <UserInfoForm form={form} />
        </section>
        <section className="col-span-12 md:col-span-5">
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
