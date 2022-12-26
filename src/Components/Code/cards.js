import React from "react";
/* Change layout in future to add more randomized testing ability. For now, list sight words
if possible make the second side only appear on click. So word, click to flip card over for definition
and sentence*/
 
function Cards (props){


  return (

    
    <div className="flip-container container " ontouchstart="this.classList.toggle('hover');">
	<div className="flipper card p-5">
       {/* Front of Card Design*/}

		<div className="front bg-light rounded border border-success justify-content-center">
      <img className="img-fluid" src= {props.Photo}
      alt={props.PicAlt}/>
		</div>
      {/* Back of Card Design*/}
		<div className="back col text-success bg-dark rounded ">
        <div className='d-flex row justify-content-center'>
  <h4 className="card-title text-white mobile-font p-1">{props.ProjectName}</h4>
  <br></br>
  <br></br>
  
 
 <p className="card-text mobile-font p-1"><span className="font-weight-bold"> Concept: </span>{props.Description}</p>
 <a href={props.Site} target="_blank" rel="noreferrer"><p className="card-text mobile-font font-weight-bold">Check It Out!</p></a>
 <br></br>
 <br></br>
 
 <p className="card-text mobile-font mobile-font p-1"><span className="font-weight-bold">Technologies Used:</span>
       {props.Technologies}</p>
       <a href={props.GitHubURL} target="_blank" rel="noreferrer"><p className="card-text mobile-font font-weight-bold">Check out GitHub.</p></a>
 <br></br>
  <br></br>
 </div>
 </div>
		</div>
	</div>


  )
}
export default Cards;