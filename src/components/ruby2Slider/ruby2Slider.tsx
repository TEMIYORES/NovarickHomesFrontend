import Carousel from "react-elastic-carousel";
import { Img44, Img45, Img46, Img47, Img48, Img49 } from "../../assets/images";

const Ruby2Slider = () => {
  const images = [
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
  const breakpoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1 },
    { width: 768, itemsToShow: 1 },
    { width: 1024, itemsToShow: 1 },
  ];

  return (
    <>
      {/* <Carousel
        className="Ruby2Slider"
        breakPoints={breakpoints}
        pagination={false}
      >
        {images.map((data) => {
          return (
            <div className="Ruby2Slider-slide" key={data.img}>
              <img src={data.image} alt={data.image} />
              <div className="Ruby2Slider-title">{data.title}</div>
            </div>
          );
        })}
      </Carousel> */}
    </>
  );
};

export default Ruby2Slider;
