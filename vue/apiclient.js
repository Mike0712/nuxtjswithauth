import axios from 'axios'
import {CSR_API_URL, SSR_API_URL} from '@/constants'
let baseURL;
if (process.client) {
  baseURL = CSR_API_URL;
} else {
  baseURL = SSR_API_URL;
}

const apiclient = axios.create({
  baseURL: baseURL,
  withCredentials: true,
  headers: {'Content-Type': 'application/json;charset=UTF-8'}
})

export default apiclient;
