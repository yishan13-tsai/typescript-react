import { Button, Checkbox, Input } from 'antd'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loginUser } from '@/slice/userSlice.ts'

const Login = () => {
  const dispatch = useDispatch()

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
        <div className="bg-neutral-100 text-neutral-0 relative">
          <img
            className="h-187 w-full object-cover object-center absolute top-16"
            src="../../src/assets/Login/line.png"
            alt="line"
          />
          <div className="w-full h-full flex justify-center items-center">
            <div className="w-1/2">
              <div className="mb-10">
                <p className="font-medium mb-2 tracking-normal text-primary-100">
                  享樂酒店，誠摯歡迎
                </p>
                <p className="font-bold m-0 text-5xl tracking-heading">
                  立即開始旅程
                </p>
              </div>
              <div className="font-medium">
                <div className="mb-4">
                  <label className="inline-block mb-2">電子信箱</label>
                  <Input
                    style={{ height: '56px' }}
                    size="large"
                    placeholder="hello@example.com"
                  />
                </div>
                <div className="mb-4">
                  <label className="inline-block mb-2">密碼</label>
                  <Input.Password
                    style={{ height: '56px' }}
                    size="large"
                    placeholder="請輸入密碼"
                  />
                </div>
                <div className="flex justify-between items-end mb-10">
                  <Checkbox className="text-neutral-0" onChange={onChange}>
                    記住帳號
                  </Checkbox>
                  <a href="">忘記密碼?</a>
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
                    // after login success
                    dispatch(loginUser({ result: { name: 'user name' } }))
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
      </div>
    </>
  )
}

const onChange = (e: any) => {
  console.log(`checked = ${e.target.checked}`)
}

export default Login
