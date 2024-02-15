import { Button, Card, Col, Flex, Form, Input, Typography } from 'antd'
import { useSelector } from 'react-redux'
import { RootState } from '@/store.ts'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { defaultUser, User } from '@/slice/userSlice.ts'
import UserInfoForm from '@/pages/account/UserInfoForm.tsx'
// import { FormDataType, UserProfileForm } from '@/types/form.model.tsx'

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
      <Button className="mt-4" type="default" onClick={onEditClick}>
        編輯
      </Button>
    </>
  )
}

type UserAccountInfoParams = {
  email: string
  onClick: () => void
}

const UserAccountInfo = (props: UserAccountInfoParams) => (
  <>
    <Title className="mt-0" level={2}>
      修改密碼
    </Title>
    <Title level={5}>電子信箱</Title>
    <Title level={5}>{props.email}</Title>
    <Title level={5}>密碼</Title>
    <Title level={5}>************</Title>
    <Button
      className="absolute right-4 bottom-4"
      type="link"
      onClick={props.onClick}
    >
      重設
    </Button>
  </>
)

export const UserInfo = () => {
  const [isEdit, setIsEdit] = useState(false)
  const currentUser = useSelector((state: RootState) => state.user.currentUser)
  const navigate = useNavigate()
  const { email } = currentUser || { email: '' }
  const [form] = Form.useForm()
  const formValues = Form.useWatch([], form)
  form.submit = () => {
    console.log('submit')
    // const postData: UserProfileForm = {
    //   address: {
    //     zipcode: formValues.address.city,
    //     detail: formValues.address.detail,
    //   },
    //   name: formValues.name,
    //   phone: formValues.phone,
    //   email: formValues.email,
    // }
    console.log({ formValues })
    // console.log({ postData })
  }

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
          {isEdit ? (
            <Form
              name="basic"
              className="w-full"
              layout="vertical"
              requiredMark={false}
              form={form}
              autoComplete="off"
            >
              <Title level={5}>電子信箱</Title>
              <Title level={5}>{email}</Title>
              <Form.Item
                label="舊密碼"
                name="oldPassword"
                rules={[{ required: true, message: '請輸入舊密碼' }]}
                validateTrigger="onBlur"
                className="w-full font-bold"
              >
                <Input placeholder="請輸入密碼" />
              </Form.Item>
              <Form.Item
                label="新密碼"
                name="newPassword"
                rules={[{ required: true, message: '請輸入新密碼' }]}
                validateTrigger="onBlur"
                className="w-full font-bold"
              >
                <Input placeholder="請輸入新密碼" />
              </Form.Item>
              <Form.Item
                label="確認新密碼"
                name="confirmNewPassword"
                rules={[{ required: true, message: '請輸入新密碼' }]}
                validateTrigger="onBlur"
                className="w-full font-bold"
              >
                <Input placeholder="請再次輸入新密碼" />
              </Form.Item>
            </Form>
          ) : (
            <UserAccountInfo
              email={email}
              onClick={() => {
                setIsEdit(true)
              }}
            />
          )}
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
