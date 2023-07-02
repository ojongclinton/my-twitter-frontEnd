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
              <AiOutlineTwitter color='white' size={200}/>
            </div>
          </Grid>
          <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
            <div className='authLinks'>

            </div>
          </Grid>
      </Grid>
      {/* <Button variant='outlined' onClick={showLoginModal}>Login</Button>
      <Button variant='contained' onClick={showRegisModal}>Register</Button> */}
      <div>
        <LoginModal loginModal={loginModal} setLoginModal={setLoginModal}/>
        <RegisterModal regisModal={regisModal} setRegisModal={setRegisModal}/>
      </div>
    </div>
  )
}

export default AuthComponent




