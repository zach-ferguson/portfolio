import React, { useState } from 'react';import { Box } from "@mui/system"
import SmoothList from "react-smooth-list"
import githubIcon from '../../images/icons8-github.svg'
import linkdInIcon from '../../images/icons8-linkedin.svg'
import emailIcon from '../../images/icons8-email.svg'
import { IconButton } from "@mui/material"

const iconBoxStyle = {

}

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
  const [mounted] = useState(true) 

  return (
    <Box sx={{  width: '100%', margin: 'auto 0 auto auto'}}>
      <SmoothList className='smoothlist' childClassName='smoothlistChild' duration={600} delay={100} > 
        <Box className='iconBox' sx={ iconBoxStyle }>
          <a target='_blank' rel="noreferrer" href={'https://github.com/zach-ferguson'}>
            <IconButton sx={ iconButtonStyle }>
              <img style={{ width: '100%', height: '100%', margin: 'auto' }} src={githubIcon}/>
            </IconButton>
          </a>
        </Box>
        <Box className='iconBox' sx={ iconBoxStyle }> 
          <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/zachary-ferguson-430724206/">
            <IconButton sx={ iconButtonStyle }>
            <img style={{ width: '100%', height: '100%', margin: 'auto' }} src={linkdInIcon}/>
            </IconButton>
          </a>
        </Box>
        <Box className='iconBox' sx={ iconBoxStyle }>
          <a target='_blank' rel="noreferrer" href={'https://www.instagram.com/carswellmusic/'}>
            <IconButton sx={ iconButtonStyle }>
            <img style={{ width: '100%', height: '100%', margin: 'auto' }} src={emailIcon}/>
            </IconButton>
          </a>
        </Box>
      </SmoothList>
    </Box>
  )
}

export default SocialButtons;
