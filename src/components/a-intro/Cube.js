import React, { useEffect, useState, useRef } from 'react';
import gsap, { CustomEase } from 'gsap/all';

const cubeStyle = { 
  position: 'relative',
  width: '400px',
  height: '200px',
  transformStyle: 'preserve-3d',
  transform: 'rotate3d(0, 0, 0, 0deg)',
  transformOrigin: 'center',
  color: 'black',
  borderRadius: '50%',
}
const faceStyle = {
  width: '100%',
  height: '100%',
  maxHeight: '200px',
  maxWidth: '200px',
  background: '#aaaaaa',
  border: '1px solid #464646',
  position: 'absolute',
  opacity: '.8',
  display: 'flex',
  alignItems: 'center',
  margin: '12.5% 0 0 25%'
}
const topFace = {
  width: '50%',
  transform: 'translateY(-50%) rotateX(-90deg)',
}
const bottomFace = {
  width: '50%',
  transform: ' rotateX(90deg)',
}
const leftFace = {
  height: '50%',
  width: '50%',
  transform: 'translateX(-50%) rotateY(90deg)',
}
const rightFace = {
  height: '50%',
  width: '50%',
  transform: 'translateX(50%) rotateY(90deg)'
}
const frontFace = {
  height: '50%',
  transform: 'rotateY(90deg) translateX(50%) rotateY(-90deg)'
}
const backFace = {
  height: '50%',
  transform: 'rotateY(-90deg) translateX(50%) rotateY(90deg)',
  textAlign: 'center',
  fontSize: '24px'
}

function Cube(props) {
  const cubeRef = useRef();

  useEffect(() => {
    if(props.rect){
      gsap.to(cubeRef.current, {
        rotationX: .1*(-(props.mouseY - props.rect.y - (props.rect.height/2))),
        rotationY: .1*(props.mouseX - props.rect.x - (props.rect.width/2)),
        duration: .5,
      })
    } 
    else {
      gsap.to(cubeRef.current, {
        rotationX: 0,
        rotationY: 0,
        duration: 2,
      })
    }
  }, [props.rect])

  const resetCube = () => {
    if(props.clicked === true){
      return;
    }
    gsap.to(cubeRef.current, {
      color: 'black',
      rotationX: 0,
      rotationY: 0, 
      duration: 2,
    })
  }

  const resetAfterClick = () => {
    gsap.to(cubeRef.current, {
      scaleX: 1,
      rotateY: 0,
      rotateZ: 0,
      duration: .5
    }).then(resetCube)
  }

  const holdPosition = () => {
    setTimeout(() => {
      props.setClicked(false);
      resetAfterClick();
    }, 2000)
  }

  // make a timeline, have scaleX .5 gpo first, then do rotations
  useEffect(() => {
    if(props.clicked){
      gsap.to(cubeRef.current, {
        duration: .5,
        rotateX: 0,
        rotateY: 0
      }).then(holdPosition)
    }
  },[props.clicked])

  return (
    <div class="cube" ref={cubeRef} style={ cubeStyle } onMouseLeave={resetCube}>
      <div class="face top" style={{ ...faceStyle, ...topFace }}></div>
      <div class="face bottom" style={{ ...faceStyle, ...bottomFace }}></div>
      <div class="face left" style={{ ...faceStyle, ...leftFace }}></div>
      <div class="face right" style={{ ...faceStyle, ...rightFace }}></div>
      <div class="face front" style={{ ...faceStyle, ...frontFace }}></div>
      <div class="face back" style={{ ...faceStyle, ...backFace, display: 'flex', justifyContent: 'center' }}>
        {props.text}
      </div>
    </div>
)
}

export default Cube;
