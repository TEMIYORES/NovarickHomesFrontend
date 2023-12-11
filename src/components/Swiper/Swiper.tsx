// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./swiper.scss";
import { Img47, Img48, Img49 } from "../../assets/images";
import ruby3_1 from "./Ruby 3 3DA.jpg";
import ruby3_2 from "./RUBY 3 3DB.jpg";
import ruby3_3 from "./RUBY 3 3DC.jpg";
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
];
const images2 = [
  {
    image: ruby3_1,
    title: "EXTERIORS",
  },
  {
    image: ruby3_2,
    title: "EXTERIORS",
  },
  {
    image: ruby3_3,
    title: "EXTERIORS",
  },
];

const SwiperComp = ({ name }: { name: string }) => {
  const data = name == "ruby2" ? images : images2;
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
      {data.map((data) => {
        return (
          <SwiperSlide className="swiper-comp">
            <img src={data.image} alt="house" />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SwiperComp;
