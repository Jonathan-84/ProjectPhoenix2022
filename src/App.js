import Portfolio from './Pages/portfolio.js';
import UXPortfolio from './Components/UX/uxportfolio.js';
import CodePortfolio from './Components/Code/codeportfolio.js';
import Home from './Pages/home';
import AboutMe from './Pages/aboutme.js';
import Sidebar from './Components/sidenav';
import Fun from './Pages/fun.js';
import ContactMe from './Pages/contactme.js'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from './Components/header.js'
import React from 'react';
import './App.css';

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <>
      <div className="row main-color text-white">
      <div className="col-2 min-vh-100">
        <Sidebar/>
        </div>
        <div className="col-10">
      <Header className="bg-light" />
      <Switch>
      <Route exact path= {'/home'} component={Home}/> 
      <Route exact path= {'/aboutme'} component={AboutMe}/>
      <Route exact path= {'/portfolio'} component={Portfolio}/>
      <Route exact path= {'/uxportfolio'} component={UXPortfolio}/>
      <Route exact path= {'/codeportfolio'} component={CodePortfolio}/>
      <Route exact path= {'/fun'} component={Fun}/>
      <Route exact path= {'/contactme'} component={ContactMe}/>
      <Route render={() => <Redirect to={'/home'} />} />
      </Switch>
      </div>
      </div>
      </>
      </HashRouter>
       
    
 
  );
}

export default App;
