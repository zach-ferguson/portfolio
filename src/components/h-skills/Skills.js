import { Grid, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import awsIcon from '../../images/icons8-amazon-web-services.svg'
import mongoIcon from '../../images/icons8-mongodb.svg'
import nodeIcon from '../../images/icons8-nodejs.svg'
import reactIcon from '../../images/icons8-react.svg'
import materialIcon from '../../images/icons8-material-ui.svg'
import gsapIcon from '../../images/gsap-greensock.svg'
import expressIcon from '../../images/expressjs-icon.svg'
import reduxIcon from '../../images/icons8-redux.svg'
import tailwindIcon from '../../images/tailwind-logo.svg'
import javascriptIcon from '../../images/icons8-javascript.svg'
import cssIcon from '../../images/icons8-css3.svg'
import designIcon from '../../images/icons8-web-design-64.png'
import { Element } from 'react-scroll'

const techItems = [
  {
    iconSrc: reactIcon,
    text: 'React',
  },
  {
    iconSrc: reduxIcon,
    text: 'Redux',
  },
  {
    iconSrc: javascriptIcon,
    text: 'Javascript',
  },
  {
    iconSrc: expressIcon,
    text: 'Express JS',
  },
  {
    iconSrc: materialIcon,
    text: 'Material UI',
  },
  {
    iconSrc: tailwindIcon,
    text: 'TailWind',
  },
  {
    iconSrc: nodeIcon,
    text: 'Node',
  },
  {
    iconSrc: awsIcon,
    text: 'AWS',
  },
  {
    iconSrc: mongoIcon,
    text: 'MongoDb',
  },
  { 
    iconSrc: cssIcon,
    text: "CSS",
  },
  {
    iconSrc: gsapIcon,
    text: 'Gsap',
  },
  {
    iconSrc: designIcon,
    text: 'UI/UX/Web Design',
  },
]

const techs = techItems.map((tech) => {
  return(
    <Grid item md={4} spacing={1} sx={{ display: 'flex', alignItems: 'center', height: 48, mb: '10px'}}>
      <img src={tech.iconSrc} alt='tech-icon' style={{ width: '48px', height: '48px', marginRight: '10px', marginBottom: 0 }}/>
      <Typography sx={{ fontFamily: 'Open Sans', width: 'fit-content', fontSize: {xs: '16px', md: '18px'} }}>
        {tech.text}
      </Typography>
    </Grid>
  )
}) 

function Skills() {
  const mobile = !useMediaQuery('(min-width:600px)');

  return (
    <>
    {mobile && <Element name="skills"/>} 
    <Grid container spacing={{xs: 0, md: 3}} direction='row' justifyContent='center' sx={{ width: '100%', height: '100%', mx: 'auto', p: {xs: '2rem 0 4rem 0', md:' 8rem 0 8rem 0'} }}>
      <Grid item xs={12} md={4}>
        <Typography variant='h2' sx={{ width: 'fit-content', fontFamily: 'Righteous', mb: {xs: '0rem', md: '1rem'}, mx: {xs: 'auto', md: 0} }} >
          Skills
        </Typography>
        <br/>
        <Typography sx={{ width: 'fit-content', fontFamily: 'Open Sans', fontSize: '20px', p: '10px', textAlign: {xs: 'center', md: 'left'} }}>
          I am proficient in modern Javascript, CSS, and React.js, but I also have experience in backend work using Express.js and AWS. 
        </Typography>
      </Grid>
      <Grid item container xs={10} md={3.5} spacing={2} justifyContent={{xs: 'center', md: 'flex-start'}} sx={{ mt: '1rem' }}>
        {techs}
      </Grid>
    </Grid>
    </>
  )
}

export default Skills