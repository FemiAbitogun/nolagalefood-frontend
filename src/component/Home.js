
import '../css/App.css';
import '../css/ImageSlider.css'
import '../css/Home.css'
import Image_slider from './animation/Image_slider';

function Home() {
  return (
    <div className="container" >
      <div className='container'>

        <div className='Image_DescriptionDiv container'> 

          <div className='ImageLogo col-lg-5 col-12'>
            <img src={require('../images/logo.jpg')} />
          </div>


          <div className='About col-lg-4 col-12 container'>
            <blockquote className='container'>
              Nola Gale Foods LLC, founded in 2023 by Ebenezer Olusegun. The company specializes in producing healthy dry finger foods that combine Latin American and African flavors. Our mission is to provide a unique and nutritious snacking experience to health-conscious individuals who appreciate cultural diversity. We prioritize high-quality ingredients and meticulous recipes to deliver delicious and wholesome snacks. Our product line offers convenience and versatility for various occasions. Nola Gale Foods LLC aims to become a leading brand in the healthy snacking industry, renowned for innovative and culturally inspired dry finger foods.
            </blockquote>

          </div>


        </div>

        <div className='SliderContain'>
          <Image_slider />
        </div>

        <div className='LocTimeContain container'>
          <div className='Locaton_Time'>

            <div className='row '>
              <div className='Location col-7'>
                <div className='LocationTitle fw-bold'>Location</div>
                <blockquote className='container'>
                  Nola Gale Foods LLC is headquartered in Carbondale, Illinois, serving as the central hub for administrative functions, customer service, marketing, and financial management.

                  600 E Campus drive Carbondale IL
                </blockquote>
              </div>

              <div className='Time col-5'>
                <div className='HoursTitle fw-bold'>  Operating Hours</div>
                <blockquote className='container'>
                  8:00am - 5:00pm. Monday to Friday
                  8:00am - 3:00pm. Saturday & Sunday
                </blockquote>

              </div>
            </div>



          </div>
        </div>




      </div>

    </div>
  );
}

export default Home