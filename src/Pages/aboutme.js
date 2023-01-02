import React from 'react';
//import announce from "../assets/images/CareerChangeAnnounce";






function AboutMe(){

  
//   const greetingText = () => {
//     let currentDate = new Date();
// let hour = currentDate.getHours();
//     if (hour >= 12 && hour <=17) return "Good Afternoon"
//     else if (hour >= 18) return "Good Evening"
//     else return "Good Morning"
//   }

    return (
      <>
        <div className='col'>
        <div className="text-center">
          <div className='mw-50 mh-50'>
              <img  src="https://raw.githubusercontent.com/Jonathan-84/Jonathan-84.github.io/master/assets/img/My-img8bit-com-Effect%20(2).0ca0bbe1.jpg" className='img-fluid' width="450" height="360" alt="8 bit me"/>
</div>
</div>
<h2 className='text-center'>About Me</h2>
{/* <h1 > {greetingText()}, I'm Jonathan!   </h1> */}
<br></br>
<div className="d-flex mt-auto justify-content-center">
<p>  After spending 15 years in Sales and Marketing, I transitioned into Software Development. Providing an opportunity to apply his skills and experience towards tackling development projects. 
Not one to be confined, he has always explored various topics outside core job functions, and continues to seek knowledge wherever he can find it. While some hide the scars of being a "Jack-of-all-Trades, Master-of-None", Jonathan wears them as badges of honor. 
While bringing those traits to future challenges, he seeks to be the next Champion.
Email Me at Jonathan.Robinson@outlook.com Connect with me on LinkedIn https://www.linkedin.com/in/jrobinson8
 </p>
{/* <p>  After 15 years in the underground Sales and Marketing circuit, Jonathan sought new challenges and a career in Software Development. Providing an opportunity to apply his skills and experience towards tackling development projects. 
Not one to be confined, he has always explored various topics outside core job functions, and continues to seek knowledge wherever he can find it. While some hide the scars of being a "Jack-of-all-Trades, Master-of-None", Jonathan wears them as badges of honor. 
While bringing those traits to future challenges, he seeks to be the next Champion.
Email Me at Jonathan.Robinson@outlook.com Connect with me on LinkedIn https://www.linkedin.com/in/jrobinson8
 </p> */}
</div>
</div>
</>

    )
    };

  export default AboutMe;