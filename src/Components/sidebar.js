import React from 'react';
import { Link } from 'react-router-dom';


/// Need to add icons... Plan on keeping this version
// less jarring and better designed for mobile

const Sidebar = () => {
  return (
    <div className="container-fluid">
    <div className="row flex-nowrap">
        {/* Experiment with position-fixed below and the main section--- it seems to break around tablet size, can we fix it? */}
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark ">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <Link to={"/home"} className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span className="fs-5 d-none d-sm-inline">Jonathan</span> <span className="fs-4 d-block d-sm-none">JR</span>
                </Link>
                {/*  Right after this, it's the top UL*/}
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li className="nav-item">
                    <Link to={"/aboutme"} className="nav-link align-middle px-0">
                    <i className="fs-4 fa-solid fa-user-astronaut"></i> <span className="fs-6 ms-1 d-none d-sm-inline">About Me</span>
                        </Link>
                    </li>
                    <li>
                    
                            </li>
                            <li className="nav-item">
                            <Link to={"/codeportfolio"} className="nav-link px-0 align-middle">
                             <i class="fs-4 fa-solid fa-laptop-code"></i> <span className="fs-6  d-none d-sm-inline ms-1"> Portfolio</span> </Link>
                    </li>
                {/*} 
                
                /// If I finish the UX course and need to add the UX Portfolio... I'll use the opening POrtfolio drop down
                <li>
                   
                    <a href="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                    <i className="fs-4 bi bi-briefcase"></i> <span className="fs-6  ms-1 d-none d-sm-inline"> Open Portfolio</span> </a>
                        <ul className="collapse show nav flex-column px-0 align-middle" id="submenu1" data-bs-parent="#menu">
                            <li>
                            <Link to={"/codeportfolio"} className="nav-link px-0 align-middle">
                                <i className=" fs-4 bi bi-laptop"></i> <span className="fs-6  d-none d-sm-inline ms-1"> Coding</span> </Link>
                            </li>
                            <li>
                            <Link to={"/uxportfolio"} className="nav-link px-0 align-middle">
                                <i className=" fs-4 bi bi-map"></i> <span className="fs-6  d-none d-sm-inline ms-1"> UX Design</span> </Link>
  </li>
                        </ul>
                    </li>
                    */}
                    <li className="nav-item">
                    <a className="nav-link px-0 align-middle" href = "mailto:jonathan.robinson@outlook.com?subject = Feedback&body = Message"> <i class="fs-4 fa-regular fa-envelope"></i> <span className="fs-6 d-none d-sm-inline">
                            Email Me</span></a>
                    </li>
                    <li>
                    <Link to={"/fun"} className="nav-link px-0 d-none d-lg-block">
                    <i class="fs-4 fa-solid fa-gamepad"></i> <span className="d-none d-sm-inline">Challenge</span> </Link>
                    </li>
                    </ul>
                    {/*  Right after this, it's the Bttom UL*/}
                    <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li className="nav-item">
                    <a className="nav-link px-0 align-middle" href="https://github.com/Jonathan-84" target="_blank" rel='noreferrer'><i class="fs-4 bi bi-github"></i> <span className="fs-6  d-none d-sm-inline">
    GitHub</span></a> 
                    </li>
                    <li className="nav-item">
                    <a className="nav-link px-0 align-middle" href="https://www.linkedin.com/in/jrob84" target="_blank" rel='noreferrer'><i className=" fs-4 bi bi-linkedin"> </i> <span className="fs-6  d-none d-sm-inline">
    LinkedIn</span></a> 
                    </li>
                    </ul>
                
                <hr/>
                
            </div>
        </div>
       
    </div>
</div>
  );
};

export default Sidebar;