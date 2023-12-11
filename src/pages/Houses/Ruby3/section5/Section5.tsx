import Ruby3Slider from "../../../../components/ruby3Slider/ruby3Slider";
import "./section5.scss";
const ruby3brochure = "http://localhost:3000/files/ruby3_brochure.pdf";

const DownloadFileAtUrl = (url: any) => {
  const aTag = document.createElement("a");
  aTag.href = url;
  aTag.setAttribute("download", "RUBY 3 BROCHURE");
  document.body.appendChild(aTag);
  aTag.click();
  aTag.remove();
};
const Section5 = () => {
  return (
    <>
      <div className="ruby3-section5">
        <div className="ruby3-section5-container-heading">
          02 Bedroom Semi-Detached Duplex +BQ
        </div>
        <div className="ruby3-section5-container-desc">
          This 2 bedroom apartment is architecturally designed to contain the
          following
        </div>
        <div className="ruby3-section5-container">
          <div className="ruby3-section5-container-right">
            <div className="ruby3-section5-container-right-heading">
              Sophisticated and Spacious
            </div>
            <ul>
              <li>
                <span>BEDROOM</span> <span>2</span>
              </li>
              <li>
                <span>PARKING</span> <span>1</span>
              </li>
              <li>
                <span>BATH</span> <span>2</span>
              </li>
              <li>
                <span>BALCONY</span> <span>YES</span>
              </li>
            </ul>
            <button
              className="ruby3-section5-container-right-button"
              onClick={() => DownloadFileAtUrl(ruby3brochure)}
            >
              Download E-Brochure
            </button>
          </div>
          <div className="ruby3-section5-container-left">
            <Ruby3Slider />
          </div>
        </div>
      </div>
    </>
  );
};

export default Section5;
