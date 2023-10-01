import React from 'react'

function CinannamonChoc() {
    return (
        <>
            <div className='PastryContainer'>
                <div className='PastryImageLogo col-lg-5 col-12 container '>
                    <img src={require('../../images/IMG-20230920-WA0030.jpg')} />
                </div>
                <div className='col-lg-5 col-12 container '>
                    <blockquote className='PasteryDetails'>
                        <b>
                            Cinnamon and chocolate has long been a staple in the pastry industry, this blend gives the pastry stick a sweet and chocolaty flavor.
                        </b>

                        <br />
                        <b>

                            Adding to the richness of this snack; we have recreated what the caribbean beaches would taste like if they were covered with cinnamon infused chocolate.

                        </b>

                    </blockquote>
                </div>
            </div>
        </>
    )
}

export default CinannamonChoc