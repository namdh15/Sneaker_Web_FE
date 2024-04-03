import { API, API_ADMIN, handleErrorAPI } from "./setupAPI/api"

export const getProducts = async (payload = {}) => {
  try {
    const queryParams = Object.entries(payload)
      .filter(([key, value]) => value !== undefined)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');

    const createQuery = `/products${queryParams ? '?' + queryParams : ''}`;
    const res = await API.get(createQuery);
    return res?.data;
  } catch (error) {
    return handleErrorAPI(error);
  }
}

export const getProduct = async (productId) => {
  try {
    const res = await API.get(`product/${productId}`);
    return res?.data
  } catch (error) {
    return handleErrorAPI(error);
  }
}

export const createProduct = async (formData) => {
  try {
    const res = await API_ADMIN.post('/product', formData);
    return res?.data
  } catch (error) {

  }
}

export const deleteProduct = async (productCode) => {
  try {
    const res = await API_ADMIN.delete(`/product/${productCode}`)
    return res?.data
  } catch (error) {
    return handleErrorAPI(error);
  }
}