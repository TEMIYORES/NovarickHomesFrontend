import "./card.scss";
import Learnmore from "../Learnmore/Learnmore";
import { useNavigate } from "react-router-dom";

import soldOut from "./sold_out.png";
const Card = ({ projects }: any) => {
  const navigate = useNavigate();
  const project = [...projects];
  return (
    <>
      <div className="card">
        {project.map((data, index) => (
          <div
            className="card-container"
            // data-aos="fade-up"
            // data-aos-duration="1000"
            // data-aos-delay="500"
            key={index}
            onClick={() => navigate(`${data.path}`)}
          >
            <div className="top">
              <img src={data.image} alt="house" />
              <span className="card-tag">{data.tag}</span>
              {data.path == "ruby1" || data.path == "houses/ruby1" ? (
                <div className="soldOut">
                  <img src={soldOut} />
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="middle">
              <span className="title">{data.title}</span>
              <span className="desc">{data.desc}</span>
              {data.isLearnmore && (
                <Learnmore
                  style={{ width: "max-content" }}
                  path={data.path}
                  text="Learn more"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
