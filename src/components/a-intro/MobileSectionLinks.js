import { Button, Grid } from '@mui/material'
import React from 'react'
import { Link } from 'react-scroll'

const buttonData = [
  { 
    text: 'My Work', 
    gridSize: 12, 
    linkTo: 'projects' 
  },
  { 
    text: 'Skills', 
    gridSize: 6, 
    linkTo: 'skills' 
  }, 
  { text: 'Contact', 
    gridSize: 6, 
    linkTo: 'contact' 
  }
]

function MobileSectionLinks() { 

  const buttons = buttonData.map(button => {
    return (
      <Grid item xs={button.gridSize}>
        <Link activeClass="active" to={button.linkTo} spy={true} smooth={true} duration={500} delay={0}>
          <Button sx={{ 
            ml: '-.2rem',
            background: '#fece2f', 
            border: '1px solid #01161E',
            color: 'hsla(0, 0%, 0%, 0.8)', 
            fontFamily: 'Open Sans', 
            fontSize: '16px', 
            width: '100%', 
            fontWeight: 600, 
            boxShadow: '4px 4px 4px 0px rgba(53,53,53,53.69)',
            '&:hover':{
              boxShadow: '2px 2px 4px 0px rgba(53,53,53,53.69)',
            }
            }}>
            {button.text}
          </Button>
        </Link>
      </Grid>
    )
  })

  return (
    <Grid container xs={11} spacing={2}>
      {buttons}
    </Grid>
  )
}

export default MobileSectionLinks