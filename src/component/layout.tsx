import { Outlet } from 'react-router-dom'
import { Footer, Header } from 'antd/es/layout/layout'
import { Button, Image } from 'antd'
import { getCookie } from '../utils/cookies.js.ts'

const layout = () => {
  const token = getCookie('token')
  const user = { name: 'Jessica' }
  return (
    <div className="flex flex-col min-h-[100vh]">
      <Header className="justify-between flex py-6 px-20 h-[120px] bg-neutral-120 items-center">
        <div className="h-full">
          <Image
            className="block"
            src="./LOGO.png"
            preview={false}
            width={196}
            height={72}
          ></Image>
        </div>
        <div className="flex h-[65px] gap-4 items-center">
          <Button className="text-neutral-0" type="text">
            客房預約
          </Button>
          {token ? (
            <Button className="text-neutral-0" type="text">
              {user.name}
            </Button>
          ) : (
            <Button className="text-neutral-0" type="text">
              會員登入
            </Button>
          )}
          <Button type="primary">立即訂房</Button>
        </div>
      </Header>
      <div className="grow">
        <Outlet />
      </div>
      <Footer className="bg-neutral-120">
        <h1>Footer</h1>
      </Footer>
    </div>
  )
}

export default layout
