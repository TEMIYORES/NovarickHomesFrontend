import  { useRef, useState } from "react";
import "./co_ownershipform.scss";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import Countries from "../../assets/data/country.json";
// import emailjs from "@emailjs/browser";
const Co_ownershipform = () => {
  const form = useRef();
  const [phoneNumber, setPhoneNumber] = useState<string>();
  console.log(form.current);

  const sendEmail = (e:any) => {
    e.preventDefault();

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
  };
  return (
    <>
      <form
        className="co_ownershipform"
        // ref={form}
        onSubmit={sendEmail}
        id="co_ownership_form"
      >
        <div className="co_ownershipform-container">
          <div className="co_ownershipform-container-title">
            Reserve Your Spot
          </div>
          <div className="co_ownershipform-container-top">
            <div className="co_ownershipform-container-top-input">
              <div className="input-title">First name</div>
              <input
                type="text"
                placeholder="Enter your first name"
                name="firstname"
                required
              />
            </div>
            <div className="co_ownershipform-container-top-input">
              <div className="input-title">Last name</div>
              <input
                type="text"
                placeholder="Enter your last name"
                name="lastname"
                required
              />
            </div>
            <div className="co_ownershipform-container-top-input">
              <div className="input-title">Email address</div>
              <input
                type="email"
                placeholder="Enter your email address"
                name="email"
                required
              />
            </div>
            <div className="co_ownershipform-container-top-input">
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
          <div className="co_ownershipform-container-center">
            <div className="co_ownershipform-container-center-input">
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

            <div className="co_ownershipform-container-center-input">
              <div className="input-title">
                How many slots would you like to purchase?
              </div>
              <select name="timeframe" required>
                <option>--Select an Option--</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>
            <div className="co_ownershipform-container-center-input">
              <div className="input-title">
                How soon would you like to invest?
              </div>
              <select name="timeframe" required>
                <option>--Select an Option--</option>
                <option value="Immediately">Immediately</option>
                <option value="Within a Month">Within a week</option>
                <option value="Just making Enquiry">Just making Enquiry</option>
              </select>
            </div>
          </div>
          <div className="co_ownershipform-container-bottom">
            <div className="co_ownershipform-container-bottom-input">
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
            <div className="co_ownershipform-container-bottom-input">
              <div className="input-title">Comments*</div>
              <textarea
                name="comment"
                cols={30}
                rows={5}
                placeholder="Enter comments* (Optional)"
              ></textarea>
            </div>
          </div>
          <div className="co_ownershipform-container-media">
            <div className="co_ownershipform-container-media-title">
              If you would like to receive exclusive news and offers from
              Novarick Dev. Co, please select your preferred method of
              communication below:
            </div>
            <div className="co_ownershipform-container-media-checkbox">
              <div className="co_ownershipform-container-media-checkbox-container">
                <input
                  type="checkbox"
                  id="email"
                  name="newsletter"
                  value="email"
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="co_ownershipform-container-media-checkbox-container">
                <input
                  type="checkbox"
                  id="whatsapp"
                  name="newsletter"
                  value="whatsapp"
                />
                <label htmlFor="whatsapp">WhatsApp</label>
              </div>
              <div className="co_ownershipform-container-media-checkbox-container">
                <input
                  type="checkbox"
                  id="phoneCall"
                  name="newsletter"
                  value="phone call"
                />
                <label htmlFor="phoneCall">Phone Call</label>
              </div>
            </div>
            <button className="co_ownershipform-button" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Co_ownershipform;
