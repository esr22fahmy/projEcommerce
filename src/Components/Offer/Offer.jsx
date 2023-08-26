import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styleOffer from './Offer.module.css'

export default function Offer() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true, // تمكين الـ autoplay
        autoplaySpeed: 2000, // ضبط سرعة الـ autoplay 
        prevArrow: <button className="slide-arrow prev-arrow slick-arrow"><i className="fa-solid fa-arrow-left-long"></i></button>,
        nextArrow: <button className="slide-arrow next-arrow slick-arrow"><i className="fal fa-long-arrow-right"></i></button>,
      };
    
      return (
        <div className={`${styleOffer.headerSlider} `}>
          <div className="container">
            <div className="row justify-content-center  align-items-center ">
              <div className="col-10 col-xl-5 col-lg-6 col-md-10  ">
                <Slider {...settings}>
                  <div className="campaign-content  d-flex  justify-content-center pt-3    ">
                   <p className='  '>
                      STUDENT NOW GET 10% OFF : 
                      <a href="#" tabIndex="-1">
                        GET OFFER
                      </a>
                    </p>
                  </div>
                  <div className="campaign-content  d-flex  justify-content-center  pt-3">
                    <p>
                      STUDENT NOW GET 20% OFF :{" "}
                      <a href="#" tabIndex="0">
                        GET OFFER
                      </a>
                    </p>
                  </div>
                  <div className="campaign-content  d-flex  justify-content-center  pt-3">
                    <p >
                      STUDENT NOW GET 25% OFF :{" "}
                      <a href="#" tabIndex="-1">
                        GET OFFER
                      </a>
                    </p>
                  </div>
                  <div className="campaign-content d-flex  justify-content-center  pt-3">
                    <p>
                      STUDENT NOW GET 15% OFF :{" "}
                      <a href="#" tabIndex="-1">
                        GET OFFER
                      </a>
                    </p>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      );
    };
    
    

