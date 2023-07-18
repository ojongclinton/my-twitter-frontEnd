import React from 'react'
import { Outlet, Route,Routes } from 'react-router-dom'
import { CheckUserIsNotAuth,CheckUserisAuth } from './Components/Other/CheckAuth'
import AuthComponent from './Components/Authentication/AuthComponent';
import {AuthHeader,NoAuthHeader} from './Components/Layout/Header'
import {AuthFooter,NoAuthFooter} from './Components/Layout/Footer'
import { Grid } from '@mui/material';
import Right from './Components/Layout/Right';
import Left from './Components/Layout/Left';

{/*User must be authenticated before he can have access to any of these routes*/}
{/*---/----*/}

const LayOut = () =>{
    return(
        <div>
            <Grid container>
                <Grid item xl={2} lg={2}>
                    <Right />
                </Grid>
                <Grid item xl={7} lg={7}>
                    <Outlet />
                </Grid>
                <Grid item xl={3} lg={3}>
                    <Left />
                </Grid>
            </Grid> 
        </div>
    )
}
export const TwitController =()=>{
    return(
        <>
            <AuthHeader />
                <Routes>
                    <Route element={<CheckUserisAuth />}>
                        <Route element={<LayOut />}>
                            <Route path="/" element={<p>Home page of the / path</p>}/>
                            <Route path="/lol" element={<p>lol page of the / path</p>}/>
                        </Route>
                    </Route>
                </Routes>
            <AuthFooter />
        </>
    )
}

{/*Authenticated users can't access these routes*/}
{/*---/auth----*/}
export const Auth=()=>{
    return(
        <>
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
{/*---/explore----*/}
export const ExploreController =()=>{
    return(
        <>
            <NoAuthHeader />
                <Routes>
                    <Route element={<CheckUserIsNotAuth />}>
                        <Route element={<LayOut />}>
                            <Route path="/" element={<p>Home page of the /explore path</p>}/>
                        </Route>
                    </Route>
                </Routes>
            <NoAuthFooter />
        </>
    )
}
