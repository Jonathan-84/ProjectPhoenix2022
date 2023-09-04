import React, {useState} from 'react';
import Tracker from '../Components/GameTracker/tracker';

function Fun(){

  const [status, setStatus] = useState(false);
  const [openChallenge, setComplete] = useState();

  const pressed = [];

  const secretCode = 'bblp';
  const altcode = 'ArrowLeftArrowLeftlp'

  window.addEventListener('keydown', (e) => {
    console.log(e.key);
    pressed.push(e.key);
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
    if (pressed.join('').includes(secretCode)) {
      setStatus(true)
      setComplete(true)
      setTimeout(() => {
        clearState();
      }, 2000);
    }
    if (pressed.join('').includes(altcode)) {
      console.log('Alt Toasty!');
      setStatus(true)
      
      setComplete(true)
      setTimeout(() => {
        clearState();
      }, 2000);
    }
  });


  
  const clearState = () => {
    setStatus({ ...false });
  };
 console.log(openChallenge)

    // const playGame =()=> {
    
    //     if ('speechSynthesis' in window) {
    //      }else{
    //        alert("Sorry, your browser doesn't support text to speech!");
    //      }
    
    // var msg = new SpeechSynthesisUtterance();
    // msg.text = "Do you... want to... play... a game";
    // msg.lang = "en-US"
    // // msg.voice = window.speechSynthesis.getVoices()[2];
    // window.speechSynthesis.speak(msg);
    //   }
  // const toasty = () => {
  //   setComplete({ ...true });
  // };
   

//     useEffect(()=> {
// //     //   if (!openChallenge) {
// //     //     setComplete(true);
// // //     // }
//   playGame()
// // //  updateTracker()
// //  toasty()
//     } ,[])


  //   const { code} = this.state;
  //   let percentage;

  //     if (code === "toasty" ) {
  //       percentage =(
  //   <img className="img-fluid" src= 'https://raw.githubusercontent.com/Jonathan-84/ProjectPhoenix2022/master/src/assets/images/portbook.jpeg'
  //   alt='check it out'/>    )
  // }
  

    return (
      <div className='row'>
        <h2 className='text-center'>Fun</h2>
<img src="https://raw.githubusercontent.com/Jonathan-84/ProjectPhoenix2022/master/src/assets/images/Untitled%20design.png" className="float-left h-25 w-25" alt="TV with First challenge"></img>
     

<br></br>
<div className='row'>
<div className='col'>
<div class="d-flex flex-row-reverse align-items-end">
{status === true &&
  <>
          <img className="h-25 w-25" src= 'https://raw.githubusercontent.com/Jonathan-84/ProjectPhoenix2022/master/src/assets/images/toasty.jpeg'
    alt='check it out'/>
  
    </>
      }
      <div className='d-none'>
    <Tracker mk= {openChallenge}/>
    </div>
      </div>
  
      </div>
      </div>
      </div>
// </div>
    )
};

  export default Fun;