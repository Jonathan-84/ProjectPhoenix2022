import React from 'react';

// import hero from '../assets/images/Hero.JPG'; // gives image path




function Home(){


  const greetingText = () => {
    let currentDate = new Date();
let hour = currentDate.getHours();
    if (hour >= 12 && hour <=17) return "Good Afternoon"
    else if (hour >= 18) return "Good Evening"
    else return "Good Morning"
  }

    return (
      <>

        <div class="col gyro">
        {/* <img src={hero} className='img-fluid mw-25 mh-25' alt="8 bit me"></img> */}
        <div class="card-img-overlay text-white d-flex justify-content-center text">
          <div>
        <h1 > {greetingText()}, I'm Jonathan!   </h1>
        <br></br>
        </div>
  </div>
     </div>


</>
    )
    };
  export default Home;