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
                <Link to={"/aboutme"} className="nav-text">About Me</Link>
                </ul>
                <ul className="nav-item dropdown">
        <Link className="nav-text dropdown-toggle" id="navbarDropdownMenuLink" to={"/portfolio"} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Portfolio
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        <ul>
                <Link to={"/uxportfolio"} className="nav-text"> UX Portfolio</Link>
                </ul>
                <ul>
                  <Link to={"/codeportfolio"}className="nav-text">Coding Portfolio</Link>
               </ul>
                  </div>
      </ul>
                   
                <ul className="nav-item dropdown">
        <Link className="nav-text dropdown-toggle" id="navbarDropdownMenuLink" to={"/contactme"} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Let's Connect
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        <li><a className="nav-text" href = "mailto:jonathan.robinson@outlook.com?subject = Feedback&body = Message">
                  Email Me</a></li>
                <li><a className="nav-text" href="https://github.com/Jonathan-84" target="_blank" rel="noreferrer">GitHub</a></li>
                <li><a className="nav-text" href="https://www.linkedin.com/in/jrobinson8" target="_blank" rel="noreferrer">LinkedIn</a></li>
                  </div>
      </ul>
      <ul>
                  <Link to={"/fun"}className="nav-text">Fun</Link>
                </ul>
               
                
       </ul>
        </div>
  
</nav>

  )
}
export default Navbar;