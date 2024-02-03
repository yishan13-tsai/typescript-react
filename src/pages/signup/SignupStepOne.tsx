import { Input, Form, ConfigProvider, Button } from 'antd'

interface Step1Props {
  onDataSubmit: (data: { email: string; password: string }) => void
  next: () => void
}

function SignupStepOne({ onDataSubmit, next }: Step1Props) {
  const onFinish = (values: { email: string; password: string }) => {
    onDataSubmit(values)
    next()
  }

  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Form: {
              labelColor: '#fff',
            },
          },
        }}
      >
        <Form
          name="step1Form"
          className="w-full"
          layout="vertical"
          initialValues={{ remember: true }}
          autoComplete="off"
          requiredMark={false}
          onFinish={onFinish}
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
          <Form.Item
            label="確認密碼"
            name="checkPassword"
            rules={[{ required: true, message: '請輸入密碼' }]}
            validateTrigger="onBlur"
            className="w-full font-bold"
          >
            <Input.Password placeholder="請再輸入一次密碼" />
          </Form.Item>
          <Form.Item>
            <Button
              style={{
                height: '56px',
                width: '100%',
                background: '#BF9D7D',
              }}
              type="primary"
              htmlType="submit"
            >
              下一步
            </Button>
          </Form.Item>
        </Form>
      </ConfigProvider>
    </>
  )
}

export default SignupStepOne
