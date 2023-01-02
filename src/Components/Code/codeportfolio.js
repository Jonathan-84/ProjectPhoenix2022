import React, { Component } from 'react';


import Projects from './projects';
import Cards from './cards';
 
export default class CodePortfolio extends Component {



    
  render() {
 
    return (
      <>
      {/* <div className='mb-0'> */}
      <div className="col d-flex justify-content-center mt-3 ">
        {/*Text Container*/}      
        <div className="rounded text-white bg-secondary text-center sight-title">
      <h1 className=""> Projects </h1>
      <p>Click on the screenshot to flip the card over. On the card's backside, you will
        find the App Name, Website's URL, the App Description, Tech Stack used, and the GitHub Repo's URL.  </p>
        </div>
        </div>
     
  <br></br>
 

  <div className="row row-cols-md-2 g-4">

   

  {Projects.map((e)=>{
         return (
         <Cards ProjectName={e.ProjectName} Photo={e.Photo} Site={e.Site} GitHubURL={e.GitHubURL} 
         Description={e.Description} PicsAlt={e.PicsAlt} Technologies={e.Technologies} Fun={e.Fun}/>
       );})}
          </div>

      <br></br>
      <br></br>
          {/* </div> */}
  </>
    )
  }
  };