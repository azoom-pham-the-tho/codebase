import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./saga";
import authReducer from "../auth/auth.slice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";


const rootReduce = combineReducers({
  auth: authReducer,
});
const SagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: rootReduce,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(SagaMiddleware),
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
SagaMiddleware.run(rootSaga);
