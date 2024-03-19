import { API, handleErrorAPI } from "./setupAPI/api"

export const getProducts = async (payload = {}) => {
  try {
    // const { category, gender, color, min_price, max_price } = payload;
    // const createQuery = `/products?categories=${category}&gender=${gender}&color=${color}&min_price=${min_price}&max_price=${max_price}`

    const queryParams = Object.entries(payload)
      .filter(([key, value]) => value !== undefined)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');

    const createQuery = `/products${queryParams ? '?' + queryParams : ''}`;
    const res = await API.get(createQuery, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8"
      }
    });
    return res?.data;
  } catch (error) {
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