import { Link, Outlet, useNavigate } from 'react-router-dom'
import { Footer, Header } from 'antd/es/layout/layout'
import { Button, Image } from 'antd'
import { RootState } from '@/store.ts'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import useSWR from 'swr'
import { users } from '@/fetchers'
import { loginUser } from '@/slice/userSlice.ts'
import { MenuOutlined } from '@ant-design/icons'

const token = localStorage.getItem('token')
const Layout = () => {
  const currentUser = useSelector((state: RootState) => state.user.currentUser)
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn)
  const navigate = useNavigate()
  const { data: userData } = useSWR(token, users.get)
  const dispatch = useDispatch()

  useEffect(() => {
    userData && dispatch(loginUser(userData))
  }, [userData, dispatch])

  return (
    <div className="flex flex-col min-h-[100vh] overflow-x-hidden">
      <Header className="justify-between flex px-3 md:px-20 h-[72px] md:h-[120px] bg-neutral-120 items-center">
        <div className="h-full flex items-center">
          <Image
            className="block"
            src={import.meta.env.BASE_URL + 'LOGO.png'}
            preview={false}
            width={196}
            height={72}
          ></Image>
        </div>
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
          />
        </div>
      </Header>
      <div className="grow">
        <Outlet />
      </div>
      <Footer className="bg-neutral-120 py-20 px-0 text-neutral-0">
        <div className="max-w-[1296px] mx-auto">
          <div className="flex justify-between mb-20">
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
        </div>
      </Footer>
    </div>
  )
}

export default Layout
