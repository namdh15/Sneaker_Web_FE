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