import { Button, Form, Input, Typography } from 'antd'
import { FormInstance } from 'antd/lib'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/store.ts'

const { Title } = Typography

type PasswordFormProps = {
  form: FormInstance
}

const PasswordForm = ({ form }: PasswordFormProps) => {
  const [isSubmittable, setIsSubmittable] = useState(false)
  const user = useSelector((state: RootState) => state.user.currentUser)
  const email = user?.email
  const values = Form.useWatch([], form)

  useEffect(() => {
    form.validateFields({ validateOnly: true }).then(
      () => {
        setIsSubmittable(true)
      },
      () => {
        setIsSubmittable(false)
      },
    )
  }, [form, values])

  return (
    <Form
      name="basic"
      className="w-full"
      layout="vertical"
      requiredMark={false}
      form={form}
      autoComplete="off"
    >
      <Title level={5}>電子信箱</Title>
      <Title level={5}>{email}</Title>
      <Form.Item
        label="舊密碼"
        name="oldPassword"
        rules={[{ required: true, message: '請輸入舊密碼' }]}
        validateTrigger="onBlur"
        className="w-full font-bold"
      >
        <Input.Password placeholder="請輸入密碼" />
      </Form.Item>
      <Form.Item
        label="新密碼"
        name="newPassword"
        rules={[{ required: true, message: '請輸入新密碼' }]}
        validateTrigger="onBlur"
        className="w-full font-bold"
      >
        <Input.Password placeholder="請輸入新密碼" />
      </Form.Item>
      <Form.Item
        label="確認新密碼"
        name="confirmNewPassword"
        rules={[
          { required: true, message: '請輸入新密碼' },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('newPassword') === value) {
                return Promise.resolve()
              }
              return Promise.reject(new Error('兩次輸入的密碼不一致'))
            },
          }),
        ]}
        validateTrigger="onBlur"
        className="w-full font-bold"
      >
        <Input.Password placeholder="請再次輸入新密碼" />
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="mt-4"
          disabled={!isSubmittable}
        >
          儲存設定
        </Button>
      </Form.Item>
    </Form>
  )
}

export default PasswordForm
