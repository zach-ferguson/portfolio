import { Grid, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import MobileSectionLinks from './MobileSectionLinks';
import SectionLinks from './SectionLinks';

const introStyles = {
  maxWidth: 960, 
  minHeight: '61.80339887498%',
  display: 'flex', 
  flexDirection: 'row', 
  my: '2rem', 
  mx: 'auto',
  fontFamily: 'Josefin Slab',
}

function Intro() {
  const mobile = !useMediaQuery('(min-width:600px)');

  return (
    <Grid container spacing={3} id='intro-section' sx={ introStyles }>
      <Grid item xs={10} md={6} id='text-section' sx={{ m: 'auto' }}>
        <Typography sx={{ fontFamily: 'Righteous', fontSize: {xs: '48px', md: '64px'}, fontWeight: 500 }}>
          Hi, I'm Zach
        </Typography>
        <Typography sx={{fontFamily: 'Open Sans', fontSize: {xs: '18px', md: '24px'}, mt: {xs: '1rem', md: '2rem'} }}>
          I build responsive apps and websites with a simplicity-first approach. 
        </Typography>
      </Grid>
      <Grid id='sectionlinks' item xs={10} md={6} sx={{ mx: 'auto', mb: {xs: '4rem', md: 0} , mt: '1rem' }}>
      {mobile? 
        <MobileSectionLinks/>
      :
        <SectionLinks/>
      }
      </Grid>
    </Grid>
  )
}

// <Typography sx={{ fontFamily: 'Open Sans', fontSize: '20px' }}>
//   People are busier than they've ever been. That's why I approach building the web with a simplicity first mindset, so users can experience tech that makes their lives easier, not more complicated.
// </Typography>

export default Intro;
