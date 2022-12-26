import React from 'react';
import { Link } from 'react-router-dom';

import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBSidebarFooter,
} from 'cdbreact';

const Sidebar = () => {
  return (
      <CDBSidebar>
        <CDBSidebarHeader className='side-style' prefix={<i className="fa fa-bars" />}>Jonathan</CDBSidebarHeader>
        <CDBSidebarContent className='side-style' >
          <CDBSidebarMenu >
            <CDBSidebarMenuItem icon="user"><Link to={"/aboutme"}>About Me</Link></CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="briefcase"><Link to={"/codeportfolio"}>Projects</Link></CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="comments" iconType="solid" ><Link to={"/contactme"}>
            Let's Get Social </Link>
            </CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="gamepad" iconType="solid" className="game-on" ><Link to={"/fun"}>
              Let's Play A Game</Link>
            </CDBSidebarMenuItem>
            <br></br>
        <br></br>
        
          </CDBSidebarMenu>
        </CDBSidebarContent>
 

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            className="sidebar-btn-wrapper"
            style={{padding: '20px 5px'}}
          >
            <div>
           <a href="https://github.com/Jonathan-84" target="_blank" rel='noreferrer'><span className=" text-white fa-lg fix fab fa-github"></span></a>
           </div>
           <br></br>
           <div>
          <a href="https://www.linkedin.com/in/jrob84" target="_blank" rel='noreferrer' ><span className="text-white fa-lg fab fa-linkedin-square"></span>
            </a>
            </div>
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
  );
};

export default Sidebar;