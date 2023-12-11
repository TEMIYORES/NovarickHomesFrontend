import "./alafia.scss";
import AlafiaSlider from "../../../../components/alafiaSlide/alafiaSlider";
const Alafia = () => {
  return (
    <div className="alafia flex flex-col lg:flex-row gap-5">
      <div className="alafia-container flex-1">
        <h1 className="alafia-header">Alafia</h1>
        <h1 className="alafia-sub-header">Resort & Spa</h1>
        <h2 className="alafia-sub-heading">
          Home of Nigeria’s First Wellness Resort
        </h2>
        <h2 className="alafia-sub-heading2">
          Alafia means Good health, wellness
        </h2>
        <div className="alafia-text-container">
          <div className="alafia-text">
            The Alafia Resort and Spa is a 30 rooms short resort accommodation
            at the heart ofthe Ridgewood Lagos, Epe.
          </div>
          <div className="alafia-text">
            It boasts of lavishly appointed 5 rooms massage parlors,
            accommodations that are meticulously crafted to provide a seamless
            blend of sophistication and comfort. Each room and suite is a
            tranquil oasis, offering panoramic views oflush gardens and
            infinitypools accessible from yourbedroom. Sink into plush bedding,
            and let the gentle sound of nature lull you into a restful sleep.
            Wake up refreshed and readyto embrace the day.
          </div>
        </div>
      </div>
      <AlafiaSlider />
    </div>
  );
};

export default Alafia;
