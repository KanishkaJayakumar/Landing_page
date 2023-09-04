import React from 'react'
import Featurebox from '../components/Featurebox'
import featureimage from '../components/images/feature_1.png'
import featureimage1 from '../components/images/feature_2.png'
import featureimage2 from '../components/images/feature_3.png'

const Feature = () => {
  return (
    <div id='features'>
        <div className='a-container'>
            <Featurebox image={featureimage} title={'Development Course'}/>
            <Featurebox image={featureimage1} title='Money Saving Services'/>
            <Featurebox image={featureimage2} title='Usability Interface'/>
        </div>
    </div>
  )
}

export default Feature