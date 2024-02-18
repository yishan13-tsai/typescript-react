import axios from '@/utils/axios.ts'
import { FormPassword, UserProfileForm } from '@/types/form.model.tsx'

const users = {
  get: async () => {
    const response = await axios.get('/user')
    if (response.status) {
      return response.result
    } else {
      return null
    }
  },
  updatePassword: async (data: FormPassword) => {
    const response = await axios.put('/user', data)
    if (response.status) {
      return response.result
    } else {
      return null
    }
  },
  updateProfile: async (data: UserProfileForm) => {
    const response = await axios.put('/user', data)
    if (response.status) {
      return response.result
    } else {
      return null
    }
  },
}

export default users
