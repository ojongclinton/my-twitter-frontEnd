import { Button, Grid } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import RegisterModal from './RegisterModal'
import LoginModal from './LoginModal'
import {AiOutlineTwitter} from 'react-icons/ai'

function AuthComponent() {
  const [loginModal,setLoginModal] = useState(false)
  const [regisModal,setRegisModal] = useState(false)

  const showLoginModal = () =>setLoginModal(true)
  const showRegisModal = () =>setRegisModal(true)

  return (
    <div className='authComponent'>
      <Grid container spacing={0}>
          <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
            <div className='birdContainer'>
              <AiOutlineTwitter color='white' size={300}/>
            </div>
          </Grid>
          <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
            <div className='authLinks'>
              <div>
                <h1>Happening Now</h1>
              </div>
              <div className='modalLinks'>
                <div>
                  <h3>Join My-Twit Today</h3>
                  <Button fullWidth variant='contained' onClick={showRegisModal}>Register</Button>
                </div>
                <div>
                  <h3>Already have an account ?</h3>
                  <Button fullWidth variant='outlined' onClick={showLoginModal}>Login</Button>
                </div>
              </div>
            </div>
          </Grid>
      </Grid>
      
      <div>
        <LoginModal loginModal={loginModal} setLoginModal={setLoginModal}/>
        <RegisterModal regisModal={regisModal} setRegisModal={setRegisModal}/>
      </div>
    </div>
  )
}

export default AuthComponent




