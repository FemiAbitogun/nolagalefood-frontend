import React from 'react'

function SweetChilli() {
  return (
    <>

      <div className='PastryContainer'>
        <div className='PastryImageLogo col-lg-5 col-12 container '>
          <img src={require('../../images/IMG-20230920-WA0035.jpg')} />
        </div>

        <div className='col-lg-5 col-12 container '>
          <blockquote className='PasteryDetails'>
            <b>
            Sweet Chilli Cheese is distinctively American following this tradition we have recreated our pastry stick to suit the American audience.
            </b>

            <br />
            <b>

            This blend makes the difference with its mild and spicy flavor. Every bite has a pleasantly rich taste.


            </b>

          </blockquote>

        </div>
      </div>

    </>
  )
}

export default SweetChilli