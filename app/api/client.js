import { create } from 'apisauce'

const apiClient = create({
  baseURL: 'http://192.168.100.114:9000/api',
})

export default apiClient
