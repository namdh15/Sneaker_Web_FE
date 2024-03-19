import { API, handleErrorAPI } from "./setupAPI/api"

export const register = async (formData) => {
  try {
    const res = await API.post('/auth/register', formData);
    return { data: res?.data, statusCode: res?.status, message: res?.statusText }
  } catch (error) {
    return handleErrorAPI(error);
  }
}

export const login = async (formData) => {
  try {
    const res = await API.post('/auth/login', formData);
    return { data: res?.data, statusCode: res?.status, message: res?.statusText }
  } catch (error) {
    return handleErrorAPI(error);
  }
}

