import React from 'react';
import { Box } from '@mui/system';
import { Grid, Typography, useMediaQuery } from '@mui/material';
import carswellThumbnail from '../../images/carswell-music-vid-thumbnail.webp'
import { Element } from 'react-scroll';
import ProjectCard from './ProjectCard';
import ciceroThumbnail from '../../images/cicero-vid-cropped-thumbnail.webp'
import awsIcon from '../../images/icons8-amazon-web-services.svg'
import mongoIcon from '../../images/icons8-mongodb.svg'
import nodeIcon from '../../images/icons8-nodejs.svg'
import reactIcon from '../../images/icons8-react.svg'
import materialIcon from '../../images/icons8-material-ui.svg'
import netlifyIcon from '../../images/icons8-netlify.svg'
import gsapIcon from '../../images/gsap-greensock.svg'
import expressIcon from '../../images/expressjs-icon.svg'
import reduxIcon from '../../images/icons8-redux.svg'
import tailwindIcon from '../../images/tailwind-logo.svg'
import pixelsThumbnail from '../../images/pixel-game-image.webp'

  const ciceroCard =   {
    imgSrc: ciceroThumbnail,
    link: `https://app.cicero.ly/`,
    aboutTextLines: [
      {text: `Cicero is a web-app for discovering and following the work of academics and public intellectuals. <a href="https://www.cicero.ly/" target="_blank" referrer="none">More about the concept.</a>`},
      {text: 'I built the Cicero app with React and saw its development from concept to production. I worked with a small team as the frontend developer to create a unique education experience for 1,000+ users.'},
    ],
    techStack: [
      {
        text: 'React.Js',
        iconSrc: reactIcon,
      },
      {
        text: 'Material UI',
        iconSrc: materialIcon,
      },
      {
        text: 'Express.Js',
        iconSrc: expressIcon,
      },
      {
        text: 'Node.Js',
        iconSrc: nodeIcon,
      },
      {
        text: 'MongoDB',
        iconSrc: mongoIcon,
      },
      {
        text: 'AWS',
        iconSrc: awsIcon,
      },
    ]
  }

  const pixelCard =   {
    imgSrc: pixelsThumbnail, 
    link: `https://zferg.com/`, 
    aboutTextLines: [
      {text: `A fullstack crud app made with MongoDB, Express, React, Redux, and Node, hosted on an Amazon EC2 instance using Nginx.`},
      {text: `Users can login, make pixel art, fork other users' art, collaborate, and save art to a gallery visible to all users.`},
    ],
    techStack: [
      {
        text: 'React.Js',
        iconSrc: reactIcon,
      },
      {
        text: 'Redux',
        iconSrc: reduxIcon,
      },
      {
        text: 'Tailwind',
        iconSrc: tailwindIcon
      },
      {
        text: 'Express.Js',
        iconSrc: expressIcon,
      },
      {
        text: 'Node.Js',
        iconSrc: nodeIcon,
      },
      {
        text: 'MongoDB',
        iconSrc: mongoIcon,
      },
      {
        text: 'AWS',
        iconSrc: awsIcon,
      },
    ],
    codeLink: `https://github.com/zach-ferguson/pixel-game/`
  }

  const carswellCard =   {
    imgSrc: carswellThumbnail,
    link: `https://www.carswellstudios.com/`,
    aboutTextLines: [
      {text: 'Carswell Music is a recording and production business servicing vocal artists and musicians in the Louisville area.'},
      {text: 'I designed this site to serve as a simple and attractive way of contact.' }
    ],
    techStack: [
      {
        text: 'React.Js',
        iconSrc: reactIcon,
      },
      {
        text: 'Material UI',
        iconSrc: materialIcon,
      },
      {
        text: 'Gsap',
        iconSrc: gsapIcon,
      },
      {
        text: 'Node.Js',
        iconSrc: nodeIcon,
      },
      {
        text: 'Netlify',
        iconSrc: netlifyIcon,
      },
    ],
    codeLink: `https://github.com/zach-ferguson/carswell-site`
  }

const cardData = [
  ciceroCard,
  pixelCard,
  carswellCard,
]

const projectCards = cardData.map((data) => {
  return(
    <ProjectCard 
      imgSrc={data.imgSrc}
      link={data.link}
      aboutTextLines={data.aboutTextLines}
      techStack={data.techStack}
      codeLink={data.codeLink}/>
  )
})

function Projects() {
  const mobile = !useMediaQuery('(min-width:600px)');

  return (
    <Box id sx={{ display: 'flex', flexDirection: 'column', width: '100%', backgroundColor: '#598392', borderTop: '1px solid #353535', pb: {xs: '2rem', md: '10rem'}, borderBottom: '1px solid #353535'}}>
      <Element name="projects"/>
      <Grid id='project-section-grid' container spacing={1} xs={8} md={5} justifyContent='center' direction='column' sx={{ maxWidth: 960, mt: '6rem', margin: 'auto' }}>
        <Box sx={{mb: '4rem', mt: {xs: '8rem', md: '10rem'}, mx: 'auto', border: '1px solid black', background: '#EFF6E0', px: '5px', py: '5px', borderRadius: '6px', width: '250px', boxShadow: '8px 8px 4px 0px rgba(53,53,53,53.69)'}}>
          <Typography sx={{ fontFamily: 'Righteous', fontSize: '48px', width: 'fit-content', mx: 'auto',}}>
            My Work
          </Typography>
        </Box>
        {projectCards}
      </Grid>
      {!mobile && <Element name="skills"/>} 
    </Box>
  )
}

export default Projects;
