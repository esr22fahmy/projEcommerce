import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import  imgicon1 from "../../img/online-shopping.png";
import  imgicon2 from "../../img/ux.png";
import  imgicon3 from "../../img/shopping.png";
import  imgicon4 from "../../img/selling.png";
import  imgicon5 from "../../img/mobile-shopping.png";
import  imgicon6 from "../../img/male-clothes.png";
import  imgicon7 from "../../img/money.png";
import styleSli from './SliderData.module.css'

const SliderData = () => {


  
  const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <button className={`${className} slide-arrow prev-arrow`} onClick={onClick}>
        <i className="fal fa-long-arrow-left" />
      </button>
    );
  };

  const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <button className={`${className} slide-arrow next-arrow`} onClick={onClick}>
        <i className="fal fa-long-arrow-right" />
      </button>
    );
  };

  

  const [slidesToShow, setSlidesToShow] = useState(6);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setSlidesToShow(2);
      }else if (window.innerWidth <= 700){
        setSlidesToShow(2);

      }
      else {
        setSlidesToShow(6);
      }
    };

    handleResize(); // استدعاء الدالة عند تحميل الصفحة لتحديد القيمة الأولية
    window.addEventListener('resize', handleResize); // إضافة مستمع لحجم النافذة

    return () => {
      window.removeEventListener('resize', handleResize); // إزالة مستمع الحجم عندما يتم إزالة المكون
    };
  }, []);

  const sliderSettings = {
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    autoplay: true,
    autoplaySpeed: 500,
  };



  // if (window.innerWidth < 600) {
  //   sliderSettings.slidesToShow = 2;
  // }else{
  //   sliderSettings.slidesToShow = 6;

  // }
  return (
    <div className={`${styleSli.secSlider}  mt-4`}>
      <div className=" container-xl">
        <Slider className=' row' {...sliderSettings}>
          {/* slider content*/}
          <div className={`${styleSli.conItem} `}>
            <a href="#" >
              <img className="img-fluid " src={imgicon1} alt="product categorie" />
              <h6 className="cat-title">shop</h6>
            </a>
          </div>
          {/* <span className=' space'> </span> */}
          <div className={`${styleSli.conItem} `}>
            <a className='' href="#" tabIndex="0">
              <img className="img-fluid  " src={imgicon2} alt="product categorie" />
              <h6 className="cat-title ">Elect</h6>
            </a>
          </div>
          {/* <span className=' space '> </span> */}

          <div className={`${styleSli.conItem}`}>
            <a href="#" >
              <img className="img-fluid" src={imgicon3} alt="product categorie" />
              <h6 className="cat-title">shops</h6>
            </a>
          </div>
          {/* <span className=' space'> </span> */}

          <div className={`${styleSli.conItem}`}>
            <a href="#" >
              <img className="img-fluid" src={imgicon4} alt="product categorie" />
              <h6 className="cat-title">sell</h6>
            </a>
          </div>
          {/* <span className=' space '> </span> */}

          <div className={`${styleSli.conItem}`}>
            <a href="#" >
              <img className="img-fluid" src={imgicon5}alt="product categorie" />
              <h6 className="cat-title">online</h6>
            </a>
          </div>
          {/* <span className=' space'> </span> */}

          <div className={`${styleSli.conItem}`}>
            <a href="#" >
              <img className="img-fluid" src={imgicon6} alt="product categorie" />
              <h6 className="cat-title">clothes</h6>
            </a>
          </div>
          {/* <span className=' space'> </span> */}

          <div className={`${styleSli.conItem}`}>
            <a href="#" >
              <img className="img-fluid" src={imgicon7}alt="product categorie" />
              <h6 className="cat-title">money</h6>
            </a>
          </div>
          {/* <span className=' space'> </span> */}

          
        </Slider>
      </div>
    </div>
  );
};

export default SliderData;
