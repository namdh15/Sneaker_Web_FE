import { CREATE_ORDER } from "../types/orderType"

// For Add Item to Cart
export const createOrder = (order) => {
  return {
    type: CREATE_ORDER,
    payload: order
  }
}