import axios from '@/utils/axios.ts'

const users = {
  get: async () => {
    const response = await axios.get('/user')
    if (response.status) {
      return response.result
    } else {
      return null
    }
  },
}

export default users
