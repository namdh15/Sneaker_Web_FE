import { CREATE_ORDER } from "../types/orderType"

// For Add Item to Cart
export const createOrderToCart = (order) => {
  return {
    type: CREATE_ORDER,
    payload: order
  }
}