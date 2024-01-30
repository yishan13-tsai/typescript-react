import { useState } from 'react'
import { Button, message, Steps } from 'antd'
import SignupStepOne from './signup/SignupStepOne'
import SignupStepTwo from './signup/SignupStepTwo'
import { Link } from 'react-router-dom'
import '../signup.css'

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
  const [current, setCurrent] = useState(0)

  const next = () => {
    setCurrent(current + 1)
  }

  const items = steps.map((item) => ({ key: item.title, title: item.title }))

  return (
    <>
      <div className="grid grid-cols-2 h-screen p-0">
        <div className="bg-black">
          <img
            className="h-full w-full object-cover object-center"
            src="../../src/assets/Login/login_bg.png"
            alt="login_bg"
          />
        </div>
        <div className="bg-neutral-100 text-neutral-0 pb-32 relative">
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
                      onClick={() => message.success('Processing complete!')}
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
      </div>
    </>
  )
}

export default Signup
