import {
  Input,
  Checkbox,
  Form,
  ConfigProvider,
} from 'antd'
import AddressInput from '@/component/AddressInput'
import BirthDayInput from '@/component/BirthDayInput'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { getName, getPhone, getBirthday, getAddress } from '@/slice/signupSlice'

function SignupStepTwo() {
  const onChange = (e: any) => {
    console.log(`checked = ${e.target.checked}`)
  }

  const dispatch = useDispatch();
  const [form] = Form.useForm()
  const formValues = Form.useWatch([], form)

  useEffect(() => {
    form.validateFields({ validateOnly: true }).then(
      () => {
        dispatch(getName(formValues.name));
        dispatch(getPhone(formValues.phone));
        dispatch(getBirthday(
          `${formValues.birthday.year}/${formValues.birthday.month}/${formValues.birthday.day}`));
        dispatch(getAddress(
          {
            zipcode: formValues.address.district            ,
            detail: formValues.address.detail
          }
        ));
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
          <BirthDayInput/>
          <AddressInput form={form}/>
          <Checkbox className="text-neutral-0" onChange={onChange}>
            我已閱讀並同意本網站個資使用規範
          </Checkbox>
        </Form>
      </ConfigProvider>
    </>
  )
}

export default SignupStepTwo
