import "./feature.scss";
import {
  Img88,
  Img89,
  Img90,
  Img91,
  Img92,
  Img93,
  Img94,
  Img95,
} from "../../assets/images";
const brand = [Img88, Img89, Img90, Img91, Img92, Img93, Img94, Img95];
const Feature = () => {
  return (
    <div className="home-featured">
      <div className="home-featured-container">
        Featured On
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-10">
          {brand.map((image) => {
            return (
              <img src={image} alt={image} key={image} className="col-span-1" />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Feature;
