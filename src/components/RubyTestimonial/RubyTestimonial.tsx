import "./rubytestimonial.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./rubytestimonial.scss";
import { Img22, Img40, Img23 } from "../../assets/images";
import { StarHalfOutlined, Star } from "@mui/icons-material";

const RubyTestimonial = () => {
  const testimonialData = [
    {
      name: "Mrs. A. Adeyemi",
      image: Img40,
      desc: "Big thanks to Novarick homes, I was able to land my dream land 🚀",
    },
    {
      name: "Mrs. O. Ogologo",
      image: Img22,
      desc: "Big thanks to Novarick homes, I was able to land my dream land 🚀",
    },
    {
      name: "Mrs. B. Boma",
      image: Img23,
      desc: "Big thanks to Novarick homes, I was able to land my dream land 🚀",
    },
  ];
  return (
    <div className="testimonial-review">
      <h1>Testimonials</h1>
      <Swiper
        className="ruby-comp-container"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          // when window width is >= 640px
          425: {
            width: 425,
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 2,
          },
        }}
      >
        {testimonialData.map((data) => (
          <SwiperSlide className="ruby-comp-customer-review" key={data.image}>
            <img src={data.image} alt="customer_image" />
            <div className="ruby-comp-customer-review-ratings">
              <Star style={{ color: "#FEDF01" }} />
              <Star style={{ color: "#FEDF01" }} />
              <Star style={{ color: "#FEDF01" }} />
              <Star style={{ color: "#FEDF01" }} />
              <StarHalfOutlined style={{ color: "#FEDF01" }} />
            </div>
            <div className="ruby-comp-customer-review-desc">{data.desc}</div>
            <div className="ruby-comp-customer-review-name">{data.name}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RubyTestimonial;
