import { API, handleErrorAPI } from "./setupAPI/api";

export const createOrder = async (payload) => {
  try {
    const res = await API.post(`/order/`, payload)
    return {
      data: res?.data,
      statusCode: res?.status
    }
  } catch (error) {
    return handleErrorAPI(error);
  }
}

export const checkoutOrder = async (payload) => {
    try {
      const formData = new FormData();
      formData.append('order_id', payload.order_id);
      const res = await API.post(`payment/billing/stripe`, formData)
      return {
        data: res?.data,
        statusCode: res?.status
      }
    } catch (error) {
      return handleErrorAPI(error);
    }
}

export const getOrderByUser = async () => {
  try {
    const res = await API.get(`get-order`)
    return {
      data: res?.data,
      statusCode: res?.status
    }
  } catch (error) {
    return handleErrorAPI(error);
  }
}