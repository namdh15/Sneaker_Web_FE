import { configureStore } from '@reduxjs/toolkit';
import { thunk } from "redux-thunk";
import { initializeAuth } from './action/authAction';
import { tokenMiddleware } from '../middlewares/tokenMiddlewares';
import rootReducers from './reducer';
import { getLocalStorage, setLocalStorage } from '../utils/storageUtils';

export const loadState = () => {
  try {
    const serializedState = getLocalStorage("state");
    if (!serializedState) return undefined;
    else return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    setLocalStorage("state", serializedState);
  } catch (err) {
    console.log(err);
  }
};

const createAppStore = async () => {
  try {
    const persistedStore = loadState();
    const store = configureStore({
      reducer: rootReducers,
      middleware: [tokenMiddleware, thunk],
      persistedStore,
    })
    await store.dispatch(initializeAuth());
    store.subscribe(() => {
      saveState(store.getState());
    });

    return store;
  } catch (error) {
    console.log(error);
    throw new Error("Error")
  }
}

export default createAppStore;