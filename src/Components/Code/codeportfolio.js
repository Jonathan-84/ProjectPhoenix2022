import React, { Component } from 'react';


import Projects from './projects';
import Cards from './cards';
 
export default class CodePortfolio extends Component {



    
  render() {
 
    return (
      <>
      <div className='mb-0'>
      <div className="col d-flex justify-content-center mt-3 ">
        {/*Text Container*/}      
        <div className="rounded text-white bg-info text-center sight-title">
      <h1 className=""> Projects </h1>
      <p>Click each card to flip them over and see a sample sentence. Before flipping it over, 
        see if your child can recognize the word and provide their own sentence example. </p>
        </div>
        </div>
     
  <br></br>
  
       
  <div className="d-flex col">
      <div className="row">
  {Projects.map((e)=>{
         return (
         <Cards ProjectName={e.ProjectName} Photo={e.Photo} Site={e.Site} GitHubURL={e.GitHubURL} 
         Description={e.Description} PicsAlt={e.PicsAlt} Technologies={e.Technologies}/>
       );})}
          </div>
       </div>
       </div>
  
  
  
  </>
    )
  }
  };