import { ADD_ITEM, DELETE_ITEM } from "../types/cartType"

// For Add Item to Cart
export const addCart = (product) => {
    return {
        type: ADD_ITEM,
        payload: product
    }
}

// For Delete Item to Cart
export const delCart = (product) => {
    return {
        type: DELETE_ITEM,
        payload: product
    }
}