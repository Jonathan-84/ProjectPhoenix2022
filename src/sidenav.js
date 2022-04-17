import React from 'react';
import { Link } from 'react-router-dom';



function Sidebar(){

  return (
 <>
 
  <nav className="position-fixed col navbar custom-toggler navbar-default navbar-expand-lg ">
  <Link to={"/Home"} className=" font-weight-bold navbar-brand nav-text text-white nav-link"> Jonathan</Link>
  <button className="navbar-toggler side-burger" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon "></span>
  </button>
  <div className="collapse navbar-collapse " id="#navbarTogglerDemo01">

  <ul className="navbar-nav col">
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