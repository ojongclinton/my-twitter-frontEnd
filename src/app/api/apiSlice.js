import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

// const BASE_URL = 'https://qklyq9d790.execute-api.us-east-1.amazonaws.com/staging/'
const BASE_URL = 'http://localhost:8080'

const baseQuery = fetchBaseQuery({
    baseUrl:BASE_URL,
    credentials:'omit',
    prepareHeaders:(headers,{getState})=>{
        const cookieParams = new URLSearchParams(document.cookie);
        const token = cookieParams.get("token");
        if(token?.length > 10){
            headers.set('authorization',`Bearer ${token}`)
        }
        return headers
    }
})

const baseQueryWithReauth= async (args,api,extraOptions)=>{
    let results = await baseQuery(args,api,extraOptions)

    return results
}

export const apiSlice = createApi({
    baseQuery:baseQueryWithReauth,
    endpoints:builder=>({})
})

