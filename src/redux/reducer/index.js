import authReducer from './authReducer';
import cartReducer from './cartReducer'
import layoutReducer from './layoutReducer';

import { combineReducers } from "redux";

const rootReducers = combineReducers({
    cart: cartReducer,
    auth: authReducer,
    layout: layoutReducer,
})
export default rootReducers;