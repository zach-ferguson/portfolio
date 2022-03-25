import React, { useRef, useEffect, useState } from 'react'
import { Box, Button, Typography } from '@mui/material';
import gsap from 'gsap';
import Cube from './Cube';
import useMouseMove from '../../Hooks/useMouseMove';
import _, {debounce} from 'lodash';
import { Link } from 'react-scroll'

const buttonSx = {
  fontFamily: 'Righteous',
  color: 'rgba(0,0,0,.87)',
  width: '400px',
  height: '150px',
  padding: 0,
  borderRadius: '50%',
  '&:hover':{
    backgroundColor: 'transparent'
  }
}

const buttonTextSx = {
  fontWeight: 700,
  my: '2rem',
  fontFamily: 'Righteous',
  fontSize: '32px',
}

function SectionLinks() {
  const {mouseX, mouseY, setMousePos} = useMouseMove();
  const boxRef = useRef();
  const boxRef2 = useRef();
  const boxRef3 = useRef();
  const [rect, setRect] = useState();
  const [rect2, setRect2] = useState();
  const [rect3, setRect3] = useState();
  const [clicked, setClicked] = useState(false);
  const [clicked2, setClicked2] = useState(false);
  const [clicked3, setClicked3] = useState(false);

  const handleMouseOverButton = (e) => {
    if(!clicked){
      setMousePos(e);
      setRect(boxRef.current.getBoundingClientRect())
    }
  }
  const handleMouseOverButton2 = (e) => {
    if(!clicked2){
      setMousePos(e);
      setRect2(boxRef2.current.getBoundingClientRect())
    }
  }
  const handleMouseOverButton3 = (e) => {
    if(!clicked3){
      setMousePos(e);
      setRect3(boxRef3.current.getBoundingClientRect())
    }
  }
  
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column',}}>
      <Button disableRipple onMouseMove={ handleMouseOverButton } onMouseLeave={() => { setRect(null) }} ref={boxRef} sx={ buttonSx }>
        <Link activeClass="active" to="projects" spy={true} smooth={true} duration={1000} delay={400} onClick={() => { setClicked(true) }}>
          <Cube mouseX={mouseX} mouseY={mouseY} rect={rect} clicked={clicked} setClicked={setClicked} text={"My Work"}/>
        </Link>
      </Button>
      <Button disableRipple onMouseMove={ handleMouseOverButton2 } onMouseLeave={() => { setRect2(null) }} ref={boxRef2} sx={ buttonSx }>
        <Link activeClass="active" to="skills" spy={true} smooth={true} duration={1000} delay={400} onClick={() => { setClicked2(true) }}>
          <Cube mouseX={mouseX} mouseY={mouseY} rect={rect2} clicked={clicked2} setClicked={setClicked2} text={"Skills"}/>
        </Link>
      </Button>
      <Button disableRipple onMouseMove={ handleMouseOverButton3 } onMouseLeave={() => { setRect3(null) }} ref={boxRef3} sx={ buttonSx }>
        <Link activeClass="active" to="contact" spy={true} smooth={true} duration={1000} delay={400} onClick={() => { setClicked3(true) }}>
          <Cube mouseX={mouseX} mouseY={mouseY} rect={rect3} clicked={clicked3} setClicked={setClicked3} text={"Contact"}/>
        </Link>
      </Button>  
    </Box>
  )
}

export default SectionLinks