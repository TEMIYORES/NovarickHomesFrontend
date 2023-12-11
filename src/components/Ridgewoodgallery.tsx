// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Zoom } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/zoom";
import "./ridgewoodgallery.scss";

import birdEye from "../RidgewoodSwiper/3D_BIRD-EYE VIEW.png";
import alafia from "../RidgewoodSwiper/3D_ALAFIA RESORTS 2.png";
import commercial from "../RidgewoodSwiper/3D_COMMERCIAL.png";
import police from "../RidgewoodSwiper/3D_POLICE STATION.png";
import farm from "../RidgewoodSwiper/3D_FARM.png";
import garden from "../RidgewoodSwiper/3D_GARDEN DUSK.png";
import entrance from "../RidgewoodSwiper/3D_ENTRANCE.png";
import resort1 from "../RidgewoodSwiper/3D_ALAFIA RESORTS 1.png";
import resort2 from "../RidgewoodSwiper/3D_ALAFIA RESORTS 4.png";

const Ridgewoodgallery = () => {
  const images = [
    {
      image: birdEye,
      title: "FLOOR PLAN",
    },
    {
      image: entrance,
      title: "FLOOR PLAN",
    },
    {
      image: alafia,
      title: "FLOOR PLAN",
    },
    {
      image: police,
      title: "FLOOR PLAN",
    },
    {
      image: commercial,
      title: "EXTERIORS",
    },
    {
      image: garden,
      title: "EXTERIORS",
    },
    {
      image: farm,
      title: "EXTERIORS",
    },
    {
      image: resort1,
      title: "EXTERIORS",
    },
    {
      image: resort2,
      title: "EXTERIORS",
    },
  ];
  return (
    <div className="gallery">
      <h1>Gallery</h1>
      <Swiper
        className="ridgewood-comp-container"
        modules={[Navigation, Pagination, Scrollbar, A11y, Zoom]}
        slidesPerView={3}
        spaceBetween={10}
        navigation
        zoom={true}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
      >
        {images.map((data) => (
          <SwiperSlide className="ridgewood-comp">
            <div className="swiper-zoom-container">
              <img src={data.image} alt="house" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Ridgewoodgallery;
