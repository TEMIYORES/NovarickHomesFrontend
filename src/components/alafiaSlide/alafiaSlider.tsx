import "./alafiaSlider.scss";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import birdEye from "../RidgewoodSwiper/3D_BIRD-EYE VIEW.png";
import alafia from "../RidgewoodSwiper/3D_ALAFIA RESORTS 2.png";
import resort1 from "./3D_ALAFIA RESORTS 1.png";
import resort2 from "./3D_ALAFIA RESORTS 4.png";

const AlafiaSlider = () => {
  const images = [
    {
      image: alafia,
      title: "FLOOR PLAN",
    },
    {
      image: birdEye,
      title: "FLOOR PLAN",
    },
    {
      image: resort1,
      title: "FLOOR PLAN",
    },
    {
      image: resort2,
      title: "FLOOR PLAN",
    },
  ];

  return (
    <>
      <Swiper
        className="alafia-comp-container flex-1"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
      >
        {images.map((data) => (
          <SwiperSlide className="alafia-comp">
            <img src={data.image} alt="house" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default AlafiaSlider;
