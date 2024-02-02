import { useEffect, useState } from 'react'
import { Button, message, Steps } from 'antd'
import SignupStepOne from './SignupStepOne'
import SignupStepTwo from './SignupStepTwo'
import { Link, useNavigate } from 'react-router-dom'
import './signup.css'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import { FormDataType } from './types'
import axios from '@/utils/axios'
import useSWRMutation from 'swr/mutation'
import NoticeModal from '@/component/NoticeModal'

const steps = [
  {
    title: '輸入信箱及密碼',
    content: <SignupStepOne />,
  },
  {
    title: '填寫基本資料',
    content: <SignupStepTwo />,
  },
]

function Signup() {
  const navigate = useNavigate()
  const [current, setCurrent] = useState(0)
  const [apiParams, setApiParams] = useState({
    name: "joyce",
    email: "ddd@gmail.com",
    password: "hsu1234567",
    phone: "0978800885",
    birthday: "1982/2/4",
    address: {
        zipcode: "802",
        detail: "文山路23號"
    }
  })

  const [signup, setIsSingup] = useState(false)

  const [isOpenNoticeModal, setIsOpenNoticeModal] = useState(false)
  const [message, setMessage] = useState('');
  const next = () => {
    setCurrent(current + 1)
  }

  const items = steps.map((item) => ({ key: item.title, title: item.title }))
  const name = useSelector((state: RootState) => state.signup.name)
  const email = useSelector((state: RootState) => state.signup.email)
  const password = useSelector((state: RootState) => state.signup.password)
  const phone = useSelector((state: RootState) => state.signup.phone)
  const birthday = useSelector((state: RootState) => state.signup.birthday)
  const address = useSelector((state: RootState) => state.signup.address)

  useEffect(() => {
    if (signup) {
      setApiParams(() => ({
        name,
        email,
        password,
        phone,
        birthday,
        address
      }));

      handleSubmit()
      setIsSingup(false)
    }
  }, [signup]);



  function clickSignupButton() {
    setIsSingup(true);
    // const name = useSelector((state: RootState) => state.signup.name)
    // const email = useSelector((state: RootState) => state.signup.email)
    // const password = useSelector((state: RootState) => state.signup.password)
    // const phone = useSelector((state: RootState) => state.signup.phone)
    // const birthday = useSelector((state: RootState) => state.signup.birthday)
    // const address = useSelector((state: RootState) => state.signup.address)

    // console.log(name, email, password, phone, birthday, address)
    console.log(apiParams.name)
    console.log('clickSignupButton', )
  }


  const fetchUrl = `user/signup`

  type ApiResponse = {
    result?: any
    status: number
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
    const postData: FormDataType = apiParams

    try {
      const result = await trigger(postData)
      console.log(result);
      setMessage('註冊成功')
      setIsOpenNoticeModal(true)
      setTimeout(() => navigate(`/login`), 1200)
    } catch(e: any) {
      setMessage(e.response.data.message)
      navigate(`/signup`)
      setIsOpenNoticeModal(true)
      setTimeout(() => setIsOpenNoticeModal(false), 1200)
    }
  }

  return (
    <>
      <div className="grid grid-cols-2 p-0">
        <div className="bg-black">
          <img
            className="h-full w-full object-cover object-center"
            src="../../src/assets/Login/login_bg.png"
            alt="login_bg"
          />
        </div>
        <div className="bg-neutral-120 text-neutral-0 pb-32 relative">
          <img
            className="h-187 w-full object-cover object-center absolute top-16"
            src="../../src/assets/Login/line.png"
            alt="line"
          />
          <div className="w-full flex justify-center items-center mt-32">
            <div className="w-1/2">
              <div className="mb-8">
                {current < steps.length - 1 && (
                  <p className="font-medium mb-2 tracking-normal text-primary-100">
                    享樂酒店，誠摯歡迎
                  </p>
                )}
                <p className="font-bold m-0 text-5xl tracking-heading">
                  立即註冊
                </p>
              </div>
              <Steps
                className="mb-10 step_custom"
                current={current}
                items={items}
                labelPlacement="vertical"
              />
              <div>
                {steps[current].content}
                <div className="mb-4">
                  {current < steps.length - 1 && (
                    <Button
                      style={{
                        height: '56px',
                        width: '100%',
                        background: '#BF9D7D',
                      }}
                      type="primary"
                      onClick={() => next()}
                    >
                      下一步
                    </Button>
                  )}
                </div>
                <div className="mb-4">
                  {current === steps.length - 1 && (
                    <Button
                      style={{
                        height: '56px',
                        width: '100%',
                        background: '#BF9D7D',
                      }}
                      type="primary"
                      onClick={() => clickSignupButton()}
                    >
                      完成註冊
                    </Button>
                  )}
                </div>
                <span>已經有會員了嗎？</span>
                <Link to="/login">立即登入</Link>
              </div>
            </div>
          </div>
        </div>
        <NoticeModal isOpen={isOpenNoticeModal} message={message}/>
      </div>
    </>
  )
}

export default Signup
