import { Form, Input, ConfigProvider, Button, Space, Modal } from 'antd'
import { useEffect, useState } from 'react'
import axios from '@/utils/axios.ts'
import { FormDataType } from './types'
import useSWRMutation from 'swr/mutation'
import { useNavigate } from 'react-router-dom'

type ApiResponse = {
  status: number
  token: string
}

type GetCodeFormType = {
  email: string
}

const submitPost = async (
  url: string,
  { arg }: { arg: GetCodeFormType | FormDataType },
): Promise<ApiResponse> => {
  return axios.post<ApiResponse>(url, arg).then((response) => {
    return response
  })
}

const ForgetPasswordForm = () => {
  const navigate = useNavigate()
  const [modal, contextHolder] = Modal.useModal()

  const [form] = Form.useForm()
  const formValues = Form.useWatch([], form)
  const [isCodeButtonDisabled, setIsCodeButtonDisabled] = useState(false)
  const [isGetCodePending, setIsGetCodePending] = useState(false)
  const fetchUrl = '/verify/generateEmailCode'
  const { trigger } = useSWRMutation(fetchUrl, submitPost)
  const [isSubmittable, setIsSubmittable] = useState(false)
  const { trigger: submitTrigger } = useSWRMutation('user/forgot', submitPost)

  const postData = {
    email: formValues?.email,
  }
  const getCode = async () => {
    setIsGetCodePending(true)
    try {
      await trigger(postData)
      await modal.info({ title: '驗證碼已發送' })
    } catch (e: any) {
      await modal.info({ title: e?.response?.data?.message || '請重新輸入' })
    }
    setIsGetCodePending(false)
  }

  useEffect(() => {
    setIsCodeButtonDisabled(Boolean(formValues?.email))
  }, [formValues?.email])

  useEffect(() => {
    form.validateFields({ validateOnly: true }).then(
      () => {
        setIsSubmittable(true)
      },
      () => {
        setIsSubmittable(false)
      },
    )
  }, [formValues])

  const handleSubmit = async () => {
    const submitPostData: FormDataType = {
      email: formValues.email,
      code: formValues.code,
      newPassword: formValues.newPassword,
    }
    try {
      await submitTrigger(submitPostData)
      await modal.info({ title: '修改密碼成功!' })

      setTimeout(() => navigate(`/login`), 1200)
    } catch (e: any) {
      await modal.info({ title: e?.response?.data?.message || '請重新輸入' })
    }
  }
  return (
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
          {/* todo 信箱郵件格式 */}
          <Input placeholder="hello@example.com" />
        </Form.Item>
        <Form.Item label="驗證碼">
          <Space align="start">
            <Form.Item
              name="code"
              rules={[{ required: true, message: '請輸入驗證碼' }]}
              validateTrigger="onBlur"
              className="font-bold"
            >
              <Input placeholder="請輸入驗證碼" />
            </Form.Item>
            <Button
              type="primary"
              disabled={!isCodeButtonDisabled}
              loading={isGetCodePending}
              onClick={() => {
                getCode()
              }}
            >
              取得驗證碼
            </Button>
          </Space>
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
        <div className="mb-10">
          <Button
            disabled={!isSubmittable}
            className="w-full"
            type="primary"
            onClick={() => {
              handleSubmit()
            }}
          >
            送出
          </Button>
        </div>
      </Form>
      {contextHolder}
    </ConfigProvider>
  )
}

export default ForgetPasswordForm
