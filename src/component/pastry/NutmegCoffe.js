import React from 'react'

function NutmegCoffe() {
  return (
    <>
      <div className='PastryContainer'>

        <div className='PastryImageLogo col-lg-5 col-12 container '>
          <img src={require
            ('../../images/IMG-20230920-WA0032.jpg')} />
        </div>

        <div className='col-lg-5 col-12 container '>
          <blockquote className='PasteryDetails'>
            <b>
              Nutmeg and coffee blended together has always been the way to make magic. The earthy notes and sweet taste screams6a different touch.
            </b>

            <br />
            <b>
              These natural flavors create an irresistible mouth feel.
              Dig in! It's natural and fantastic!

            </b>

          </blockquote>
        </div>
      </div>
    </>
  )
}

export default NutmegCoffe