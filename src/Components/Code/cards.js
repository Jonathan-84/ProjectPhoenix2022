import React, { useRef } from "react";
import Flippy, { FrontSide, BackSide } from 'react-flippy';
/* Change layout in future to add more randomized testing ability. For now, list sight words
if possible make the second side only appear on click. So word, click to flip card over for definition
and sentence*/
 
function Cards (props){
  const ref = useRef();

  return (
    // // <div className="card-columns p-3">
    // <div className="card-group">
    // <div className=" card cards-width m-4 text-success bg-dark rounded">
<Flippy
      flipOnHover={false} // default false
      flipOnClick={true} // default false
      flipDirection="horizontal" // horizontal or vertical
      ref={ref} // to use toggle method like ref.curret.toggle()
      // if you pass isFlipped prop component will be controlled component.
      // and other props, which will go to div
  >
    
     <div className="card bg-secondary h-100 text-center m-4">

<div  className="col">
  <div></div>
       {/* Front of Card Design*/}
<FrontSide>

		<div className="bg-light rounded border border-success text-wrap">
      <div>
      <img className="img-fluid" src= {props.Photo}
      alt={props.PicAlt}/>
		</div>
    </div>

    </FrontSide>
      {/* Back of Card Design*/}
      <BackSide>
   {/* <div  className="card-body" > */}
  <h4 className="card-title  text-white mobile-font p-1">{props.ProjectName}</h4>
  <br></br>
  
 
 <p className="card-text mobile-font p-1"><span className="font-weight-bold"> Concept: </span>{props.Description}</p>
 <a href={props.Site} target="_blank" rel="noreferrer"><p className="card-text mobile-font font-weight-bold">Check It Out!</p></a>
 <br></br>
 <br></br>
 
 <p className="card-text mobile-font mobile-font p-1"><span className="font-weight-bold">Technologies Used:</span>
       {props.Technologies}</p>
       <a href={props.GitHubURL} target="_blank" rel="noreferrer"><p className="card-text mobile-font font-weight-bold">Check out GitHub.</p></a>
 </BackSide>
 </div>
  </div>

  </Flippy>


  )
}
export default Cards;