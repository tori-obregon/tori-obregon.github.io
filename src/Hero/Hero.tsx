import React from 'react';
import Navigation from './Navigation/Navigation';
import { SocialIcon } from 'react-social-icons'
import Typewriter from 'typewriter-effect';

const dataText = [
  '<span style="font-size: 2.25rem;"> latina <span>',
  '<span style="font-size: 2.25rem;"> great <span>',
  '<span style="font-size: 2.25rem;"> fun <span>',
  '<span style="font-size: 2.25rem;"> woman <span>',
  '<span style="font-size: 2.25rem;"> front-end <span>',
  '<span style="font-size: 2.25rem;"> back-end <span>',
]
function Hero() {

    return (
      <div id="heroContainer" className="flex flex-col justify-center bg-[url('/src/assets/img/clouds.jpg')] bg-cover h-dvh">
        {/* <Navigation/> */}
        <div className="flex flex-col items-center justify-center mx-2 h-fit">
          <h2 className="mx-8 pb-4 text-[rgb(55,105,107)] font-bold"> 
            hello, i am victoria obregon
          </h2>
          <div className='flex items-center h-5'>
          <h1 className="text-4xl font-bold text-[rgb(26,61,63)] mx-4">
            i am a </h1> 
          <div className=" font-bold text-amber-100">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString('<span style="font-size: 2.25rem;"></span>')
                  .callFunction(() => {
                    console.log('String typed out!');
                  })
                  .pauseFor(2500)
                  .deleteAll()
                  .callFunction(() => {
                     console.log('All strings were deleted');
                  })
                  .start();
                }}
                options={{
                  strings: dataText,
                  autoStart: true,
                  loop: true,
                  cursor: '',
                }}
              />
          </div>
          <h1 className="text-4xl font-bold text-[rgb(26,61,63)] mx-4">
            software engineer
          </h1>
          </div>
        </div>
        <div className='flex justify-center items-center p-4'>
        <SocialIcon url="https://github.com/tori-obregon" target="_blank" className='mx-2'/>
        <SocialIcon url="https://www.linkedin.com/in/vobregon/" target="_blank" className='mx-2'/>
        </div>
      </div>
    );
  }
  
  export default Hero;