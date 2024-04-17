import React from 'react';
import Navigation from './Navigation/Navigation';


function Hero() {
    return (
      <div className="flex flex-col bg-[url('/src/assets/img/clouds.jpg')] bg-cover h-dvh">
        <Navigation/>
        <div className='flex flex-col items-center justify-center flex-1 mx-2'>
        <h1 className="text-3xl font-bold text-[rgb(26,61,63)]">
          i am a latina software engineer
        </h1>
        </div>
      </div>
    );
  }
  
  export default Hero;