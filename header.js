import React from 'react';
import './header.css';


const Header = () => {
    return (
      <div>
       <header>
        <nav class='cont'>
          <div class='logos'>
            <h1 class='hone_nav'>LOGO</h1>
          
          </div>
          <div>
  
          <ul className='nav_links'>
        
          <li>Home</li>
                <li>Discover</li>
                <li>About Us</li>
              <li>See Doctor</li>
           <li ><a><button class='btn'>Contact us</button></a></li>
  
          </ul>
  
          </div>
        </nav>
       </header>
      </div>
    )
  };
  
  export default Header;