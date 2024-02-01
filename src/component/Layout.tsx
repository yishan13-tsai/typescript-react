import { Link, Outlet } from 'react-router-dom'
import { Footer, Header } from 'antd/es/layout/layout'
import { Button, Image } from 'antd'
// import { getCookie } from '../utils/cookies.js.ts'
import { RootState } from '@/store.ts'
import { useSelector } from 'react-redux'

const Layout = () => {
  // const token = getCookie('token')
  const currentUser = useSelector((state: RootState) => state.user.currentUser)
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn)

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
          <Link to="/rooms">
            <Button className="text-neutral-0" type="text">
              客房預約
            </Button>
          </Link>
          {isLoggedIn ? (
            <Button className="text-neutral-0" type="text">
              {currentUser?.result?.name}
            </Button>
          ) : (
            <Link to="/login">
              <Button className="text-neutral-0" type="text">
                會員登入
              </Button>
            </Link>
          )}
          <Link to="/rooms">
            <Button type="primary">立即訂房</Button>
          </Link>
        </div>
      </Header>
      <div className="grow">
        <Outlet />
      </div>
      <Footer className="bg-neutral-120 px-[312px] py-20">
        <div className="flex justify-between mb-20">
          <div>
            <Image
              className="block"
              src="./LOGO.png"
              preview={false}
              width={196}
              height={72}
            ></Image>
            <div>line ig</div>
          </div>
          <div className="flex gap-20">
            <div className="">
              <div>
                <div>TEL</div>
                <div>+886-7-1234567</div>
              </div>
              <div>
                <div>FAX</div>
                <div>+886-7-1234567</div>
              </div>
            </div>
            <div className="">
              <div>
                <div>MAIL</div>
                <div>elh@hexschool.com</div>
              </div>
              <div>
                <div>WEB</div>
                <div>www.elhhexschool.com.tw</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div>806023 台灣高雄市新興區六角路123號</div>
          <div>© 享樂酒店 2023 All Rights Reserved.</div>
        </div>
      </Footer>
    </div>
  )
}

export default Layout
