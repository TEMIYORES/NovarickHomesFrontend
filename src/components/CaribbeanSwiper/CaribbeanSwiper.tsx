// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./caribbeanswiper.scss";

import cari_1 from "./cari_1.png";
import cari_2 from "./cari_2.png";

const images = [
  {
    image: cari_1,
    title: "EXTERIORS",
  },
  {
    image: cari_2,
    title: "EXTERIORS",
  },
];

const Caribbeanswiper = () => {
  return (
    <Swiper
      className="swiper-comp-container"
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {images.map((data) => {
        return (
          <SwiperSlide className="swiper-comp">
            <img src={data.image} alt="house" />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Caribbeanswiper;
