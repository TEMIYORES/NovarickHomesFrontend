import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Zoom } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/zoom";
import "./gallery.scss";

import { Img44, Img45, Img46, Img47, Img48, Img49 } from "../../assets/images";
import ruby3_1 from "../Swiper/Ruby 3 3DA.jpg";
import ruby3_2 from "../Swiper/RUBY 3 3DB.jpg";
import ruby3_3 from "../Swiper/RUBY 3 3DC.jpg";
import ruby3_4 from "../Swiper/Ruby 3 interior .jpg";
import ruby3_5 from "../Swiper/Ruby 3 interior 1.jpg";
import ruby3_6 from "../Swiper/Ruby 3 interior 2.jpg";
import ruby3_7 from "../Swiper/Ruby 3 .jpg";
import ruby3_8 from "../Swiper/RUBY3 3DG.jpg";
const Gallery = ({ name }) => {
  const images = [
    {
      image: Img47,
      title: "EXTERIORS",
    },
    {
      image: Img48,
      title: "EXTERIORS",
    },
    {
      image: Img49,
      title: "EXTERIORS",
    },
    {
      image: Img44,
      title: "FLOOR PLAN",
    },
    {
      image: Img45,
      title: "FLOOR PLAN",
    },
    {
      image: Img46,
      title: "FLOOR PLAN",
    },
    {
      image: ruby3_1,
      title: "EXTERIORS",
    },
    {
      image: ruby3_2,
      title: "FEXTERIORS",
    },
    {
      image: ruby3_3,
      title: "EXTERIORS",
    },
    {
      image: ruby3_4,
      title: "EXTERIORS",
    },
    {
      image: ruby3_4,
      title: "INTERIOR",
    },
    {
      image: ruby3_5,
      title: "INTERIOR",
    },
    {
      image: ruby3_6,
      title: "INTERIOR",
    },
    {
      image: ruby3_7,
      title: "EXTERIORS",
    },
    {
      image: ruby3_8,
      title: "EXTERIORS",
    },
  ];
  return (
    <div className="gallery">
      <h1 className="gallery-header">Gallery</h1>
      <Swiper
        className="ruby-comp-container"
        modules={[Navigation, Pagination, Scrollbar, A11y, Zoom]}
        spaceBetween={10}
        navigation
        zoom={true}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        breakpoints={{
          // when window width is >= 640px
          425: {
            width: 425,
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 3,
          },
        }}
      >
        {images.map((data) => (
          <SwiperSlide className="ruby-comp">
            <div className="swiper-zoom-container">
              <img src={data.image} alt="house" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Gallery;
