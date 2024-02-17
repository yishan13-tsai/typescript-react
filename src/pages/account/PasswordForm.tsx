import { Button, Form, Input, Typography } from 'antd'
import { FormInstance } from 'antd/lib'

const { Title } = Typography

type PasswordFormProps = {
  form: FormInstance
  email: string
  onClick: () => void
}

export function PasswordForm(props: PasswordFormProps) {
  return (
    <Form
      name="basic"
      className="w-full"
      layout="vertical"
      requiredMark={false}
      form={props.form}
      autoComplete="off"
    >
      <Title level={5}>電子信箱</Title>
      <Title level={5}>{props.email}</Title>
      <Form.Item
        label="舊密碼"
        name="oldPassword"
        rules={[{ required: true, message: '請輸入舊密碼' }]}
        validateTrigger="onBlur"
        className="w-full font-bold"
      >
        <Input placeholder="請輸入密碼" />
      </Form.Item>
      <Form.Item
        label="新密碼"
        name="newPassword"
        rules={[{ required: true, message: '請輸入新密碼' }]}
        validateTrigger="onBlur"
        className="w-full font-bold"
      >
        <Input placeholder="請輸入新密碼" />
      </Form.Item>
      <Form.Item
        label="確認新密碼"
        name="confirmNewPassword"
        rules={[{ required: true, message: '請輸入新密碼' }]}
        validateTrigger="onBlur"
        className="w-full font-bold"
      >
        <Input placeholder="請再次輸入新密碼" />
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          // disabled
          onClick={props.onClick}
          className="mt-4"
        >
          儲存設定
        </Button>
      </Form.Item>
    </Form>
  )
}
