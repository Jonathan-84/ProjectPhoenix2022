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
            <CDBSidebarMenuItem icon="comments" iconType="solid" ><a href = "mailto:jonathan.robinson@outlook.com?subject = Feedback&body = Message">
            Let's Get Social </a>
            </CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="gamepad" iconType="solid" className="game-on">
              Let's Play A Game
            </CDBSidebarMenuItem>
            <br></br>
        <br></br>
        <CDBSidebarMenuItem className="fab fa-github"><span>
        <a href="https://github.com/Jonathan-84" target="_blank" rel='noreferrer'>GitHub</a></span>
            </CDBSidebarMenuItem>
            <CDBSidebarMenuItem>
            <a href="https://www.linkedin.com/in/jrob84" target="_blank" rel='noreferrer' className='border border-white rounded'><span className="fab fa-linkedin-square"></span>&nbsp;&nbsp;   LinkedIn 
            </a>
            </CDBSidebarMenuItem>
          </CDBSidebarMenu>
        </CDBSidebarContent>
 

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            className="sidebar-btn-wrapper"
            style={{padding: '20px 5px'}}
          >
            Sidebar Footer
          </div>
          
        </CDBSidebarFooter>
      </CDBSidebar>
  );
};

export default Sidebar;