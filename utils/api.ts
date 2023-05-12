import axios from "axios";
import https from 'https';

export type HttpRequestError = {
  message: string
}

const httpsAgent = new https.Agent({ rejectUnauthorized: process.env.NODE_ENV !== 'development' })

const api = axios.create({ 
  baseURL: process.env.NEXT_PUBLIC_BACKEND,
  httpsAgent
})

export default api