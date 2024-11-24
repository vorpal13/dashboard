import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
})

axiosInstance.interceptors.request.use((config) => {
  config.headers['Content-Type'] = 'application/json'
  return config
})

export default axiosInstance
