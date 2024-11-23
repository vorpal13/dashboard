import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3001/',
})

axiosInstance.interceptors.request.use((config) => {
  config.headers['Content-Type'] = 'application/json'
  return config
})

export default axiosInstance
