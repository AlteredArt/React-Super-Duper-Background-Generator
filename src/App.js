import React, { useState, useEffect } from 'react';
import Intro from './Components/Intro';
import { Redirect } from 'react-router-dom';

export default function App() {
  const [displayIntro, setDisplayIntro] = useState(true);

  //set timeout on display intro after 4 seconds
  useEffect(() => {
    if (displayIntro) {
      setTimeout(() => {
        setDisplayIntro(false)
      }, 5000)
    }
  }, [displayIntro])

  //display conditional
  let intro = displayIntro ? (
    <Intro />
  ) : (
      <Redirect to='/home' />
    );


  return ([intro]);
}
