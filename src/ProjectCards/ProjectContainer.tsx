import React from 'react';
import {ProjectCard} from './Project';
import cactusImage from '../assets/img/cactus_nobackground.png';

function ProjectContainer() {
    return (
      <div className="h-dvh bg-yellow" >
        <ProjectCard/>
        <img alt='cactus' src={cactusImage} width="100%" height="100%"/>
      </div>
    );
  }
  
export default ProjectContainer;

//relative file paths:
//src/assets/img/cactus_nobackground.png
//src/ProjectCards/ProjectContainer.tsx