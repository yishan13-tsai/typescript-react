import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://ts-hotel-api.onrender.com/api/v1/',
})

axiosInstance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem('token')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  },
)

export default axiosInstance
