import "./button.scss";
import { Link } from "react-router-dom";

const Button = ({ text, style, onClick, isDownload, url, type }:any) => {
  if (isDownload) {
    <button style={style} className="button" onClick={() => onClick()}>
      {text}
    </button>;
  } else {
    return (
      <Link to={url}>
        <button style={style} className="button" type={type}>
          {text}
        </button>
      </Link>
    );
  }
};

export default Button;
