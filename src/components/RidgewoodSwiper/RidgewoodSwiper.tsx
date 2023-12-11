// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./ridgewoodswiper.scss";
import entrance from './3D_ENTRANCE.png'
import birdEye from './3D_BIRD-EYE VIEW.png'
import farm from './3D_FARM.png'

const images = [
  {
    image: entrance,
    title: "EXTERIORS",
  },
  {
    image: birdEye,
    title: "EXTERIORS",
  },
  {
    image: farm,
    title: "EXTERIORS",
  },
];
const RidgewoodSwiper = () => {
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

export default RidgewoodSwiper;
