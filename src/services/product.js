import { API, handleErrorAPI } from "./setupAPI/api"





export const getProducts = async (payload) => {
  try {
    const res = await API.get('products', payload, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8"
      }
    });
    return res?.data;
  } catch (error) {
    const { response } = error;
    if (response?.status === 403) {
      const { type, confirmationToken, info } = response.data || {};
      if (type === "inappropriateContent") {
        return { isInappropriate: true, data: null };
      } else if (type === "failedDetection") {
        return { confirmationToken, data: null };
      } else if (type === "categoryMismatch") {
        return { info, data: null };
      }
    }
    return handleErrorAPI(error);
  }
}

export const getProduct = async (productCode) => {
  try {
    const res = await API.get(`product/${productCode}`);
    return res?.data
  } catch (error) {

  }
}