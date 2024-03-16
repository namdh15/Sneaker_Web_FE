import { configureStore } from '@reduxjs/toolkit';
import { thunk } from "redux-thunk";
import { initializeAuth } from './action/authAction';
import { tokenMiddleware } from '../middlewares/tokenMiddlewares';
import rootReducers from './reducer';

const createAppStore = async () => {
    try {
        const store = configureStore({
            reducer: rootReducers,
            middleware: [tokenMiddleware, thunk]
        })
        await store.dispatch(initializeAuth());
        return store;
    } catch (error) {
        console.log(error);
        throw new Error("Error")
    }
}

export default createAppStore;