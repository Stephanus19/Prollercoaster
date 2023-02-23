import { configureStore } from "@reduxjs/toolkit";
import { accountSlice } from './accountSlice'
import { apiSlice } from './api'
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        [accountSlice.name]: accountSlice.reducer,
    },
    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware().concat(apiSlice.middleware);
    },
});

setupListeners(store.dispatch);
