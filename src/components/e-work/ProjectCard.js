import { Card, CardActionArea, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import parse from 'html-react-parser';
import React from 'react'
import githubIcon from '../../images/icons8-github.svg'

const cardStyles = {
  height: 'fit-content',
  borderRadius: '12px',
  marginBottom: '4rem',
  borderWidth: '1px',
  borderColor: '#353535',
  border: '1px solid black',
  boxShadow: '8px 8px 4px 0px rgba(53,53,53,53.69)'
}
const actionAreaStyles = {
  width: '100%',
  height: 'fit-content',
  borderRadius: '12px',
  marginBottom: '1rem',
  overflow: 'hidden'
}

const cardTextStyles = {
  mx: 'auto',
  fontFamily: 'Josefin Slab',
  fontStyle: 'Josefin Slab',
  paddingBottom: '10px',
}

const techIconStyles = {
  width: '32px',
  height: '32px',
  marginRight: '10px',
  marginBottom: 0
}

const overlayStyles = {
  width: '100%',
  height: '100%',
  position: 'absolute',  
  display: 'flex', 
  alignItems: 'center', 
  justifyContent: 'center',
  backgroundColor: '#353535',
  opacity: 0, 
  textDecoration: 'none',
  transition: '.2s ease-in-out',
  '&:hover':{
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: '#353535',
    opacity: .5,
    textDecoration: 'none',
  }
}

const codeLinkStyles = { 
  width: '108%', 
  ml: '-4%', 
  display: 'flex', 
  alignItems: 'center', 
  justifyContent: 'center', 
  paddingY: '15px', 
  borderBottomLeftRadius: '12px', 
  borderBottomRightRadius: '12px',
}

function ProjectCard(props) {

  const aboutText = props.aboutTextLines.map((line) => {
    return(
      <Typography sx={{ fontFamily: 'Josefin Slab', fontWeight: 600, mb: '10px' }}>
        {parse(line.text)}
      </Typography>
    )
  })

  const techStack = props.techStack.map((tech) => {
    return(
      <Box sx={{ display: 'flex', alignItems: 'center', height: 32, mb: '10px'}}>
        <img src={tech.iconSrc} alt={tech.text + '-icon'} style={techIconStyles}/>
        <Typography sx={{ fontFamily: 'Josefin Slab', fontWeight: 600, width: 'fit-content' }}>
          {tech.text}
        </Typography>
      </Box>
    )
  }) 

  return (
    <Grid id='card-grid' container item xs={12} direction='column'>
      <Card sx={ cardStyles }>
        <Grid id='action-area' item container xs={12}>
          <CardActionArea disableRipple sx={ actionAreaStyles }>
            <a id='overlay' href={props.link} target="_blank" rel='noreferrer'>
              <Box sx={ overlayStyles }/>
            </a>  
            <img id='site-thumbnail' alt='project-thumbnail' src={props.imgSrc} style={{ width: '100%', height: '100%'}} />
          </CardActionArea>
        </Grid>
        <Grid id='card-text' container item spacing={3} direction='row' justifyContent='space-around'  >
          <Grid item xs={7} spacing={2} sx={ cardTextStyles }>
            <Typography sx={{ fontFamily: 'Righteous', fontWeight: 500, fontSize: '24px', paddingBottom: '10px' }}>
              About
            </Typography>
            {aboutText}
          </Grid>
          <Grid item xs={3} sx={ cardTextStyles }>
            <Typography sx={{ fontFamily: 'Righteous', fontWeight: 500, fontSize: '24px', paddingBottom: '10px' }}>
              Tech Stack
            </Typography>
            {techStack}
          </Grid>
        </Grid>
        { props.codeLink && (
        <Grid id='view-code-section' item xs={12} sx={{ mx: '4%', borderTop: '1px solid rgba(0,0,0,0.87)',}}>
          <CardActionArea href={props.codeLink} target="_blank" referrer="none" sx={ codeLinkStyles }>
            <img src={githubIcon} alt='github-icon' style={{ width: '32px', height: '32px',}}/>
            <Typography sx={{ fontFamily: 'Josefin Slab', fontWeight: 700, }}>
              View Code
            </Typography>
          </CardActionArea>
        </Grid>
        )}
      </Card>
    </Grid>
  )
}

export default ProjectCard