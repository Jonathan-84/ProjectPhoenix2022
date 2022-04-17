import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import UXPortfolio from '../Components/UX/uxportfolio.js';


 
export default class Portfolio extends Component {


    
  render() {
 
  return (
    <>
    <div className='mb-0'>
    <div className="col d-flex justify-content-center mt-3 ">
      {/*Text Container*/}      
      
    <h1 className="text-info"> Choose Your Character </h1>
    
      </div>
   
<br></br>
<div className="container-fluid col-7 p-1 ">
<div className=" row d-flex justify-content-center align-items-center">
  {/* <div className='col-md border bg-info rounded m-1'>
<h2 className='text-center text-white'>UX</h2>
<Link to={"/uxportfolio"} className="nav-text">
  </Link>
  </div> */}
  <div className='col-md border bg-info rounded m-1'>
<h2 className='text-center text-white'>Coding</h2>
<Link to={"/codeportfolio"} className="nav-text">
  {/*<img  alt="screenshot of random test" //src={sighttest}  
className="sightcard"/>*/}
  </Link>
  </div>
</div>
</div>
</div>

</>
  )
}
};