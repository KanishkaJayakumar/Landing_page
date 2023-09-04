import React from 'react'

const About = (props) => {
  return (
    <div id='about'>
        <div className='about-image'>
            <img src={props.image}></img>
        </div>
        <div className='about-text'>
            <h2>
                {props.title}
            </h2>
            <p>
            Are you tired of reading through endless lines of code and not getting the results you desire?Are you tired of reading through endless lines of code and not getting the results you desire?Are you tired of reading through endless lines of code and not getting the results you desire?Are you tired of reading through endless lines of code and not getting the results you desire?
            </p>
            <button>{props.button}</button>
        </div>
    </div>
  )
}

export default About