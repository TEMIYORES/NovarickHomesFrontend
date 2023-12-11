import React, { useState } from "react";
import "./ruby3Slider.scss";
// import Carousel from "react-elastic-carousel";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import plan1 from "./plan1.jpeg";
import plan2 from "./plan2.jpeg";
import plan3 from "./plan3.jpeg";

import ruby3_1 from "../Swiper/Ruby 3 3DA.jpg";
import ruby3_2 from "../Swiper/RUBY 3 3DB.jpg";
import ruby3_3 from "../Swiper/RUBY 3 3DC.jpg";
const Ruby3Slider = () => {
  const images = [
    {
      image: plan1,
      title: "FLOOR PLAN",
    },
    {
      image: plan2,
      title: "FLOOR PLAN",
    },
    {
      image: plan3,
      title: "FLOOR PLAN",
    },
    {
      image: ruby3_1,
      title: "EXTERIOR",
    },
    {
      image: ruby3_2,
      title: "EXTERIOR",
    },
    {
      image: ruby3_3,
      title: "EXTERIOR",
    },
  ];
  const breakpoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1 },
    { width: 768, itemsToShow: 1 },
    { width: 1024, itemsToShow: 1 },
  ];

  return (
    <>
      {/* <Carousel
        className="Ruby3Slider"
        breakPoints={breakpoints}
        pagination={false}
      >
        {images.map((data) => {
          return (
            <div className="Ruby3Slider-slide" key={data.img}>
              <img src={data.image} alt={data.image} />
              <div className="Ruby3Slider-title">{data.title}</div>
            </div>
          );
        })}
      </Carousel> */}
      <Swiper
        className="ruby3-comp-container"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {images.map((data) => {
          return (
            <SwiperSlide className="ruby3-comp">
              <img src={data.image} alt="house" />
              <div className="ruby3-title">{data.title}</div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Ruby3Slider;
