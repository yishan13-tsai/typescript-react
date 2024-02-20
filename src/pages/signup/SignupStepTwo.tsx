import { Input, Checkbox, Form, ConfigProvider, Button } from 'antd'
import AddressInput from '@/component/AddressInput'
import BirthDayInput from '@/component/BirthDayInput'
import { AddressType, BitrhDayType } from './types'

interface Step2Props {
  onDataSubmit: (data: {
    name: string
    birthday: BitrhDayType
    phone: string
    address: AddressType
  }) => void
}

function SignupStepTwo({ onDataSubmit }: Step2Props) {
  const onChange = (e: any) => {
    console.log(`checked = ${e.target.checked}`)
  }

  const [form] = Form.useForm()

  const onFinish = (values: {
    name: string
    birthday: BitrhDayType
    phone: string
    address: AddressType
  }) => {
    onDataSubmit(values)
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
          name="step2Form"
          className="w-full"
          layout="vertical"
          initialValues={{ remember: true }}
          autoComplete="off"
          requiredMark={false}
          form={form}
          onFinish={onFinish}
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
          <BirthDayInput />
          <AddressInput form={form} />
          <Checkbox className="text-neutral-0" onChange={onChange}>
            我已閱讀並同意本網站個資使用規範
          </Checkbox>
          <Form.Item>
            <Button
              style={{
                height: '56px',
                width: '100%',
                background: '#BF9D7D',
              }}
              className="mt-4"
              type="primary"
              htmlType="submit"
            >
              完成註冊
            </Button>
          </Form.Item>
        </Form>
      </ConfigProvider>
    </>
  )
}

export default SignupStepTwo
