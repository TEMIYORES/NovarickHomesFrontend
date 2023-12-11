// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import { A11y, Navigation, Pagination, Scrollbar, Zoom } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/zoom";
import "./caribbeangallery.scss";

import caribbean_1 from "./caribbean_1.jpeg";
import caribbean_2 from "./caribbean_2.jpeg";
import caribbean_3 from "./caribbean_3.jpeg";
import caribbean_4 from "./caribbean_4.jpeg";
import caribbean_5 from "./caribbean_5.jpeg";
import caribbean_6 from "./caribbean_6.jpeg";
import caribbean_7 from "./caribbean_7.jpeg";
import caribbean_8 from "./caribbean_8.jpeg";

const Caribbeangallery = () => {
  const images = [
    {
      image: caribbean_1,
    },
    {
      image: caribbean_2,
    },
    {
      image: caribbean_3,
    },
    {
      image: caribbean_4,
    },
    {
      image: caribbean_5,
    },
    {
      image: caribbean_6,
    },
    {
      image: caribbean_7,
    },
    {
      image: caribbean_8,
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

export default Caribbeangallery;
