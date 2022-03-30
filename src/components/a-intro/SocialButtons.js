import React from 'react';import { Box } from "@mui/system"
import SmoothList from "react-smooth-list"
import githubIcon from '../../images/icons8-github.svg'
import linkdInIcon from '../../images/icons8-linkedin.svg'
import emailIcon from '../../images/icons8-email.svg'
import { IconButton, useMediaQuery } from "@mui/material"

const iconButtonStyle = {
  width: '100%',
  height: '100%',
  transition: '.1s',
  '&:hover':{
    opacity: '.5',
    transition: '.1s'
  },
}

function SocialButtons() {
  const mobile = !useMediaQuery('(min-width:600px)');

  return (
    <Box sx={{ margin: mobile? 'auto 0 auto 0' : 'auto 0 auto auto' }}>
      <SmoothList className='smoothlist' childClassName='smoothlistChild' duration={600} delay={100}>
        <Box className='iconBox'>
          <a target='_blank' rel="noreferrer" href={'https://github.com/zach-ferguson'}>
            <IconButton sx={ iconButtonStyle }>
              <img style={{ width: {xs: '80%', md: '100%'}, height: {xs: '80%', md: '100%'}, margin: 'auto' }} alt='github-icon' src={githubIcon}/>
            </IconButton>
          </a>
        </Box>
        <Box className='iconBox'> 
          <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/zachary-ferguson-430724206/">
            <IconButton sx={ iconButtonStyle }>
              <img style={{ width: {xs: '80%', md: '100%'}, height: {xs: '80%', md: '100%'}, margin: 'auto' }} alt='linkdin-icon' src={linkdInIcon}/>
            </IconButton>
          </a>
        </Box>
        <Box className='iconBox'>
          <a target='_blank' rel="noreferrer" href="mailto:z.h.ferguson@gmail.com">
            <IconButton sx={ iconButtonStyle }>
              <img style={{ width: {xs: '80%', md: '100%'}, height: {xs: '80%', md: '100%'}, margin: 'auto' }} alt='email-icon' src={emailIcon}/>
            </IconButton>
          </a>
        </Box>
      </SmoothList>
    </Box>
  )
}

export default SocialButtons;
