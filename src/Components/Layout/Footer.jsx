import { Grid } from '@mui/material'
import React from 'react'


const footerLinks = [
  {name:"About us",link:"#"},
  {name:"Help Center",link:"#"},
  {name:"Privacy policy",link:"#"},
  {name:"Terms of Service",link:"#"},
  {name:"Cookie Policy",link:"#"},
  {name:"Advertising",link:"#"},
  {name:"Marketing",link:"#"},
  {name:"Buisiness",link:"#"},
  {name:"Developpers",link:"#"},
  {name:"Settings",link:"#"},
  {name:"Directory",link:"#"},
  {name:"@ 2023 excorp",link:"#"},
  {name:"Advertising",link:"#"},
  {name:"Ads Info",link:"#"}
]

export const AuthFooter =()=>{
  return(
    <p>User is Auth</p>
  )
}

export const NoAuthFooter =()=>{
  return(
    <p>
      <div className='footerContainer'>
        <div className='footerDiv'>
          <Grid container>
            {footerLinks.map((link,index)=>{
              return(
                <Grid item xl={1} lg={1} md={3} sm={3} xs={2}>
                    <a key={index} href={link.link}>{link.name}</a>
                </Grid>
                )
              })}
          </Grid>
        </div>
      </div>
    </p>
  )
}
