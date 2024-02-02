import { Form, Input } from 'antd'
import AddressInput from '@/component/AddressInput'
import { FormInstance } from 'antd/lib'

type UserInfoFormProps = {
  form: FormInstance
}

const UserInfoForm = ({ form }: UserInfoFormProps) => {
  return (
    <Form
      name="basic"
      className="w-full"
      layout="vertical"
      initialValues={{ remember: true }}
      form={form}
      autoComplete="off"
      requiredMark={false}
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

export default UserInfoForm
