import React, { useEffect } from "react";
import { Form, Formik } from "formik";
import { BsEnvelopeAtFill } from "react-icons/bs";
import { contactSchema } from "../../schemas";
import CustomInput from "../../components/contact/CustomInput";
import Aos from "aos";
import "aos/dist/aos.css";
import emailjs from "emailjs-com";
import env from "react-dotenv";

const Contact = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const handleSubmit = (values, actions) => {
    const emailJsUserId = env.REACT_APP_EMAILJS_USER_ID;
    const emailJsServiceId = env.REACT_APP_EMAILJS_SERVICE_ID;
    const emailJsTemplateId = env.REACT_APP_EMAILJS_TEMPLATE_ID;

    emailjs
      .send(emailJsServiceId, emailJsTemplateId, values, emailJsUserId)
      .then((response) => {
        console.log("Email sent successfully", response);
        actions.resetForm();
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <div id="contact">
      <div className="bg-gradient-to-br from-60% from-stone-950 to-orange-900">
        <div className=" max-w-xl lg:max-w-6xl flex flex-col lg:flex-row mx-auto lg:mx-auto items-center py-48 gap-10 justify-around px-5">
          <div className="flex flex-col gap-5 basis-1/2 px-10">
            <h2
              className="text-orange-400 text-3xl lg:text-7xl font-bold italic"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              Contact us
            </h2>
            <p
              className="text-white text-xl lg:text-3xl"
              data-aos="fade-right"
              data-aos-delay="250"
            >
              Have something specific in mind or want to discuss a tailored
              solution? Drop us a message using the form, and our team at
              Carthage Media will be delighted to hear from you.
            </p>
            <span
              className="text-white flex gap-3 underline items-center text-lg"
              data-aos="fade-right"
              data-aos-delay="300"
              data-aos-offset="-300"
            >
              <BsEnvelopeAtFill className="inline" />
              <a href="mailto:mouna@carthagemedia.com?subject=Hello%20Subject&body=Hello%20Body">
                hello@carthagemedia.com
              </a>
            </span>
          </div>
          <div>
            <h3 className="text-white text-xl mb-5">
              Send us a message and we’ll get back to you shortly.
            </h3>

            {/* form */}

            <Formik
              initialValues={{
                fullName: "",
                campanyName: "",
                email: "",
                phoneNumber: "",
                message: "",
                isExcavting: false,
              }}
              validationSchema={contactSchema}
              onSubmit={handleSubmit}
            >
              <Form
                className="flex flex-col gap-2 text-sm lg:text-base"
                data-aos="fade-left"
              >
                <div className="flex flex-col lg:flex-row justify-between">
                  <CustomInput
                    label="Full Name*"
                    name="fullName"
                    as="input"
                    type="text"
                    placeholder="Enter your full name"
                  />

                  <CustomInput
                    label="Company Name"
                    name="companyName"
                    as="input"
                    type="text"
                    placeholder="Enter your company name"
                  />
                </div>

                <div className="flex flex-col lg:flex-row justify-between">
                  <CustomInput
                    label="Email*"
                    name="email"
                    as="input"
                    type="text"
                    placeholder="Enter your email name"
                  />

                  <CustomInput
                    label="Phone Number*"
                    name="phoneNumber"
                    as="input"
                    type="text"
                    placeholder="Enter your phone number name"
                  />
                </div>

                <CustomInput
                  label="Message*"
                  name="message"
                  as="textarea"
                  placeholder="Enter your message name"
                  style={{ height: 150, resize: "none" }}
                />

                <label
                  className="flex "
                  data-aos="fade-left"
                  data-aos-delay="450"
                  data-aos-offset="-300"
                >
                  <CustomInput
                    label=""
                    name="isExcavting"
                    type="checkbox"
                    placeholder=""
                  />
                  <span className="text-white pl-3">
                    Are you an excavting constractor?
                  </span>
                </label>

                <input
                  type="submit"
                  value="send"
                  className="text-white text-lg py-1 w-full px-10 font-semibold bg-orange-400 hover:bg-blue-950 transition-colors rounded-xl block m-auto mt-5 cursor-pointer disabled:bg-opacity-50 disabled:text-opacity-50"
                />
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
