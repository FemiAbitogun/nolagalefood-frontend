//https://www.w3schools.com/howto/howto_js_slideshow.asp

import React from 'react'
import { useEffect, useRef } from 'react';


function Image_slider() {
    let slideIndex = 0;

    const mounted = useRef(false);
    useEffect(() => {
        mounted.current = true;
        showSlides();
        return () => {
            mounted.current = false;
        };
    }, []);


    function showSlides() {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";

        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(() => {
            mounted.current && showSlides();
        },4000);

    }

    return (
        < >
            <div className="slideshow-container container SliderView">

                <div className="mySlides fade">
                    <div className="numbertext"></div>
                   
                    <img src={require('../../images/IMG-20230920-WA0030.jpg')} style={{ width: "350px", height: "300px" }} />
                </div>

                <div className="mySlides fade">
                    <div className="numbertext"></div>
                    <img src={require('../../images/IMG-20230920-WA0031.jpg')} style={{ width: "350px", height: "300px" }} />

                </div>

                <div className="mySlides fade">
                    <div className="numbertext"></div>
                    <img src={require('../../images/IMG-20230920-WA0032.jpg')} style={{ width: "350px", height: "300px" }} />
                </div>
                <div className="mySlides fade">
                    <div className="numbertext"></div>
                    <img src={require('../../images/IMG-20230920-WA0033.jpg')} style={{ width: "350px", height: "300px" }} />
                </div>
                <div className="mySlides fade">
                    <div className="numbertext"></div>
                    <img src={require('../../images/IMG-20230920-WA0034.jpg')} style={{ width: "350px", height: "300px" }} />
                </div>

                <div className="mySlides fade">
                    <div className="numbertext"></div>
                    <img src={require('../../images/IMG-20230920-WA0035.jpg')} style={{ width: "350px", height: "300px" }} />
                </div>

                <div className="mySlides fade">
                    <div className="numbertext"></div>
                    <img src={require('../../images/IMG-20230920-WA0036.jpg')} style={{ width: "350px", height: "300px" }} />
                </div>
            </div>

            <br />
        </>


    )
}

export default Image_slider