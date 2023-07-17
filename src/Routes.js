import React from 'react'
import { Route,Routes } from 'react-router-dom'
import { CheckUserIsNotAuth,CheckUserisAuth } from './Components/Other/CheckAuth'
import AuthComponent from './Components/Authentication/AuthComponent';
import {AuthHeader,NoAuthHeader} from './Components/Layout/Header'
import {AuthFooter,NoAuthFooter} from './Components/Layout/Footer'

{/*User must be authenticated before he can have access to any of these routes*/}
export const TwitController =()=>{
    return(
        <>
            <AuthHeader />
                <Routes>
                    <Route element={<CheckUserisAuth />}>
                        <Route path="/" element={<p>Home page of the / path</p>}/>
                        <Route path="/lol" element={<p>lol page of the / path</p>}/>
                    </Route>
                </Routes>
            <AuthFooter />
        </>
    )
}

{/*Authenticated users can't access these routes*/}
export const Auth=()=>{
    return(
        <>
            <NoAuthHeader />
                <Routes>
                    <Route element={<CheckUserIsNotAuth />}>
                        <Route path='/' element={<AuthComponent/>} />
                    </Route>
                </Routes>
            <NoAuthFooter />
        </>
    )
}

{/*Authenticated users can't access these routes*/}
export const ExploreController =()=>{
    return(
    <Routes>
         <Route element={<CheckUserIsNotAuth />}>
            <Route path="/" element={<p>Home page of the /explore path</p>}/>
         </Route>
    </Routes>
    )
}
