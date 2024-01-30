import arrowLeftIcon from '@/assets/icons/arrow-left.svg'
import { Divider } from 'antd'
import { useState } from 'react'
import { Form, Input, Space, Select, Card, Button } from 'antd'
import LoadingModal from '@/pages/order/LoadingModal'
const { Option } = Select

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

const UserForm = () => {
  const [form] = Form.useForm()

  // const onFinish = (values: any) => {
  //   console.log('Received values of form: ', values);
  // };
  return (
    <Form
      name="basic"
      className="w-full"
      layout="vertical"
      initialValues={{ remember: true }}
      // onFinish={onFinish}
      // onFinishFailed={onFinishFailed}
      form={form}
      autoComplete="off"
      requiredMark={false}
    >
      <Form.Item
        label="姓名"
        name="name"
        rules={[{ required: true, message: '請輸入姓名' }]}
        className="w-full"
      >
        <Input placeholder="請輸入姓名" />
      </Form.Item>
      <Form.Item
        label="手機號碼"
        name="phone"
        rules={[{ required: true, message: '請輸入手機號碼' }]}
        className="w-full"
      >
        <Input placeholder="請輸入手機號碼" />
      </Form.Item>
      <Form.Item
        label="電子信箱"
        name="email"
        rules={[{ required: true, message: '請輸入電子信箱' }]}
        className="w-full"
      >
        <Input placeholder="電子信箱" />
      </Form.Item>
      <AddressForm />

      {/* {(fields).map((fieldItem) => {
        return (
          <FormInput
            label={fieldItem.label}
            name={fieldItem.name}
            isRequired={fieldItem.isRequired}
            errorMessage={fieldItem.errorMessage}
            placeholder={fieldItem.placeholder}
            key={fieldItem.name}
          />
        )
      })}
      <AddressForm /> */}
    </Form>
  )
}

const AddressForm = () => {
  return (
    <Form.Item style={{ fontWeight: 700 }} label="地址">
      <Space.Compact size="middle" className="w-full">
        <Form.Item
          className="w-full mr-4 mb-4"
          name={['address', 'city']}
          rules={[{ required: true, message: '請選擇城市' }]}
        >
          <Select>
            <Option value="Zhejiang">高雄市</Option>
          </Select>
        </Form.Item>
        <Form.Item
          className="w-full"
          name={['address', 'district']}
          rules={[{ required: true, message: '請選擇地區' }]}
        >
          <Select>
            <Option value="Zhejiang">新興區</Option>
          </Select>
        </Form.Item>
      </Space.Compact>
      <Space.Compact className="w-full">
        <Form.Item
          className="w-full"
          name={['address', 'street']}
          rules={[{ required: true, message: 'Street is required' }]}
        >
          <Input placeholder="請輸入地址" />
        </Form.Item>
      </Space.Compact>
    </Form.Item>
  )
}

const priceItem = [
  { title: 'NT$10,000 X 2晚', price: 2000 },
  { title: '住宿折扣', price: -1000 },
]
const totalPrice = priceItem.reduce((acc, cur) => {
  return acc + cur.price
}, 0)

const formatPrice = (price: number): string => {
  let priceStr = price.toString()
  priceStr = priceStr.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  const prefix = 'NT$'
  let negative = ''
  if (priceStr?.[0] == '-') {
    negative = '-'
    priceStr = priceStr.replace('-', '')
  }
  return `${negative}${prefix} ${priceStr}`
}
const OrderPriceCard = () => {
  const [isOpenLoadingModal, setIsOpenLoadingModal] = useState(false)
  const showLoadingModal = () => {
    setIsOpenLoadingModal(true)
    window.setInterval(() => {
      closeLoadingModal()
    }, 1000)
  }
  const closeLoadingModal = () => {
    setIsOpenLoadingModal(false)
  }
  return (
    <Card className="p-10 md:sticky md:top-10">
      <img
        src="https://images.unsplash.com/photo-1682687219356-e820ca126c92?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="w-full"
      />
      <p className="text-2xl text-bold">價格詳情</p>
      <div className="grid gap-y-3 mb-6">
        {priceItem.map((priceItem, index) => {
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
      <Button type="primary" block onClick={showLoadingModal}>
        確認訂單
      </Button>
      <LoadingModal isOpen={isOpenLoadingModal} />
    </Card>
  )
}

const Order = () => (
  <>
    <main className="p-4 md:max-w-[1296px] mx-auto grid md:gap-x-[72px] grid-cols-12">
      {/* breadcrumb */}
      <div className="flex items-center font-bold col-span-12">
        <img src={arrowLeftIcon} alt="arrowicon" className="h-10 w-10" />
        <p className="font-bold leading-heading text-3xl">確認訂房資訊</p>
      </div>
      <section className="grid gap-y-10 col-span-12 md:col-span-7">
        <div className="font-bold leading-heading text-2xl">訂房資訊</div>
        <div className="grid">
          <InfoItem title={'選擇房型'} context={'尊爵雙人房'}></InfoItem>
          <InfoItem
            title={'訂房日期'}
            context={['入住：12月4日星期二', '退房：12月6日星期四']}
          ></InfoItem>
          <InfoItem title={'訂房人數'} context={'2人'}></InfoItem>
        </div>
        <Divider className="m-0 h-2" orientationMargin="0" />
        <div className="font-bold leading-heading text-3xl">訂房人資訊</div>
        <UserForm />
      </section>
      <section className="col-span-12 md:col-span-5">
        <OrderPriceCard />
      </section>
    </main>
  </>
)

export default Order
