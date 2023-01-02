import Portfolio from './Pages/portfolio.js';
import UXPortfolio from './Components/UX/uxportfolio.js';
import CodePortfolio from './Components/Code/codeportfolio.js';
import Home from './Pages/home';
import AboutMe from './Pages/aboutme.js';
import Sidebar from './Components/sidebar';
import Tracker from './Components/GameTracker/tracker';
import Fun from './Pages/fun.js';
import ContactMe from './Pages/contactme.js'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
//import Header from './Components/header.js',
//import Social from './Components/social.js'
import React from 'react';
import './App.css';

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <>
      <div className="row main-color text-white">
       <div className="container-fluid">
    <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
        <Sidebar/>
        </div>
        <div className="col py-3">
      <Switch>
      <Route exact path= {'/home'} component={Home}/> 
      <Route exact path= {'/aboutme'} component={AboutMe}/>
      <Route exact path= {'/portfolio'} component={Portfolio}/>
      <Route exact path= {'/uxportfolio'} component={UXPortfolio}/>
      <Route exact path= {'/codeportfolio'} component={CodePortfolio}/>
      <Route exact path= {'/fun'} component={Fun}/>
      <Route exact path= {'/🎮'} component={Tracker}/>
      <Route exact path= {'/contactme'} component={ContactMe}/>
      <Route render={() => <Redirect to={'/home'} />} />
      </Switch>
      </div>
    
</div>
</div>
</div>
     
      </>
      </HashRouter>
       
    
 
  );
}

export default App;
