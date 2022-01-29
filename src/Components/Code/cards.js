import React from "react";
/* Change layout in future to add more randomized testing ability. For now, list sight words
if possible make the second side only appear on click. So word, click to flip card over for definition
and sentence*/
 
function Cards (props){


  return (

    
    <div className="flip-container container " ontouchstart="this.classList.toggle('hover');">
	<div className="flipper row card text-info bg-white border-info col-6 m-1 mt-5 fs-4">
		<div className="front">
        <div className="card-body">
       
      <img className="img-fluid" src= {props.Photo}
      alt={props.PicAlt}/>
      </div>
		</div>
		<div className="back col ">
        <div className='d-flex justify-content-center row'>
       {/* <div className="card-title text-center font-weight-bold display-4">{props.ProjectName}</div>*/}
  {/*<button onClick={() => { ref.current.toggle(); }}> Toggle via button</button>*/}
  <h5 className="card-title mobile-font">{props.ProjectName}</h5>
  <br></br>
  <div ClassName="row">
 <a href={props.Site} className="mobile-font">Check It Out</a>
 </div>
 <div ClassName="row">
 <a href={props.GitHubURL} className="mobile-font">GitHub Repo</a>
 </div>
 <div ClassName="row">
 <p className="card-text mobile-font"><span className="font-weight-bold"> Concept: </span>{props.Description}</p>
 </div>
 <div ClassName="row">
      <p className="card-text mobile-font mobile-font"><span className="font-weight-bold">Technologies Used:</span>
       {props.Technologies}</p>
       </div>
 </div>
 </div>
		</div>
	</div>


  )
}
export default Cards;