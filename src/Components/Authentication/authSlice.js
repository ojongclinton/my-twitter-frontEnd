import { apiSlice } from "../../app/api/apiSlice";

const authSlice = apiSlice.injectEndpoints({
    endpoints:builder =>({
        register:builder.mutation({
            query:credentials =>({
                url:'/api/v1/auth/register',
                method:"POST",
                body:credentials
            })
        }),
    })
})

export const {
    useRegisterMutation
} =authSlice
