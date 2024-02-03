import { Card, Col, Flex } from 'antd'
import { useSelector } from 'react-redux'
import { RootState } from '@/store.ts'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const UserInfo = () => {
  const currentUser = useSelector((state: RootState) => state.user.currentUser)
  const navigate = useNavigate()
  const { email } = currentUser || {}

  useEffect(() => {
    const isProd = process.env.NODE_ENV === 'production'
    if (!currentUser && isProd) {
      navigate('/login')
    }
  }, [currentUser, navigate])

  return (
    <Flex gap="40px">
      <Col className="grow">
        <Card title="修改密碼" className="p-10">
          <div>電子信箱：</div>
          <div>{email}</div>
          <div>密碼：</div>
          <div>************</div>
        </Card>
      </Col>
      <Col className="grow-2">
        <Card title="個人資料"></Card>
      </Col>
    </Flex>
  )
}
