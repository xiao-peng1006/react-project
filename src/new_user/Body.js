import React from 'react';
import './Body.css';

const Intro1 = () => {
  return (
    <div className = "slider slider-1">
      <div className = "container">
        
      </div>
    </div>
  )
}

const Intro2 = () => {
  return (
    <div className = "slider slider-2">

    </div>
  )
}

export default function Body() {
  return (
    <div className = "body new_user">
      <Intro1 />
      <Intro2 />
    </div>
  )
}
