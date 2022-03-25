import React, {useState} from 'react'

export default function useMouseMove() {
  const [state, setState] = useState({x: 0, y: 0})

  const setMousePos = e => {
    e.persist()
    setState(state => ({...state, x: e.clientX, y: e.clientY}))
  }
  return {
    mouseX: state.x,
    mouseY: state.y,
    setMousePos,
  }
}

