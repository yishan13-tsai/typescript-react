import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

const AccountPage = () => {
  const { tabId } = useParams()

  useEffect(() => {
    console.log({ tabId })
  }, [tabId])

  return (
    <div>
      <h1>Account</h1>
    </div>
  )
}

export default AccountPage
