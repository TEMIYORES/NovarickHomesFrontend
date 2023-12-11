import { useEffect } from "react";
import Testimonials from "../../../components/TestimonialCarousel/Carousel";
import "./section5.scss";
import { Img96 } from "../../../assets/images";
const Section5 = () => {
  useEffect(() => {
    let line1 = document.getElementById("trend1");
    let line2 = document.getElementById("trend2");
    let line3 = document.getElementById("trend3");

    window.onscroll = () => {
      let div1 =
        window.innerWidth <= 720
          ? 5000
          : window.innerWidth < 1080
          ? 4500
          : 3000;

      let pos3 = window.scrollY - div1;

      // console.log(window.scrollY);
      line1!.style.marginLeft = `${-pos3}px`;
      line2!.style.marginLeft = `${-pos3}px`;
      line3!!.style.marginLeft = `${-pos3}px`;
    };
  });
  return (
    <>
      <div className="home-section5">
        <div className="home-section5-container">
          <div className="home-section5-container-left">
            <div
              className="home-section5-container-left-img-container"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <img src={Img96} alt="happy_customer" />
            </div>
          </div>
          <div
            className="home-section5-container-right"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="500"
          >
            <div className="home-section5-container-right-top">
              It was so easy to purchase my first land with Novarick homes.
              Their customer service team is top tier and ready to help get my
              dream land😃.
            </div>
            <div className="home-section5-container-right-bottom">
              Victoria Olanipekun
              <br /> Lagos, Nigeria.
            </div>
          </div>
        </div>
        <div
          className="home-section5-desc font-poppins"
          data-aos="zoom-in-down"
          data-aos-duration="500"
          data-aos-delay="500"
        >
          200+ Satisfied Customers
        </div>
        <span className="home-section5-customer-testimonials">
          <hr className="line" />
          Testimonials
          <hr className="line" />
        </span>
        <div className="home-section5-customer-reviews">
          <Testimonials />

          <ul className="home-section5-customer-reviews-trend">
            <span className="customer-reviews-trend" id="trend1">
              <li>
                <a href="/">You guys rock</a>
              </li>

              <li>
                <a href="/">Novarick is so easy to work with</a>
              </li>
              <li>
                <a href="/">Fantastic Team</a>
              </li>

              <li>
                <a href="/">easiest real estate purchase</a>
              </li>

              <li>
                <a href="/">Best real estate purchase I ever made</a>
              </li>

              <li>
                <a href="/">Thank you so much for all of your help!</a>
              </li>

              <li>
                <a href="/">Novarick is amazing</a>
              </li>

              <li>
                <a href="/">extremely helpful, knowledgeable and responsive</a>
              </li>

              <li>
                <a href="/">so professional, organized</a>
              </li>

              <li>
                <a href="/">
                  answered all of our questions, I would highly recommend them
                </a>
              </li>

              <li>
                <a href="/">You guys rock</a>
              </li>
            </span>
            <span className="customer-reviews-trend" id="trend2">
              <li>
                <a href="/">Novarick is so easy to work with</a>
              </li>

              <li>
                <a href="/">Fantastic Team</a>
              </li>

              <li>
                <a href="/">easiest real estate purchase</a>
              </li>

              <li>
                <a href="/">Best real estate purchase I ever made</a>
              </li>
              <li>
                <a href="/">Thank you so much for all of your help!</a>
              </li>
              <li>
                <a href="/">Novarick is amazing</a>
              </li>

              <li>
                <a href="/">extremely helpful, knowledgeable and responsive</a>
              </li>
              <li>
                <a href="/">so professional, organized</a>
              </li>
              <li>
                <a href="/">
                  answered all of our questions, I would highly recommend them
                </a>
              </li>
              <li>
                <a href="/">You guys rock</a>
              </li>

              <li>
                <a href="/">Novarick is so easy to work with</a>
              </li>

              <li>
                <a href="/">Fantastic Team</a>
              </li>

              <li>
                <a href="/">easiest real estate purchase</a>
              </li>

              <li>
                <a href="/">Best real estate purchase I ever made</a>
              </li>

              <li>
                <a href="/">Thank you so much for all of your help!</a>
              </li>
              <li>
                <a href="/">Novarick is amazing</a>
              </li>
              <li>
                <a href="/">extremely helpful, knowledgeable and responsive</a>
              </li>
              <li>
                <a href="/">so professional, organized</a>
              </li>

              <li>
                <a href="/">
                  answered all of our questions, I would highly recommend them
                </a>
              </li>

              <li>
                <a href="/">You guys rock</a>
              </li>

              <li>
                <a href="/">Novarick is so easy to work wit</a>
              </li>
            </span>

            <span className="customer-reviews-trend" id="trend3">
              <li>
                <a href="/">Novarick is so easy to work with</a>
              </li>

              <li>
                <a href="/">Fantastic Team</a>
              </li>

              <li>
                <a href="/">easiest real estate purchase</a>
              </li>

              <li>
                <a href="/">Best real estate purchase I ever made</a>
              </li>

              <li>
                <a href="/">Thank you so much for all of your help!</a>
              </li>
              <li>
                <a href="/">Novarick is amazing</a>
              </li>
              <li>
                <a href="/">extremely helpful, knowledgeable and responsive</a>
              </li>
              <li>
                <a href="/">so professional, organized</a>
              </li>

              <li>
                <a href="/">
                  answered all of our questions, I would highly recommend them
                </a>
              </li>

              <li>
                <a href="/">You guys rock</a>
              </li>

              <li>
                <a href="/">Novarick is so easy to work wit</a>
              </li>

              <li>
                <a href="/">You guys rock</a>
              </li>

              <li>
                <a href="/">Novarick is so easy to work with</a>
              </li>

              <li>
                <a href="/">Fantastic Team</a>
              </li>

              <li>
                <a href="/">easiest real estate purchase</a>
              </li>

              <li>
                <a href="/">Best real estate purchase I ever made</a>
              </li>

              <li>
                <a href="/">Thank you so much for all of your help!</a>
              </li>
              <li>
                <a href="/">Novarick is amazing</a>
              </li>
              <li>
                <a href="/">extremely helpful, knowledgeable and responsive</a>
              </li>
              <li>
                <a href="/">so professional, organized</a>
              </li>

              <li>
                <a href="/">
                  answered all of our questions, I would highly recommend them
                </a>
              </li>

              <li>
                <a href="/">You guys rock</a>
              </li>

              <li>
                <a href="/">Novarick is so easy to work wit</a>
              </li>
            </span>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Section5;
