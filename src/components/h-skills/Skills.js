import { Grid, Typography } from '@mui/material'
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
      <Typography sx={{ fontFamily: 'Josefin Slab', fontWeight: 600, width: 'fit-content', fontSize: '18px' }}>
        {tech.text}
      </Typography>
    </Grid>
  )
}) 

function Skills() {

  return (
    <Grid container spacing={3} direction='row' justifyContent='center' sx={{ width: '100%', height: '100%', mx: 'auto', py: '8rem'}}>
      <Grid item md={4}>
        <Typography variant='h2' sx={{ fontFamily: 'Righteous', my: '1rem' }} >
          Skills
        </Typography>
        <Typography sx={{ fontFamily: 'Josefin Slab', fontWeight: '700', fontSize: '24px' }}>
          I am proficient in modern Javascript, CSS, and the React library, but I also have experience in backend work using Express.js and AWS. 
        </Typography>
        <br/><br/>
        <Typography sx={{ fontFamily: 'Josefin Slab', fontWeight: '700', fontSize: '24px' }}>
          I love collaborating and using code to bring ideas from concepts to reality.
        </Typography>
      </Grid>
      <Grid item container md={3.5} sx={{ mt: '6rem' }}>
        {techs}
      </Grid>
    </Grid>
  )
}

export default Skills