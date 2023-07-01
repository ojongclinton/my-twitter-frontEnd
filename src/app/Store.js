import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './api/apiSlice'
import  userReducer from './features/userSlice'

export const store = configureStore({
    reducer:{
        [apiSlice.reducerPath]:apiSlice.reducer,
        auth:userReducer
    }, 
    middleware:getDefaultMiddleware =>
        getDefaultMiddleware({serializableCheck:false}).concat(apiSlice.middleware),
    devTools:false
})
