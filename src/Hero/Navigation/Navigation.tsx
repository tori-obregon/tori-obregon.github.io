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
} from "../../components/ui/navigation-menu";


function Navigation() {
    return (
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
            <NavigationMenuContent>
            <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      // <div className="Navigation">
      //   <p className='myName'>Victoria Obregon</p>
      //   <span className='navLinks'>
      //   <p>About</p>
      //   <p>Projects</p>
      //   <p>Contact</p>
      //   </span>
      // </div>
    );
  }
  
  export default Navigation;