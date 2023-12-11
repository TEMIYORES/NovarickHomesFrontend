import { Projects } from "../../../components/Dropdown/DropdownMenuItems";
import Card from "../../../components/Card/Card";
import "./section2.scss";
const Section2 = () => {
  return (
    <>
      <div className="home-section2">
        <div
          className="home-section2-top"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <span className="home-section2-top-title">
            We Build Greener
            <br />
            <span
              className="home-section2-top-title-curvyline"
              style={{
                color: "#a77d4b",
                textAlign: "center",
              }}
            >
              Communities
            </span>{" "}
          </span>
        </div>
        <div
          className="home-section2-center"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          For every project, we ensure standard quality assurance check is
          conducted. We guarantee conservation & recycling of water, electricity
          and waste. Our projects are off-plan to make certain that you are
          involved in every stage, from architectural design, to construction
          and completion.
        </div>
        <div className="home-section2-bottom">
          <Card projects={Projects} />
        </div>
      </div>
    </>
  );
};

export default Section2;
