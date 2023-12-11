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
import "./rubygallery.scss";

import { Img44, Img45, Img46, Img47, Img48, Img49 } from "../../assets/images";
import ruby3_1 from "../Swiper/Ruby 3 3DA.jpg";
import ruby3_2 from "../Swiper/RUBY 3 3DB.jpg";
import ruby3_3 from "../Swiper/RUBY 3 3DC.jpg";
import ruby3_4 from "../Swiper/Ruby 3 interior .jpg";
import ruby3_5 from "../Swiper/Ruby 3 interior 1.jpg";
import ruby3_6 from "../Swiper/Ruby 3 interior 2.jpg";
import ruby3_7 from "../Swiper/Ruby 3 .jpg";
import ruby3_8 from "../Swiper/RUBY3 3DG.jpg";
const Rubygallery = ({ name }: { name: string }) => {
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
  ];
  const images2 = [
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
  const data = name == "ruby2" ? images : images2;
  return (
    <div className="gallery">
      <h1>Gallery</h1>
      <Swiper
        className="ruby-comp-container"
        modules={[Navigation, Pagination, Scrollbar, A11y, Zoom]}
        slidesPerView={4}
        spaceBetween={10}
        navigation
        zoom={true}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
      >
        {data.map((data) => (
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

export default Rubygallery;
