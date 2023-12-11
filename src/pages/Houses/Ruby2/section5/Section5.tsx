
// import Ruby2Slider from "../../../components/ruby2Slider/ruby2Slider";
import "./section5.scss";
const ruby2brochure = "http://localhost:3000/files/ruby2_brochure.pdf";

const DownloadFileAtUrl = (url: any) => {
  const aTag = document.createElement("a");
  aTag.href = url;
  aTag.setAttribute("download", "Ruby 2 Brochure");
  document.body.appendChild(aTag);
  aTag.click();
  aTag.remove();
};
const Section5 = () => {
  return (
    <>
      <div className="ruby2-section5">
        <div className="ruby2-section5-container-heading">
          04 Bedroom Semi-Detached Duplex +BQ
        </div>
        <div className="ruby2-section5-container-desc">
          This 4 bedroom semi detached duplex is architecturally designed
        </div>
        <div className="ruby2-section5-container">
          <div className="ruby2-section5-container-right">
            <div className="ruby2-section5-container-right-heading">
              Sophisticated and Spacious
            </div>
            <ul>
              <li>
                <span>BEDROOM</span> <span>4</span>
              </li>
              <li>
                <span>PARKING</span> <span>1</span>
              </li>
              <li>
                <span>BATH</span> <span>4</span>
              </li>
              <li>
                <span>BALCONY</span> <span>YES</span>
              </li>
            </ul>
            <button
              className="ruby2-section5-container-right-button"
              onClick={() => DownloadFileAtUrl(ruby2brochure)}
            >
              Download E-Brochure
            </button>
          </div>
          <div className="ruby2-section5-container-left">
            {/* <Ruby2Slider /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Section5;
// {
//   /* <div className="silverspring-section5-container-top">
//             <div className="silverspring-section5-container-top-title">
//               Modern island living
//             </div>
//             <div className="silverspring-section5-container-top-desc">
//               Silver Spring Residence phase II is located adjacent of Ibeju Golf
//               Course. It's amidst the future commercial hub and the serenity of
//               the beaches and resorts.
//             </div>
//           </div>
//           <div className="silverspring-section5-container-bottom">
//             <div className="silverspring-section5-container-bottom-bottom-container">
//               <div className="silverspring-section5-container-bottom-bottom-container-item">
//                 <img src={Img44} alt="icon" />
//                 <div className="silverspring-section5-container-bottom-bottom-container-item-item-desc">
//                   Golf course
//                 </div>
//               </div>
//               <div className="silverspring-section5-container-bottom-bottom-container-item">
//                 <img src={Img45} alt="icon" />
//                 <div className="silverspring-section5-container-bottom-bottom-container-item-item-desc">
//                   Beach resorts
//                 </div>
//               </div>
//               <div className="silverspring-section5-container-bottom-bottom-container-item">
//                 <img src={Img46} alt="icon" />
//                 <div className="silverspring-section5-container-bottom-bottom-container-item-item-desc">
//                   3 & 4 star hotels
//                 </div>
//               </div>
//               <div className="silverspring-section5-container-bottom-bottom-container-item">
//                 <img src={Img47} alt="icon" />
//                 <div className="silverspring-section5-container-bottom-bottom-container-item-item-desc">
//                   Shopping malls
//                 </div>
//               </div>
//               <div className="silverspring-section5-container-bottom-bottom-container-item">
//                 <img src={Img48} alt="icon" />
//                 <div className="silverspring-section5-container-bottom-bottom-container-item-item-desc">
//                   Duty free outlets
//                 </div>
//               </div>
//               <div className="silverspring-section5-container-bottom-bottom-container-item">
//                 <img src={Img49} alt="icon" />
//                 <div className="silverspring-section5-container-bottom-bottom-container-item-item-desc">
//                   International airport
//                 </div>
//               </div>
//             </div>
//           </div> */
// }
