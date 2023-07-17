import { Navigate, Outlet } from "react-router-dom";
import React from 'react'

const auth = false;

export const CheckUserisAuth =()=>{
    if(auth){
        return(
            <Outlet />
        )
    }else{
        return(
            <Navigate to={"/auth"}/>
        )
    }
}

export const CheckUserIsNotAuth =()=>{
    if(!auth){
        return(
            <Outlet />
        )
    }else{
        return(
            <Navigate to={"/"}/>
        )
    }
    
}
