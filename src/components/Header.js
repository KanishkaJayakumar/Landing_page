import React from 'react'
import Navbar from './Navbar'


const Header = () => {
  return (
    <div id='main'>
        <Navbar/>
        <div className='name'>
            <h1><span>Launch your App     </span>
                with confidence and 
                creativity</h1>
            <p className='details'>
            Are you tired of reading through endless lines of code and not getting the results you desire?
            </p>
            <a href='#' className='cv-btn'>Download</a>
        </div>
    </div>
  )
}

export default Header