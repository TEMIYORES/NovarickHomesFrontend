import { useState } from "react";
import "./rubyform.scss";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import Countries from "../../assets/data/country.json";
const Rubyform = () => {
  const [phoneNumber, setPhoneNumber] = useState<any>();
  return (
    <>
      <form className="rubyform">
        <div className="rubyform-container">
          <div className="rubyform-container-title">Reserve Your Spot</div>
          <div className="rubyform-container-top">
            <div className="rubyform-container-top-input">
              <div className="input-title">First name</div>
              <input
                type="text"
                placeholder="Enter your first name"
                name="firstname"
                required
              />
            </div>
            <div className="rubyform-container-top-input">
              <div className="input-title">Last name</div>
              <input
                type="text"
                placeholder="Enter your last name"
                name="lastname"
                required
              />
            </div>
            <div className="rubyform-container-top-input">
              <div className="input-title">Email address</div>
              <input
                type="email"
                placeholder="Enter your email address"
                name="email"
                required
              />
            </div>
            <div className="rubyform-container-top-input">
              <div className="input-title">Phone number</div>
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
          </div>
          <div className="rubyform-container-center">
            <div className="rubyform-container-center-input">
              <div className="input-title">Country</div>
              <select name="country" required>
                <option>--Select an Option--</option>
                {Countries.map((country) => (
                  <option key={country.country_id} value={country.country_name}>
                    {country.country_name}
                  </option>
                ))}
              </select>
            </div>
            <div className="rubyform-container-center-input">
              <div className="input-title">
                How soon would you like to get this Property?
              </div>
              <select name="timeframe" required>
                <option>--Select an Option--</option>
                <option value="Immediately">Immediately</option>
                <option value="Within a Month">Within a week</option>
                <option value="Just making Enquiry">Just making Enquiry</option>
              </select>
            </div>
          </div>
          <div className="rubyform-container-bottom">
            <div className="rubyform-container-bottom-input">
              <div className="input-title">How did you hear about us?</div>
              <select name="media" required>
                <option>--Select an Option--</option>
                <option value="social media">Social Media</option>
                <option value="flyers">Novarick Events</option>
                <option value="flyers">Novarick Agent</option>
                <option value="website">Website</option>
                <option value="friends & families">Friends & Families</option>
                <option value="flyers">Flyers</option>
              </select>
            </div>
            <div className="rubyform-container-bottom-input">
              <div className="input-title">Comments*</div>
              <textarea
                name="comment"
                cols={30}
                rows={5}
                placeholder="Enter comments* (Optional)"
              ></textarea>
            </div>
          </div>
          <div className="rubyform-container-media">
            <div className="rubyform-container-media-title">
              If you would like to receive exclusive news and offers from
              Novarick Dev. Co, please select your preferred method of
              communication below:
            </div>
            <div className="rubyform-container-media-checkbox">
              <div className="rubyform-container-media-checkbox-container">
                <input
                  type="checkbox"
                  id="email"
                  name="newsletter"
                  value="email"
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="rubyform-container-media-checkbox-container">
                <input
                  type="checkbox"
                  id="whatsapp"
                  name="newsletter"
                  value="whatsapp"
                />
                <label htmlFor="whatsapp">WhatsApp</label>
              </div>
              <div className="rubyform-container-media-checkbox-container">
                <input
                  type="checkbox"
                  id="phoneCall"
                  name="newsletter"
                  value="phone call"
                />
                <label htmlFor="phoneCall">Phone Call</label>
              </div>
            </div>
            <button className="rubyform-button" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Rubyform;
