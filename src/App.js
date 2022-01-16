import Home from './Pages/home'
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
      <Route render={() => <Redirect to={'/home'} />} />
      </Switch>
      </>
      </HashRouter>
       
    
 
  );
}

export default App;
