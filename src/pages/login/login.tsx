import { Button, Checkbox, Form } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loginUser, User } from '@/slice/userSlice.ts'
import UserInfoForm from './LoginInfoForm'
import axios from '@/utils/axios.ts'
import { FormDataType } from './types'
import useSWRMutation from 'swr/mutation'
import NoticeModal from '@/component/NoticeModal'
import { useState } from 'react'

import bg from '@/assets/login/login_bg.png'

const Login = () => {
  const dispatch = useDispatch()
  const [form] = Form.useForm()
  const formValues = Form.useWatch([], form)
  const navigate = useNavigate()

  const [isOpenNoticeModal, setIsOpenNoticeModal] = useState(false)
  const [message, setMessage] = useState('');

  const fetchUrl = `user/login`

  type ApiResponse = {
    result: User
    status: number
    token: string
  }

  const submitPost = async (url: string, { arg }: { arg: FormDataType }): Promise<ApiResponse> => {
    return axios
      .post<ApiResponse>(url, arg)
      .then((response) => {
        return response
      })
  }

  const { trigger } = useSWRMutation(fetchUrl, submitPost)

  const handleSubmit = async () => {
    const postData: FormDataType = {
      email: formValues.email,
      password: formValues.password
    }

    try {
      const result = await trigger(postData)
      dispatch(loginUser(result?.result))
      localStorage.setItem('token', result?.token)
      setMessage('登入成功')
      setIsOpenNoticeModal(true)
      setTimeout(() => navigate(`/`), 1200)
    } catch(e: any) {
      setMessage(e.response.data.message)
      navigate(`/login`)
      setIsOpenNoticeModal(true)
      setTimeout(() => setIsOpenNoticeModal(false), 1200)
    }
  }

  return (
    <>
      <div className="grid md:grid-cols-2 p-0">
        <div className="hidden bg-black md:block">
          <img
            className="h-full w-full object-cover object-center"
            src={bg}
            alt="login_bg"
          />
        </div>
        <div className="h-screen bg-neutral-120 text-neutral-0 relative">
          <img
            className="h-187 w-full object-cover object-center absolute top-16"
            src="./Login/line.png"
            alt="line"
          />
          <div className="md:pt-0 md:w-full h-full flex justify-center items-center">
            <div className="md:w-1/2">
              <div className="mb-10">
                <p className="font-medium mb-2 tracking-normal text-primary-100">
                  享樂酒店，誠摯歡迎
                </p>
                <p className="font-bold m-0 text-5xl tracking-heading">
                  立即開始旅程
                </p>
              </div>

              <div className="font-medium">
                <UserInfoForm form={form} />
                <div className="flex justify-between items-end mb-10">
                  <Checkbox className="text-neutral-0" onChange={onChange}>
                    記住帳號
                  </Checkbox>
                  <Link to="/forgetPassword">忘記密碼</Link>
                </div>
              </div>
              <div className="mb-10">
                <Button
                  style={{
                    height: '56px',
                    width: '100%',
                    background: '#BF9D7D'
                  }}
                  type="primary"
                  onClick={() => {
                    handleSubmit()
                  }}
                >
                  會員登入
                </Button>
              </div>
              <span>沒有會員嗎？</span>
              <Link to="/signup">前往註冊</Link>
            </div>
          </div>
        </div>
        <NoticeModal isOpen={isOpenNoticeModal} message={message}/>
      </div>
    </>
  )
}

const onChange = (e: any) => {
  console.log(`checked = ${e.target.checked}`)
}

export default Login
