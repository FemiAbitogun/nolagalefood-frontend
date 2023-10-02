import React from 'react'
import '../../css/PastryComponent.css'

function AlmondOats() {
    return (
        <>
          

            <div className='PastryContainer '>
                <div className='PastryImageLogo col-lg-6 col-12 container '>
                    <img src={require('../../images/IMG-20230920-WA0031.jpg')} />
                </div>

                <div className='col-lg-6 col-12 container '>
                    <blockquote className='PasteryDetails'>
                        <b>
                            The blend of the almond and oats gives the pastry stick a soothing and exquisite taste.
                        </b>
                        <br/>
                        <b>
                        Adding to the richness of this snack, the fibre content and nutty flavor makes it crunchy and appealing.
                        Snack on and enjoy!
                        </b>
                    </blockquote>
                </div>
            </div>
        </>
    )
}

export default AlmondOats