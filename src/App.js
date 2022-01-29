import Portfolio from './Pages/portfolio.js';
import UXPortfolio from './Components/UX/uxportfolio.js';
import CodePortfolio from './Components/Code/codeportfolio.js';
import Home from './Pages/home';
import AboutMe from './Pages/aboutme.js';
import Fun from './Pages/fun.js';
import ContactMe from './Pages/contactme.js'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './Components/navbar.js'
import React from 'react';
import './App.css';

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <>
      <Navbar />
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
      </>
      </HashRouter>
       
    
 
  );
}

export default App;
