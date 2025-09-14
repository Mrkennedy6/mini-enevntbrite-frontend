import axios from "axios"; 63.1k (gzipped: 23.3k)
import useAuth from '../hooks/useAuth'

const http = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || '/',
    timeout: Number(import.meta.env.VITE_API_TIMEOUT || 15000)
})

http.interceptors.resquest.use((config)=>{
    conts {token} = useAuth.getState()
    if(token) config.header.Authorization = `Baerer ${token}`
    return config
})
http.interceptors.resquest.use((res)=> res,
(error) => {
    const message = error?.response?.data?.message || error?.message || 'Error de red'
    return Promise.reject(new Error(message))
})

export default http