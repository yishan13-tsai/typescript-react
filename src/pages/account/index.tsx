import { Avatar, Row, Tabs } from 'antd'
import { UserOutlined } from '@ant-design/icons'

import { UserInfo } from '@/pages/account/UserInfo.tsx'
import { Orders } from '@/pages/account/Orders.tsx'
import Col from 'antd/es/col'
import { useSelector } from 'react-redux'
import { RootState } from '@/store.ts'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const AccountPage = () => {
  const currentUser = useSelector((state: RootState) => state.user.currentUser)
  const isProd = process.env.NODE_ENV === 'production'
  const navigate = useNavigate()
  const accountBgSrc =
    window.location.origin +
    (isProd ? '/typescript-react' : '') +
    '/account-bg.jpeg'

  useEffect(() => {
    currentUser || navigate('/login')
  }, [currentUser, navigate])

  return (
    <Row className="bg-neutral-120" justify="center">
      <Col span={24}>
        <div
          className="bg-cover bg-center h-[200px] flex items-center justify-start gap-5 text-1xl pl-20"
          style={{ backgroundImage: `url(${accountBgSrc})` }}
        >
          <Avatar size="large" icon={<UserOutlined />}></Avatar>
          <h1 className="text-neutral-40">Hello，{currentUser?.name}</h1>
        </div>
      </Col>
      <Col span={20} className="py-20">
        <Tabs
          items={[
            {
              key: 'profile',
              label: '個人資料',
              children: <UserInfo />,
            },
            {
              key: 'orders',
              label: '我的訂單',
              children: <Orders />,
            },
          ]}
          indicator={{ size: (origin) => origin - 20 }}
        />
      </Col>
    </Row>
  )
}

export default AccountPage
