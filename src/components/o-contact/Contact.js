import { Typography } from '@mui/material';
import React from 'react'
import { Element } from 'react-scroll';
import EmailForm from './EmailForm';


function Contact() {
  return (
    <div style={{ paddingTop: '10rem', paddingBottom: '4rem', backgroundColor: '#353535', borderTop: '1px solid black', borderBottom: '1px solid black' }}>
      <Element name="contact" />
      <Typography variant='h2' sx={{ width: 'fit-content', fontFamily: 'Righteous', mx: 'auto', color: '#d9d9d9', textShadow: '4px 3px 2px #000000' }}>Let's Chat!</Typography>
      <EmailForm />
    </div> 
  )
}

export default Contact