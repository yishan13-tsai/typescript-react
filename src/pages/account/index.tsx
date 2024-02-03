import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { Header } from 'antd/es/layout/layout'
import { Flex, Tabs } from 'antd'

const AccountPage = () => {
  const { tabId } = useParams()

  useEffect(() => {
    console.log({ tabId })
  }, [tabId])

  return (
    <div>
      <Header>
        <h1>Account</h1>
      </Header>
      <Flex>
        <Tabs
          items={[
            {
              key: 'profile',
              label: '個人資料',
              children: <div>個人資料</div>,
            },
            {
              key: 'order',
              label: '訂單紀錄',
              children: <div>訂單紀錄</div>,
            },
          ]}
          onChange={(id) => console.log(id)}
        ></Tabs>
      </Flex>
    </div>
  )
}

export default AccountPage
