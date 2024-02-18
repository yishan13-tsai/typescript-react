import axios from '@/utils/axios.ts'

type PasswordData = {
  userId: string
  oldPassword: string
  newPassword: string
}

const users = {
  get: async () => {
    const response = await axios.get('/user')
    if (response.status) {
      return response.result
    } else {
      return null
    }
  },
  updatePassword: async (data: PasswordData) => {
    const response = await axios.put('/user', data)
    if (response.status) {
      return response.result
    } else {
      return null
    }
  },
}

export default users
