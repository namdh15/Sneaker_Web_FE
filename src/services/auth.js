import { API, handleErrorAPI } from "./setupAPI/api"

export const register = async (formatData) => {
  try {
    const res = await API.post('/auth/register', formatData);
    return res?.data
  } catch (error) {
    return handleErrorAPI(error);
  }
}

export const login = async (formData) => {
  try {
    const res = await API.post('/auth/login', formData);
    return res?.data
  } catch (error) {
    return handleErrorAPI(error);
  }
}

