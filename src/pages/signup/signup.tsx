import { useEffect, useState } from 'react'
import { Steps } from 'antd'
import SignupStepOne from './SignupStepOne'
import SignupStepTwo from './SignupStepTwo'
import { Link, useNavigate } from 'react-router-dom'
import './signup.css'
import { useDispatch } from 'react-redux'
import {
  setName,
  setEmail,
  setPassword,
  setPhone,
  setBirthday,
  setAddress,
} from '@/slice/signupSlice'
import { Step1DataType, Step2DataType, FormDataType } from './types'
import axios from '@/utils/axios'
import useSWRMutation from 'swr/mutation'
import NoticeModal from '@/component/NoticeModal'

function Signup() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const initialState: Step2DataType = {
    name: '',
    phone: '',
    birthday: {
      year: 1,
      month: 1,
      day: 1,
    },
    address: {
      city: 1,
      detail: '',
      district: '',
    },
  }

  const [step1Data, setStep1Data] = useState<Step1DataType>({
    email: '',
    password: '',
  })
  const [step2Data, setStep2Data] = useState<Step2DataType>(initialState)

  const next = () => {
    setCurrent(current + 1)
  }
  const clickSignupButton = () => {
    setIsSingup(true)
    console.log('step1Data', step1Data, step2Data)
    console.log('clickSignupButton')
  }

  useEffect(() => {
    dispatch(setEmail(step1Data.email))
    dispatch(setPassword(step1Data.password))
    dispatch(setName(step2Data.name))
    dispatch(setPhone(step2Data.phone))
    dispatch(setBirthday(step2Data.birthday))
    dispatch(setAddress(step2Data.address))
  }, [step1Data, step2Data, dispatch])

  const steps = [
    {
      title: '輸入信箱及密碼',
      content: (
        <SignupStepOne
          onDataSubmit={(data) => setStep1Data(data)}
          next={next}
        />
      ),
    },
    {
      title: '填寫基本資料',
      content: (
        <SignupStepTwo
          onDataSubmit={(data) => setStep2Data(data)}
          clickSignupButton={clickSignupButton}
        />
      ),
    },
  ]

  const [current, setCurrent] = useState(0)
  const [apiParams, setApiParams] = useState({
    name: 'joyce',
    email: 'ddd@gmail.com',
    password: 'hsu1234567',
    phone: '0978800885',
    birthday: '1982/2/4',
    address: {
      zipcode: '802',
      detail: '文山路23號',
    },
  })

  const [signup, setIsSingup] = useState(false)

  const [isOpenNoticeModal, setIsOpenNoticeModal] = useState(false)

  const [message, setMessage] = useState('')

  const items = steps.map((item) => ({ key: item.title, title: item.title }))

  useEffect(() => {
    if (signup) {
      setApiParams({
        name: step2Data.name,
        email: step1Data.email,
        password: step1Data.password,
        phone: step2Data.phone,
        birthday: `${step2Data.birthday.year}/${step2Data.birthday.month}/${step2Data.birthday.day}`,
        address: {
          zipcode: step2Data.address.district,
          detail: step2Data.address.detail,
        },
      })
    }
  }, [signup, step1Data, step2Data])

  useEffect(() => {
    if (signup && apiParams) {
      setApiParams(() => ({
        name: step2Data.name,
        email: step1Data.email,
        password: step1Data.password,
        phone: step2Data.phone,
        birthday: `${step2Data.birthday.year}/${step2Data.birthday.month}/${step2Data.birthday.day}`,
        address: {
          zipcode: step2Data.address.district,
          detail: step2Data.address.detail,
        },
      }))

      handleSubmit(apiParams)
      setIsSingup(false)
    }
  }, [signup])

  const fetchUrl = `user/signup`

  type ApiResponse = {
    result?: any
    status: number
  }

  const submitPost = async (
    url: string,
    { arg }: { arg: FormDataType },
  ): Promise<ApiResponse> => {
    return axios.post<ApiResponse>(url, arg).then((response) => {
      return response
    })
  }

  const { trigger } = useSWRMutation(fetchUrl, submitPost)

  const handleSubmit = async (apiParams: FormDataType) => {
    try {
      const result = await trigger(apiParams)
      console.log(result)

      setMessage('註冊成功')
      setIsOpenNoticeModal(true)
      setTimeout(() => navigate(`/login`), 1200)
    } catch (e: any) {
      setMessage(e.response.data.message)
      navigate(`/signup`)
      setIsOpenNoticeModal(true)
      setTimeout(() => setIsOpenNoticeModal(false), 1200)
    }
  }

  return (
    <>
      <div className="grid md:grid-cols-2 p-0">
        <div className="hidden md:block bg-black">
          <img
            className="h-full w-full object-cover object-center"
            src="./Login/login_bg.png"
            alt="login_bg"
          />
        </div>
        <div className="bg-neutral-120 text-neutral-0 pb-32 relative">
          <img
            className="h-187 w-full object-cover object-center absolute top-16"
            src="./Login/line.png"
            alt="line"
          />
          <div className="w-full flex justify-center items-center mt-32">
            <div className="w-full p-8 md:w-1/2 md:p-0">
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
                <span>已經有會員了嗎？</span>
                <Link to="/login">立即登入</Link>
              </div>
            </div>
          </div>
        </div>
        <NoticeModal isOpen={isOpenNoticeModal} message={message} />
      </div>
    </>
  )
}

export default Signup
