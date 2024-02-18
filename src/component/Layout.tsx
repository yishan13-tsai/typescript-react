import { Link, Outlet, useNavigate } from 'react-router-dom'
import { Footer, Header } from 'antd/es/layout/layout'
import { Button, Flex, Image } from 'antd'
import { RootState } from '@/store.ts'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { CloseOutlined, MenuOutlined } from '@ant-design/icons'

const Layout = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false)
  const currentUser = useSelector((state: RootState) => state.user.currentUser)
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn)
  const navigate = useNavigate()

  return (
    <div className="flex flex-col min-h-[100vh] overflow-x-hidden">
      {isMenuVisible ? (
        <Flex
          className="bg-neutral-120 h-full w-full fixed top-0 left-0 z-50 px-5 box-border"
          vertical
          justify="center"
        >
          <div className="fixed top-2 right-2">
            <Button
              type="link"
              className="text-neutral-0"
              icon={<CloseOutlined />}
              onClick={() => setIsMenuVisible(false)}
            ></Button>
          </div>
          <Link to="/rooms">
            <Button
              type="text"
              className="text-neutral-0 w-full"
              onClick={() => setIsMenuVisible(false)}
            >
              客房預約
            </Button>
          </Link>
          {isLoggedIn ? (
            <Link to="/account">
              <Button
                className="text-neutral-0 w-full"
                type="text"
                onClick={() => setIsMenuVisible(false)}
              >
                {currentUser?.name}
              </Button>
            </Link>
          ) : (
            <Link to="/login">
              <Button
                type="text"
                className="text-neutral-0 w-full"
                onClick={() => setIsMenuVisible(false)}
              >
                會員登入
              </Button>
            </Link>
          )}
          <Link to="/rooms">
            <Button
              type="primary"
              className="text-neutral-0 w-full"
              onClick={() => setIsMenuVisible(false)}
            >
              立即訂房
            </Button>
          </Link>
        </Flex>
      ) : null}
      <Header className="justify-between flex px-3 md:px-20 h-[72px] md:h-[120px] bg-neutral-120 items-center">
        <Link to="/">
          <div className="h-full flex items-center">
            <Image
              className="block"
              src={import.meta.env.BASE_URL + 'LOGO.png'}
              preview={false}
              width={196}
              height={72}
            ></Image>
          </div>
        </Link>
        <div className="md:flex h-[65px] gap-4 items-center hidden">
          <Link to="/rooms">
            <Button className="text-neutral-0" type="text">
              客房預約
            </Button>
          </Link>
          {isLoggedIn ? (
            <Button
              className="text-neutral-0"
              type="text"
              onClick={() => navigate('/account')}
            >
              {currentUser?.name}
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
        <div className="flex h-[65px] gap-4 items-center md:hidden">
          <Button
            className="text-neutral-0"
            type="text"
            icon={<MenuOutlined />}
            size="small"
            onClick={() => {
              setIsMenuVisible(true)
            }}
          />
        </div>
      </Header>
      <div className="grow">
        <Outlet />
      </div>
      <Footer className="bg-neutral-120 py-20 px-4 text-neutral-0">
        <div className="max-w-[1296px] mx-auto">
          <div className="flex justify-between mb-20 flex-wrap">
            <div>
              <Image
                className="block"
                src={import.meta.env.BASE_URL + 'LOGO.png'}
                preview={false}
                width={196}
                height={72}
              ></Image>
              <div>line ig</div>
            </div>
            <div className="flex gap-4 flex-wrap sm:gap-20 leading-loose">
              <div>
                <div>
                  <div>TEL</div>
                  <div>+886-7-1234567</div>
                </div>
                <div>
                  <div>FAX</div>
                  <div>+886-7-1234567</div>
                </div>
              </div>
              <div>
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
          <div className="flex justify-between flex-wrap leading-loose">
            <div>806023 台灣高雄市新興區六角路123號</div>
            <div>© 享樂酒店 2023 All Rights Reserved.</div>
          </div>
        </div>
      </Footer>
    </div>
  )
}

export default Layout
