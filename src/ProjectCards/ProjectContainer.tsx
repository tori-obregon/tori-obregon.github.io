import React from 'react';
import {ProjectCard} from './Project';
import plantImage from '../assets/img/plant.png';

function ProjectContainer() {
    return (
      <div className="flex h-[10%] bg-yellow" >
        <ProjectCard/>
        <div className='flex flex-col-reverse items-end w-full'>
        <img alt='plant' src={plantImage} style={{width: '25rem'}}/>
        </div>
      </div>
    );
  }
  
export default ProjectContainer;

//relative file paths:
//src/assets/img/cactus_nobackground.png
//src/ProjectCards/ProjectContainer.tsx