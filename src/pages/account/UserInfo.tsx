import { Button, Card, Col, Flex, Form, Typography } from 'antd'
import { useSelector } from 'react-redux'
import { RootState } from '@/store.ts'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import UserInfoForm from '@/pages/order/UserInfoForm.tsx'
import { defaultUser, User } from '@/slice/userSlice.ts'

const { Title } = Typography

const UserProfile = ({
  user,
  onEditClick,
}: {
  user: User
  onEditClick: () => void
}) => {
  const {
    name,
    phone,
    birthday,
    address: { city, county, detail, zipcode },
  } = user

  return (
    <>
      <Title className="mt-0" level={2}>
        個人資料
      </Title>
      <Title level={5}>姓名</Title>
      <Title level={5}>{name}</Title>
      <Title level={5}>手機號碼</Title>
      <Title level={5}>{phone}</Title>
      <Title level={5}>生日</Title>
      <Title level={5}>{birthday.split('T')[0]}</Title>
      <Title level={5}>地址</Title>
      <Title level={5}>{zipcode + city + county + detail}</Title>
      <Button type="link" onClick={onEditClick}>
        編輯
      </Button>
    </>
  )
}

export const UserInfo = () => {
  const [isEdit, setIsEdit] = useState(false)
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
        <Card className="p-8">
          <Title className="mt-0" level={2}>
            修改密碼
          </Title>
          <Title level={5}>電子信箱</Title>
          <Title level={5}>{email}</Title>
          <Title level={5}>密碼</Title>
          <Title level={5}>************</Title>
          <Button className="absolute right-4 bottom-4" type="link">
            重設
          </Button>
        </Card>
      </Col>
      <Col className="grow-2">
        <Card className="p-8">
          {isEdit ? (
            <UserInfoForm form={form} />
          ) : (
            <UserProfile
              user={currentUser || defaultUser}
              onEditClick={() => {
                setIsEdit(true)
              }}
            />
          )}
        </Card>
      </Col>
    </Flex>
  )
}
