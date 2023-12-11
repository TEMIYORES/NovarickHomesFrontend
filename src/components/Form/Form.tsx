import { useRef, useState } from "react";
import "./form.scss";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import Countries from "../../assets/data/country.json";
// import emailjs from "@emailjs/browser";
const Form = () => {
  const form = useRef();
  const [phoneNumber, setPhoneNumber] = useState<string>();
  console.log(form.current);

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_sn3p1mt",
  //       "template_whdw3vg",
  //       form.current,
  //       "ObFSpjExzwsLupdAX"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };
  return (
    // ref={form} onSubmit={sendEmail}
    <>
      <form className="form">
        <div className="form-container">
          <div className="form-container-title">Reserve Your Spot</div>
          <div className="form-container-top">
            <div className="form-container-top-input">
              <label className="input-title">First name</label>
              <input
                type="text"
                placeholder="Enter your first name"
                name="firstname"
                required
              />
            </div>
            <div className="form-container-top-input">
              <label className="input-title">Last name</label>
              <input
                type="text"
                placeholder="Enter your last name"
                name="lastname"
                required
              />
            </div>
            <div className="form-container-top-input">
              <label className="input-title">Email address</label>
              <input
                type="email"
                placeholder="Enter your email address"
                name="email"
                required
              />
            </div>
            <div className="form-container-top-input">
              <label className="input-title">Phone number</label>
              <PhoneInput
                name="phonenumber"
                placeholder="Enter phone number"
                value={phoneNumber}
                required
                onChange={(value) => {
                  setPhoneNumber(value);
                }}
              />
            </div>
            <div className="form-container-top-input">
              <label className="input-title">Address</label>
              <input
                type="text"
                placeholder="Enter your address"
                name="address"
                required
              />
            </div>
            <div className="form-container-top-input">
              <label className="input-title">Country</label>
              <select name="country" required>
                <option>--Select an Option--</option>
                {Countries.map((country) => (
                  <option key={country.country_id} value={country.country_name}>
                    {country.country_name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="form-container-center">
            <div className="form-container-center-input">
              <label className="input-title">
                The Project you are interested in*
              </label>
              <select name="project" required>
                <option>--Select an Option--</option>
                <option value="silverspring">Ruby 2</option>
                <option value="venice">Ruby 3</option>
                <option value="venice">The Ridgewood</option>
              </select>
            </div>
            <div className="form-container-center-input">
              <label className="input-title">
                How soon would you like to get this Property?
              </label>
              <select name="timeframe" required>
                <option>--Select an Option--</option>
                <option value="Immediately">Immediately</option>
                <option value="Within a Month">Within a week</option>
                <option value="Just making Enquiry">Just making Enquiry</option>
              </select>
            </div>
          </div>
          <div className="form-container-bottom">
            <div className="form-container-bottom-input">
              <label className="input-title">How did you hear about us?</label>
              <select name="media" required>
                <option>--Select an Option--</option>
                <option value="social media">Social Media</option>
                <option value="flyers">Novarick Events</option>
                <option value="agent">Novarick Agent</option>
                <option value="website">Website</option>
                <option value="friends & families">Friends & Families</option>
                <option value="flyers">Flyers</option>
              </select>
            </div>
            <div className="form-container-bottom-input">
              <label className="input-title">Comments*</label>
              <textarea
                name="comment"
                cols={30}
                rows={5}
                placeholder="Enter comments* (Optional)"
              ></textarea>
            </div>
          </div>
          <div className="form-container-media">
            <div className="form-container-media-title">
              If you would like to receive exclusive news and offers from
              Novarick Dev. Co, please select your preferred method of
              communication below:
            </div>
            <div className="form-container-media-checkbox">
              <div className="form-container-media-checkbox-container">
                <input
                  type="checkbox"
                  id="email"
                  name="newsletter"
                  value="email"
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="form-container-media-checkbox-container">
                <input
                  type="checkbox"
                  id="whatsapp"
                  name="newsletter"
                  value="whatsapp"
                />
                <label htmlFor="whatsapp">WhatsApp</label>
              </div>
              <div className="form-container-media-checkbox-container">
                <input
                  type="checkbox"
                  id="phoneCall"
                  name="newsletter"
                  value="phone call"
                />
                <label htmlFor="phoneCall">Phone Call</label>
              </div>
            </div>
            <button className="form-button" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;
