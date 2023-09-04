import React from 'react'

const Featurebox = (props) => {
  return (
    <div id='a-box'>
        <div className='a-b-img'>
            <img src={props.image}></img>
        </div>
        <div className='s-b-text'>
            <h2>
                {props.title}
            </h2>
            <p>Are you tired of reading through endless lines of code and not getting the results you desire?</p>

        </div>
    </div>
  )
}

export default Featurebox