import "./learnmore.scss";
import { Link } from "react-router-dom";

const Learnmore = ({ path, text, style }: any) => {
  return (
    <>
      <Link className="learnMore" to={path} style={style}>
        {text}
      </Link>
    </>
  );
};

export default Learnmore;
