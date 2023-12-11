import { Land } from "../../components/Dropdown/DropdownMenuItems";
import Card from "../../components/Card/Card";
import "./lands.scss";
const Lands = () => {
  return (
    <div className="lands-section1">
      <div
        className="lands-section1-top"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <span className="lands-section1-top-title">
          Lands
          <br />
        </span>
      </div>
      <div
        className="lands-section1-center"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        For every project, we ensure standard quality assurance check is
        conducted. We guarantee conservation & recycling of water, electricity
        and waste. Our projects are off-plan to make certain that you are
        involved in every stage, from architectural design, to construction and
        completion.
      </div>
      <div className="lands-section1-bottom">
        <Card projects={Land} />
      </div>
    </div>
  );
};

export default Lands;
