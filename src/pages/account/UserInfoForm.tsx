import { Button, Form, Input } from 'antd'
import AddressInput from '@/component/AddressInput'
import { FormInstance } from 'antd/lib'
import { useSelector } from 'react-redux'
import { RootState } from '@/store.ts'
import { useEffect, useState } from 'react'

type UserInfoFormProps = {
  form: FormInstance
}

const UserInfoForm = ({ form }: UserInfoFormProps) => {
  const user = useSelector((state: RootState) => state.user.currentUser)
  const formValues = Form.useWatch([], form)
  const [isSubmittable, setIsSubmittable] = useState(false)
  useEffect(() => {
    console.log({ isSubmittable })
    form.validateFields({ validateOnly: true }).then(
      () => {
        setIsSubmittable(true)
      },
      () => {
        setIsSubmittable(false)
      },
    )
  }, [form, formValues])

  return (
    <Form
      name="basic"
      className="w-full"
      layout="vertical"
      initialValues={{
        remember: true,
        name: user?.name,
        phone: user?.phone,
        email: user?.email,
        address: {
          city: user?.address.city,
          detail: user?.address.detail,
          district: user?.address.county,
        },
      }}
      form={form}
      autoComplete="off"
      requiredMark={false}
      onFieldsChange={(e) => {
        if (e[0].name[0] === 'address' && e[0].name[1] === 'city') {
          form.setFieldsValue({ address: { district: '' } })
        }
      }}
    >
      <Form.Item
        label="姓名"
        name="name"
        rules={[{ required: true, message: '請輸入姓名' }]}
        validateTrigger="onBlur"
        className="w-full font-bold"
      >
        <Input placeholder="請輸入姓名" />
      </Form.Item>
      <Form.Item
        label="手機號碼"
        name="phone"
        rules={[{ required: true, message: '請輸入手機號碼' }]}
        validateTrigger="onBlur"
        className="w-full font-bold"
      >
        <Input placeholder="請輸入手機號碼" />
      </Form.Item>
      <Form.Item
        label="電子信箱"
        name="email"
        rules={[{ required: true, message: '請輸入電子信箱' }]}
        validateTrigger="onBlur"
        className="w-full font-bold"
      >
        <Input placeholder="電子信箱" />
      </Form.Item>
      <AddressInput form={form} />
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          // disabled={!isSubmittable}
          disabled
          onClick={() => form.submit()}
          className="mt-4"
        >
          儲存設定
        </Button>
      </Form.Item>
    </Form>
  )
}

export default UserInfoForm
