import { Button, DatePicker, Form, Input } from 'antd'
import ProfileAddressInput from '@/component/ProfileAddressInput'
import { FormInstance } from 'antd/lib'
import { useSelector } from 'react-redux'
import { RootState } from '@/store.ts'
import { useEffect, useState } from 'react'
import dayjs from 'dayjs'

type UserInfoFormProps = {
  form: FormInstance
}

const UserInfoForm = ({ form }: UserInfoFormProps) => {
  const user = useSelector((state: RootState) => state.user.currentUser)
  const formValues = Form.useWatch([], form)
  const [isSubmittable, setIsSubmittable] = useState(false)
  useEffect(() => {
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
        birthday: dayjs(user?.birthday),
        address: {
          city: user?.address.city,
          county: user?.address.county,
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
        label="生日"
        name="birthday"
        validateTrigger="onBlur"
        className="w-full font-bold"
      >
        <DatePicker />
      </Form.Item>
      <ProfileAddressInput form={form} />
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          disabled={!isSubmittable}
          className="mt-4"
        >
          儲存設定
        </Button>
      </Form.Item>
    </Form>
  )
}

export default UserInfoForm
