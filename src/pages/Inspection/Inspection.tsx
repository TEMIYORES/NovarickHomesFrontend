import "./inspection.scss";
import { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import inspection from "./INSPECTION.png";
import { useForm } from "react-hook-form";
import Container from "../../components/Container";
// import { Resend } from "resend";
// import InspectionForm from "../../emails/InspectionForm";

// const resend = new Resend(process.env.RESEND_API_KEY);

const Inspection = () => {
  const [phoneNumber, setPhoneNumber] = useState();
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      date: "",
    },
  });
  const { register, handleSubmit } = form;

  const handleEmail = (data: any) => {
    console.log(data);
    // resend.emails.send({
    //   from: "you@example.com",
    //   to: "temiyores@gmail.com",
    //   subject: "hello world",
    //   react: InspectionForm({ name: data.name }),
    // });
  };
  return (
    <Container>
      <div className="inspection mt-32">
        <h1 className="inspection-heading text-2xl  md:text-3xl lg:text-4xl font-bold">
          Schedule an Inspection
        </h1>
        <p className="inspection-text">
          Take the first step towards a secure and profitable investment. We
          understand that seeing is believing and our sales team is on hand to
          give you a tour. All you need to do is fill in the form below and
          specify your preferred date and time. Our sales team will be in
          contact with you shortly.
        </p>
        <div className="inspection-center-container max-md:flex-col flex ">
          <div className="inspection-image flex-1">
            <img
              src={inspection}
              alt="inspection"
              className="max-md:max-h-[400px]"
            />
          </div>
          <form
            className="inspection-form flex-1 w-full"
            onSubmit={handleSubmit(handleEmail)}
          >
            <div className="inspection-form-container w-full">
              <div className="inspection-form-input w-full ">
                <label className="input-title">Name *</label>
                <input
                  type="text"
                  placeholder="Enter your Full Name"
                  required
                  {...register("name", { required: "Name is required" })}
                />
              </div>
              <div className="inspection-form-input">
                <label className="input-title">Phone Number *</label>
                <PhoneInput
                  name="phonenumber"
                  placeholder="081***34"
                  value={phoneNumber}
                  required
                  onChange={(value: any) => {
                    setPhoneNumber(value);
                  }}
                  // {...register("email", { required: "Name is required" })}
                />
              </div>
              <div className="inspection-form-input">
                <label className="input-title">Email Address *</label>
                <input
                  type="email"
                  placeholder="example123@gmail.com"
                  required
                  {...register("email", { required: "Name is required" })}
                />
              </div>
              <div className="inspection-form-input">
                <label className="input-title">Date *</label>
                <input
                  type="date"
                  required
                  {...register("date", { required: "Date is required" })}
                />
              </div>

              <div className="inspection-form-input time">
                <label className="input-title">TIME</label>
                <p>9 : 00AM</p>
              </div>
            </div>
            <button className="form-button max-sm:w-full w-[40%]" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Inspection;
