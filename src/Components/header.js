import React from 'react';



function Navbar(){

  return (
  
  <nav classNameName="navbar navbar-expand-lg bg-light">


      {/* This is the Me Buttons*/} 
      <div className='row '>
      <div className='col d-flex flex-column justify-content-around  flex-md-row '>
<a className='text-white self-promo font-weight-bold' href="https://github.com/Jonathan-84" target="_blank" rel='noreferrer'>GitHub <span className="fa-brands fa-github">
    </span></a>
    </div>
    <div className='col  '>

<a className=' text-white self-promo font-weight-bold' href="https://www.linkedin.com/in/jrob84" target="_blank" rel='noreferrer'>LinkedIn <span className="fa fa-linkedin-square"></span></a>
</div>

</div>

</nav>
  )
}
export default Navbar;