import React from 'react';




function Home(){


  const greetingText = () => {
    let currentDate = new Date();
let hour = currentDate.getHours();
    console.log(hour)
    if (hour >= 12 && hour <=17) return "Good Afternoon! "
    else if (hour >= 18) return "Good Evening! "
    else return "Good Morning! "
  }

    return (
      
        <div className='col'>
<h2 className='text-center'>Hello</h2>

<br></br>
<div className="d-flex mt-auto justify-content-center">
<p> {greetingText()} More information will follow. </p>
</div>
</div>
    )
    };
  export default Home;