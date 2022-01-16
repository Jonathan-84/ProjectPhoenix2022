import React from 'react';
import { Link } from 'react-router-dom';



function Navbar(){

  return (
  
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
<h2>
                      <Link to={"/Home"} className=" font-weight-bold navbar-brand nav-text nav-link"> Jonathan</Link>
                      </h2> 
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <ul>
                <Link to={"/capital"} className="nav-text">About Me</Link>
                </ul>
                <ul>
                <Link to={"/lowercase"} className="nav-text">Portfolio</Link>
                </ul>
                <ul>
                  <Link to={"/numbers"}className="nav-text">Fun</Link>
                </ul>
          
                   
                <ul className="nav-item dropdown">
        <Link className="nav-text dropdown-toggle" id="navbarDropdownMenuLink" to={"/sightwords"} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Let's Connect
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        <ul>
                <Link to={"/sightcards"} className="nav-text">Email</Link>
                </ul>
                <ul>
                  <Link to={"/sightrandom"}className="nav-text">Social</Link>
               </ul>
                  </div>
      </ul>
   
               
                
       </ul>
        </div>
  
</nav>

  )
}
export default Navbar;