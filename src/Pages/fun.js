
import React, {useEffect, useState} from 'react';
import TV from "../assets/images/Untitled design.png";


function Fun(){

  const [showToasty, setToasty] = useState('false');

  const pressed = [];

  const secretCode = 'bblp';
  const altcode = 'ArrowLeftArrowLeftlp'

  window.addEventListener('keydown', (e) => {
    console.log(e.key);
    pressed.push(e.key);
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
    if (pressed.join('').includes(secretCode)) {
      setToasty("true")
      setTimeout(() => {
        clearState();
      }, 2000);
    }
    if (pressed.join('').includes(altcode)) {
      console.log('Alt Toasty!');
      setToasty("true")
      setTimeout(() => {
        clearState();
      }, 2000);
    }
  });

  const clearState = () => {
    setToasty({ ...'false' });
  };





    const playGame =()=> {
    
        if ('speechSynthesis' in window) {
         }else{
           alert("Sorry, your browser doesn't support text to speech!");
         }
    
    var msg = new SpeechSynthesisUtterance();
    msg.text = "Do you... want to... play... a game";
    msg.lang = "en-US"
    // msg.voice = window.speechSynthesis.getVoices()[2];
    window.speechSynthesis.speak(msg);
      }
   
    useEffect(()=> {
 playGame()
//  toasty()
    } ,[])

    console.log(showToasty)
  //   const { code} = this.state;
  //   let percentage;

  //     if (code === "toasty" ) {
  //       percentage =(
  //   <img className="img-fluid" src= 'https://raw.githubusercontent.com/Jonathan-84/ProjectPhoenix2022/master/src/assets/images/portbook.jpeg'
  //   alt='check it out'/>    )
  // }

    return (
      
        <div className='col'>
<h2 className='text-center'>Fun</h2>
<img src={TV} class="rounded float-left" alt="..."></img>
<br></br>
<div className="d-flex mt-auto justify-content-center">
{showToasty === 'true' &&
        <h2>
          <img className="img-fluid" src= 'https://raw.githubusercontent.com/Jonathan-84/ProjectPhoenix2022/master/src/assets/images/portbook.jpeg'
    alt='check it out'/>
        </h2>
      }
</div>
</div>
    )
};

  export default Fun;