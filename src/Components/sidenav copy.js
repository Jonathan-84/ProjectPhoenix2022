import React from 'react';
import { Link } from 'react-router-dom';



function Sidebar(){

  return (
 <>
  <nav className="position-fixed d-flex flex-column navbar navbar-expand-lg navbar-primary text-white">
  <Link to={"/Home"} className=" font-weight-bold navbar-brand nav-text text-white nav-link"> Jonathan</Link>

  <button className="navbar-toggler burger-brown" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon burger-brown"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav d-flex flex-column">
      <ul>
                <Link to={"/aboutme"} className="nav-text text-white">About Me</Link>
                </ul>
                <ul className="nav-item dropdown">
        <Link className="nav-text dropdown-toggle text-white" id="navbarDropdownMenuLink" to={"/portfolio"} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Portfolio
        </Link>
        <div className="dropdown-menu bg-warning" aria-labelledby="navbarDropdownMenuLink">
            <ul>
                  <Link to={"/codeportfolio"}className="nav-text text-white">Coding Portfolio</Link>
               </ul>
                  </div>
      </ul>
                   
                <ul className="nav-item dropdown ">
        <Link className="nav-text dropdown-toggle text-white" id="navbarDropdownMenuLink" to={"/contactme"} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Let's Get Social
        </Link>
        <div className="dropdown-menu bg-warning" aria-labelledby="navbarDropdownMenuLink">
        <li><a className="nav-text text-white" href = "mailto:jonathan.robinson@outlook.com?subject = Feedback&body = Message">
                  Email Me</a></li>
                <li><a className="nav-text text-white" href="https://github.com/Jonathan-84" target="_blank" rel="noreferrer">GitHub</a></li>
                <li><a className="nav-text text-white" href="https://www.linkedin.com/in/jrobinson8" target="_blank" rel="noreferrer">LinkedIn</a></li>
                  </div>
      </ul>
      <ul>
                  <Link to={"/fun"}className="nav-text text-white">Fun</Link>
                </ul>
               
                
       </ul>
        </div>
</nav>
</>

  )
}
export default Sidebar;