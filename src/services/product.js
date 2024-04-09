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
    const res = await API_ADMIN.post('/products', formData);
    return {
      data: res?.data,
      statusCode: res?.status
    }
  } catch (error) {
    return handleErrorAPI(error);
  }
}

export const deleteProduct = async (productId) => {
  try {
    const res = await API_ADMIN.delete(`/products/${productId}`)
    return res?.data
  } catch (error) {
    return handleErrorAPI(error);
  }
}

export const createNewVariant = async (productId, payload) => {
  try {
    const res = await API_ADMIN.post(`/products/${productId}/details/`, payload)
    return {
      data: res?.data,
      statusCode: res?.status
    }
  } catch (error) {
    return handleErrorAPI(error);
  }
}

export const updateVariant = async (productId) => {
  try {
    const res = await API_ADMIN.patch(`/products/${productId}/details/`)
    return {
      data: res?.data,
      statusCode: res?.status
    }
  } catch (error) {
    return handleErrorAPI(error);
  }
}

export const deleteVariant = async (variantId) => {
  try {
    const res = await API_ADMIN.delete(`/product-detail/${variantId}`)
    return {
      data: res?.data,
      statusCode: res?.status
    }
  } catch (error) {
    return handleErrorAPI(error);
  }
}