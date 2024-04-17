import React from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle
} from "../../components/ui/navigation-menu";



function Navigation() {
    return (
      <div className='flex items-center justify-between mx-8 pt-8 text-yellow font-medium	uppercase'>
      <p className='myName'>Victoria Obregon</p>
      <NavigationMenu>
        <NavigationMenuList>
        <NavigationMenuItem>
          <a href="/" >
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About
            </NavigationMenuLink>
          </a>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <a href="/" >
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Projects
            </NavigationMenuLink>
          </a>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <a href="/" >
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact
            </NavigationMenuLink>
          </a>
        </NavigationMenuItem>

        </NavigationMenuList>
      </NavigationMenu>
      </div>
      // <div className="Navigation">
      //   <span className='navLinks'>
      //   <p>About</p>
      //   <p>Projects</p>
      //   <p>Contact</p>
      //   </span>
      // </div>
    );
  }
  
  export default Navigation;