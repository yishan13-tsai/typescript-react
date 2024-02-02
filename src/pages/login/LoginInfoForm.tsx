import { Form, Input, ConfigProvider } from 'antd'
import { FormInstance } from 'antd/lib'

type UserInfoFormProps = {
  form: FormInstance
}

const UserInfoForm = ({ form }: UserInfoFormProps) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Form: {
            labelColor: "#fff"
          },
        },
      }}
    >
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
          label="電子信箱"
          name="email"
          rules={[{ required: true, message: '請輸入電子信箱' }]}
          validateTrigger="onBlur"
          className="w-full font-bold"
        >
          <Input placeholder="hello@example.com" />
        </Form.Item>
        <Form.Item
          label="密碼"
          name="password"
          rules={[{ required: true, message: '請輸入密碼' }]}
          validateTrigger="onBlur"
          className="w-full font-bold"
        >
          <Input.Password placeholder="請輸入密碼" />
        </Form.Item>
      </Form>
    </ConfigProvider>
  )
}

export default UserInfoForm
