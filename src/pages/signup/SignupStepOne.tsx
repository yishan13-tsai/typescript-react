import { Input, Form, ConfigProvider } from 'antd'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { getEmail, getPassword } from '@/slice/signupSlice'

function SignupStepOne() {
  const dispatch = useDispatch();
  const [form] = Form.useForm()
  const formValues = Form.useWatch([], form)

  useEffect(() => {
    form.validateFields({ validateOnly: true }).then(
      () => {
        dispatch(getEmail(formValues.email));
        dispatch(getPassword(formValues.password));
      },
      () => {
        // handleSubmittable(false)
      },
    )
  }, [formValues])
  
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
          name="basic"
          className="w-full"
          layout="vertical"
          initialValues={{ remember: true }}
          autoComplete="off"
          requiredMark={false}
          form={form}
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
        </Form>
      </ConfigProvider>
    </>
  )
}

export default SignupStepOne
