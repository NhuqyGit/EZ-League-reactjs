import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './MySlider.scss';
import * as image from "./image"
import { useState } from 'react';

const MySlider = () => {
  const images = [
    image.profile1,
    image.profile2,
    image.profile3,
    image.profile4,
    image.profile5
  ];

  const CustomPrevArrow = (props) => (
    <div className='left-btn' onClick={props.onClick}>
        <button>l</button>
    </div>
  );

  const CustomNextArrow = (props) => (
    <div className='right-btn' onClick={props.onClick}>
        <button>l</button>
    </div>
  );

  const settings = {
    dots: true, // Hiển thị chấm chỉ mục
    infinite: true, // Lặp vô hạn các slide
    speed: 300, // Tốc độ chuyển đổi slide (ms)
    slidesToShow: 1, // Số slide hiển thị trên mỗi lần trượt
    slidesToScroll: 1, // Số slide được trượt khi nhấn nút điều hướng
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    customPaging: (index) => (
        <div className='person-item'>
          <img src={images[index]} alt="" />
        </div>
      )
  

  };

  

  return (

    <Slider {...settings}>
        <div className='rv-content-container'>
            <div className='center-content'>
                <div className='person-say'>
                    <h4>“</h4>
                    <h5>The support was nothing less than amazing.</h5>
                    <p>"With close to 3,000 participants who we communicate with and receive payment from we needed to make sure we had a company that had understood our needs - we found this with EZ Active. They took time to look over our requirements and built and have maintained a viable platform. We would have no hesitation recommending EZ Active as they have produced the perfect platform for our requirements and answer questions and adapt to our needs in a highly professional manner. We will not be using anyone else in the future."</p>
                    <h5 className='per-name'>Paul Smith</h5>
                    <p className='per-profile'>Chairman, HongKong Junior Football League</p>
                </div>
            </div>
        </div>

        <div className='rv-content-container'>
            <div className='center-content'>
                <div className='person-say'>
                    <h4>“</h4>
                    <h5>The support was nothing less than amazing.</h5>
                    <p>"With close to 3,000 participants who we communicate with and receive payment from we needed to make sure we had a company that had understood our needs - we found this with EZ Active. They took time to look over our requirements and built and have maintained a viable platform. We would have no hesitation recommending EZ Active as they have produced the perfect platform for our requirements and answer questions and adapt to our needs in a highly professional manner. We will not be using anyone else in the future."</p>
                    <h5 className='per-name'>Paul Smith</h5>
                    <p className='per-profile'>Chairman, HongKong Junior Football League</p>
                </div>
            </div>
        </div>

        <div className='rv-content-container'>
            <div className='center-content'>
                <div className='person-say'>
                    <h4>“</h4>
                    <h5>The support was nothing less than amazing.</h5>
                    <p>"With close to 3,000 participants who we communicate with and receive payment from we needed to make sure we had a company that had understood our needs - we found this with EZ Active. They took time to look over our requirements and built and have maintained a viable platform. We would have no hesitation recommending EZ Active as they have produced the perfect platform for our requirements and answer questions and adapt to our needs in a highly professional manner. We will not be using anyone else in the future."</p>
                    <h5 className='per-name'>Paul Smith</h5>
                    <p className='per-profile'>Chairman, HongKong Junior Football League</p>
                </div>
            </div>
        </div>

        <div className='rv-content-container'>
            <div className='center-content'>
                <div className='person-say'>
                    <h4>“</h4>
                    <h5>The support was nothing less than amazing.</h5>
                    <p>"With close to 3,000 participants who we communicate with and receive payment from we needed to make sure we had a company that had understood our needs - we found this with EZ Active. They took time to look over our requirements and built and have maintained a viable platform. We would have no hesitation recommending EZ Active as they have produced the perfect platform for our requirements and answer questions and adapt to our needs in a highly professional manner. We will not be using anyone else in the future."</p>
                    <h5 className='per-name'>Paul Smith</h5>
                    <p className='per-profile'>Chairman, HongKong Junior Football League</p>
                </div>
            </div>
        </div>

        <div className='rv-content-container'>
            <div className='center-content'>
                <div className='person-say'>
                    <h4>“</h4>
                    <h5>The support was nothing less than amazing.</h5>
                    <p>"With close to 3,000 participants who we communicate with and receive payment from we needed to make sure we had a company that had understood our needs - we found this with EZ Active. They took time to look over our requirements and built and have maintained a viable platform. We would have no hesitation recommending EZ Active as they have produced the perfect platform for our requirements and answer questions and adapt to our needs in a highly professional manner. We will not be using anyone else in the future."</p>
                    <h5 className='per-name'>Paul Smith</h5>
                    <p className='per-profile'>Chairman, HongKong Junior Football League</p>
                </div>
            </div>
        </div>
    </Slider>
  );
};

export default MySlider;
