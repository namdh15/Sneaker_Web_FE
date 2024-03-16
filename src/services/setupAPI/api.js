import axios from "axios";


const BASE_URL = process.env.REACT_APP_API_URL;

export const API = axios.create({
  baseURL: BASE_URL
})

API.interceptors.request.use((req) => {
  req.headers["Content-Type"] = 'application/json';
  return req;
});

export const handleErrorAPI = async (error) => {
  try {
    const errorMessage = error.response?.data?.message || "Exist an error";
    const data = null;
    return { error: errorMessage, data }
  } catch (error) {
    throw new Error("Exist an error")
  }
}