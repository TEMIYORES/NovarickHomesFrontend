
const Section1 = () => {
  return (
    <>
      <div className="contact-section1">
        <div className="contact-section1-container">
          <div className="contact-section1-container-title text-xl  md:text-3xl lg:text-4xl">
            Got A Question?🤔
            <br /> Contact Novarick
          </div>
          <div className="contact-section1-container-top flex-col-reverse lg:flex-row">
            <div className="contact-section1-container-top-left bg-[#a77d4b] p-20 max-sm:p-5">
              <div className="contact-section1-container-top-left-top">
                <div className="contact-section1-container-top-left-top-title">
                  WHAT CAN WE HELP YOU WITH?
                </div>
                <select name="project">
                  <option disabled selected>
                    Please Select Project
                  </option>
                  <option value="ruby1">Ruby 2</option>
                  <option value="ruby2">Ruby 3</option>
                  <option value="Ridgewood">Ridgewood Lagos Estate</option>
                  <option value="Caribbean">Caribbean Lake City</option>
                  <option value="buyback">Buy Back</option>
                  <option value="co_ownership">CO-Ownership</option>
                </select>
              </div>
              <div className="contact-section1-container-top-left-center">
                <div className="contact-section1-container-top-left-center-title">
                  CONTACT DETAILS
                </div>
                <input type="text" placeholder="Full Name" name="fullname" />
                <input type="email" placeholder="Email Address" name="email" />
                <input
                  type="tel"
                  placeholder="+(234) 80..23"
                  name="phonenumber"
                />
              </div>
              <div className="contact-section1-container-top-left-bottom">
                <div className="contact-section1-container-top-left-bottom-title">
                  MESSAGE
                </div>
                <textarea rows={5} placeholder="Message..."></textarea>
              </div>
              <button className="w-full bg-white text-[#7f603a] py-3 px-5 mt-3 hover:bg-[#7f603a] hover:text-white">
                submit
              </button>
            </div>

            <div className="contact-section1-container-top-right">
              <div className="contact-section1-container-top-right-title">
                CALL US (24/7) ON +234 81 0514 0514
              </div>
              <div className="contact-section1-container-top-right-items">
                <div className="contact-section1-container-top-right-item max-sm:flex-col">
                  <div className="contact-section1-container-top-right-item-title font-bold uppercase">
                    Novarick CORPORATE HEADQUARTERS
                  </div>
                  <div className="contact-section1-container-top-right-item-address">
                    28, Daniyan Natalia street Lekki Phase 1
                    <div className="flex flex-col mt-1 font-medium">
                      <span>Monday - Friday:</span>
                      <span>09:00AM - 5:00PM</span>
                    </div>
                  </div>

                  <a
                    href="https://goo.gl/maps/Dhe6hzMgPzwvSWuN6"
                    target="_blank"
                  >
                    View location
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section1;
