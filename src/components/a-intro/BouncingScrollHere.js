import React, { useEffect, useRef } from 'react'
import gsap from 'gsap/all';

function Bounce() {
  const bounceRef = useRef();

  var tl = gsap.timeline({repeat: -1, repeatDelay: .5});
    tl.to(bounceRef.current, {
      y: '+=100',
      duration: 1,
      ease: 'power2.in'
    })
    tl.to(bounceRef.current, {
      y: '-=100',
      duration: 1,
      ease: 'power2.out'
    }) 

  useEffect(() => { 
    tl.play()
  }, []);

  return (
    <div ref={bounceRef} style={{ position: 'absolute', marginTop: '-120px', marginRight: '-50px', color: '#353535', fontFamily: 'Josefin Slab'}}>
      <div style={{ width: 'fit-content'}}>
        <p>Scroll</p>
      </div>
    </div>
)
}

export default Bounce