import { Box, Typography } from '@mui/material';
import React from 'react'
import { Element } from 'react-scroll';
import EmailForm from './EmailForm';


function Contact() {
  return (
    <>
      <Element name="contact" />
      <Box sx={{ paddingTop: {xs: '2rem', md: '10rem'}, paddingBottom:'4rem', px: {xs: '10px', md: '0'}, backgroundColor: '#124559', borderTop: '1px solid black', borderBottom: '1px solid black' }}>
        <Typography variant='h2' sx={{ width: 'fit-content', fontFamily: 'Righteous', mx: 'auto', color: '#d9d9d9', textShadow: '4px 3px 2px #000000' }}>Let's Chat!</Typography>
        <EmailForm />
      </Box> 
    </>
  )
}

export default Contact