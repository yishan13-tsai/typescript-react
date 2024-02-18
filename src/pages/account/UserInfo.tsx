import { Button, Card, Col, Flex, Form, Typography } from 'antd'
import { useSelector } from 'react-redux'
import { RootState } from '@/store.ts'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { defaultUser } from '@/slice/userSlice.ts'
import UserInfoForm from '@/pages/account/UserInfoForm.tsx'
import PasswordForm from '@/pages/account/PasswordForm.tsx'
import { users } from '@/fetchers'
import NoticeModal from '@/component/NoticeModal.tsx'

const { Title } = Typography

const UserProfile = ({ onEditClick }: { onEditClick: () => void }) => {
  const user =
    useSelector((state: RootState) => state.user.currentUser) || defaultUser
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
  onClick: () => void
}

const UserAccountInfo = ({ onClick }: UserAccountInfoParams) => {
  const user = useSelector((state: RootState) => state.user.currentUser)
  const email = user?.email
  return (
    <>
      <Title className="mt-0" level={2}>
        修改密碼
      </Title>
      <Title level={5}>電子信箱</Title>
      <Title level={5}>{email}</Title>
      <Title level={5}>密碼</Title>
      <Title level={5}>************</Title>
      <Button
        className="absolute right-4 bottom-4"
        type="link"
        onClick={onClick}
      >
        重設
      </Button>
    </>
  )
}

export const UserInfo = () => {
  const [isEdit, setIsEdit] = useState(false)
  const [isPasswordEdit, setIsPasswordEdit] = useState(false)
  const [isOpenNoticeModal, setIsOpenNoticeModal] = useState(false)
  const [message, setMessage] = useState('')
  const currentUser = useSelector((state: RootState) => state.user.currentUser)
  const navigate = useNavigate()
  const [form] = Form.useForm()
  const [passwordForm] = Form.useForm()
  const formValues = Form.useWatch([], form)
  const passwordFormValues = Form.useWatch([], passwordForm)

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

  passwordForm.submit = () => {
    if (currentUser?._id) {
      users
        .updatePassword({
          userId: currentUser?._id,
          oldPassword: passwordFormValues.oldPassword,
          newPassword: passwordFormValues.newPassword,
        })
        .then(() => {
          setIsOpenNoticeModal(true)
          setMessage('密碼修改成功')
        })
        .catch(() => {
          setIsOpenNoticeModal(true)
          setMessage('密碼修改失敗')
        })
        .finally(() => {
          setIsPasswordEdit(false)
          setTimeout(() => setIsOpenNoticeModal(false), 1200)
          passwordForm.resetFields()
        })
    }
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
          {isPasswordEdit ? (
            <PasswordForm form={passwordForm} />
          ) : (
            <UserAccountInfo onClick={() => setIsPasswordEdit(true)} />
          )}
        </Card>
      </Col>
      <Col className="grow-2">
        <Card className="p-8">
          {isEdit ? (
            <UserInfoForm form={form} />
          ) : (
            <UserProfile onEditClick={() => setIsEdit(true)} />
          )}
        </Card>
      </Col>
      <NoticeModal isOpen={isOpenNoticeModal} message={message} />
    </Flex>
  )
}
