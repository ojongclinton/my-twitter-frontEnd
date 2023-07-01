import { createSlice } from '@reduxjs/toolkit'
import jwt from 'jwt-decode'


const initialUserDef = {
    userDetails:{
        id:null,
        firstName:null,
        lastName:null,
        email:null
    },
    token:null
}

const initialState = localStorage.getItem('myTwitUsertData')??JSON.stringify(initialUserDef)

const userSlice = createSlice({
    name:"user",
    initialState : JSON.parse(initialState),
    reducers:{
        setCredentials:(state,action)=>{

            console.log("Setting credentials in the state")

            const userObj = jwt(action.payload)
            state.userDetails['id'] = userObj.id
            state.userDetails['firstName'] = userObj.firstName
            state.userDetails['lastName'] = userObj.lastName
            state.userDetails['email'] = userObj.email

            localStorage.setItem("myTwitUsertData",JSON.stringify(state))
        },

        logOut:(state,action)=>{

            console.log("Logging out user from State")

            localStorage.removeItem("myTwitUsertData")
            state.userDetails['id'] = null
            state.userDetails['firstName'] = null
            state.userDetails['lastName'] = null
            state.userDetails['email'] = null
        }
    }
})

export const {setCredentials,logOut} = userSlice.actions
export default userSlice.reducer

export const selectCurrentUser = (state) => state.auth.userDetails
export const selectUserToken = (state) => state.auth.token
