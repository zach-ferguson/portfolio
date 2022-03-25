import { Grid, Typography } from '@mui/material';
import React from 'react';
import SectionLinks from './SectionLinks';

const introStyles = {
  maxWidth: 960, 
  minHeight: '61.80339887498%',
  display: 'flex', 
  flexDirection: 'row', 
  alignItems: 'left', 
  my: '2rem', 
  mx: 'auto', 
  fontFamily: 'Josefin Slab',
}

function Intro() {
  return (
    <Grid container spacing={3} id='intro-section' sx={ introStyles }>
      <Grid item xs={10} sm={6} id='text-section' sx={{ my: 'auto' }}>
        <Typography sx={{ fontFamily: 'Righteous', fontSize: '64px', fontWeight: 500 }}>
          Hi, I'm Zach.
        </Typography>
        <Typography sx={{ fontFamily: 'Josefin Slab', fontSize: '24px', mt: '2rem', fontWeight: 600}}>
          I build responsive websites and apps with a user-first approach. 
        </Typography>
      </Grid>
      <Grid item xs={10} sm={6}>
        <SectionLinks/>
      </Grid>
    </Grid>
  )
}

export default Intro;
