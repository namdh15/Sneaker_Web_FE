import authReducer from './authReducer';
import cartReducer from './cartReducer'
import layoutReducer from './layoutReducer';
import orderReducer from './orderReducer';

import { combineReducers } from "redux";

const rootReducers = combineReducers({
    cart: cartReducer,
    auth: authReducer,
    layout: layoutReducer,
    order: orderReducer
})
export default rootReducers;