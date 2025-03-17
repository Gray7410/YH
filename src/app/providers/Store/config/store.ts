import { configureStore } from "@reduxjs/toolkit";
import { ReducersMapObject } from "redux";
import { baseApi } from "@/shared/api/api";
import { questionsReducer } from "@/entities/Question";

const rootReducers: ReducersMapObject = {
  questionsPage: questionsReducer,
  //   questionDetailsPage: questionDetailsPageReducer,
  [baseApi.reducerPath]: baseApi.reducer,
};

export const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export type AppStore = typeof store;
