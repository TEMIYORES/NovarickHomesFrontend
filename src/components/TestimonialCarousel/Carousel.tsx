// import  { useEffect, useState } from "react";
import "./carousel.scss";
// import { Img22, Img40, Img23 } from "../../assets/images";
const Testimonials = () => {
  // const [isMobile, setIsMobile] = useState(true);

  // const handleResize = () => {
  //   if (window.innerWidth < 720) {
  //     setIsMobile(true);
  //   } else {
  //     setIsMobile(false);
  //   }
  // };
  // create an event listener
  // useEffect(() => {
  //   window.addEventListener("resize", handleResize);
  // });
  // const breakpoints = [
  //   { width: 1, itemsToShow: 1 },
  //   { width: 550, itemsToShow: 2 },
  //   { width: 768, itemsToShow: 3 },
  //   { width: 1024, itemsToShow: 3 },
  // ];
  // const testimonialData = [
  //   {
  //     name: "Mrs. A. Adeyemi",
  //     image: Img40,
  //     desc: "Big thanks to Novarick homes, I was able to land my dream land 🚀",
  //   },
  //   {
  //     name: "Mrs. O. Ogologo",
  //     image: Img22,
  //     desc: "Big thanks to Novarick homes, I was able to land my dream land 🚀",
  //   },
  //   {
  //     name: "Mrs. B. Boma",
  //     image: Img23,
  //     desc: "Big thanks to Novarick homes, I was able to land my dream land 🚀",
  //   },
  // ];
  return (
    <>
      {/* <Carousel itemPadding={[0, 10]}
        className="testimonials"
        breakPoints={breakpoints}
        pagination={isMobile}
        showArrows={!isMobile}>
        {testimonialData.map((data) => (
          <div className="home-section5-customer-review" key={data.image}>
            <img src={data.image} alt="customer_image" />
            <div className="home-section5-customer-review-ratings">
              <Star style={{ color: "#FEDF01" }} />
              <Star style={{ color: "#FEDF01" }} />
              <Star style={{ color: "#FEDF01" }} />
              <Star style={{ color: "#FEDF01" }} />
              <StarHalfOutlined style={{ color: "#FEDF01" }} />
            </div>
            <div className="home-section5-customer-review-desc">
              {data.desc}
            </div>
            <div className="home-section5-customer-review-name">
              {data.name}
            </div>
          </div>
        ))}
      </Carousel> */}
    </>
  );
};

export default Testimonials;
