import { Card, Col, Flex, Form } from 'antd'
import { useSelector } from 'react-redux'
import { RootState } from '@/store.ts'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import UserInfoForm from '@/pages/order/UserInfoForm.tsx'
import { Typography } from 'antd'

const { Title } = Typography

export const UserInfo = () => {
  const currentUser = useSelector((state: RootState) => state.user.currentUser)
  const navigate = useNavigate()
  const { email } = currentUser || {}
  const [form] = Form.useForm()

  useEffect(() => {
    const isProd = process.env.NODE_ENV === 'production'
    if (!currentUser && isProd) {
      navigate('/login')
    }
  }, [currentUser, navigate])

  return (
    <Flex gap="40px">
      <Col className="grow">
        <Card className="px-8 pb-8">
          <Title level={2}>修改密碼</Title>
          <Title level={5}>電子信箱：</Title>
          <Title level={5}>{email}</Title>
          <Title level={5}>密碼：</Title>
          <Title level={5}>************</Title>
        </Card>
      </Col>
      <Col className="grow-2">
        <Card className="px-8 pb-8">
          <Title level={2}>個人資料</Title>
          <UserInfoForm form={form} />
        </Card>
      </Col>
    </Flex>
  )
}
