import { configureStore, combineReducers } from "@reduxjs/toolkit";
import todosReducer from "./todos";

const rootRaducer = combineReducers({
    todos: todosReducer,
});

const store = configureStore({
    reducer: rootRaducer,
    devTools: process.env.NODE_ENV !== "production",
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispath = typeof store.dispatch;
