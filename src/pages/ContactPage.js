/* eslint-disable @next/next/no-img-element */

import { Fragment, useState } from "react";
import NiceSelect from "../components/NiceSelect";

import axios from "axios";
import BaseUrl from "../components/Baseurl";

const ContactPage = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setphoneNumber] = useState("")
  const [message, setMessage] = useState("")
  const [subject, setSubject] = useState("Subject")
  console.log(subject,"subjecttttttttttt");
  
  const [nameError, setNameError] = useState();
  const [emailError, setEmailError] = useState();
  const [phoneNumberError, setPhoneNumberError] = useState();
  const [messageError, setMessageError] = useState();
  const [subjectError, setSubjectError] = useState();


  const onSubmit = async (e) => {
    e.preventDefault();
    const payload = { 
      name,
      email,
      phoneNumber,
      subject,
      message
       
     };
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      let insertContact = await axios.post(
        `${BaseUrl}/contact/create`,
        payload
      );
      setName("")
      setEmail("")
      setphoneNumber("")
      setMessage("")
      
    } catch (error) {
      error.response.data.errors.map((e) => {
        console.log(e,"|||||||||");
        return (
          
          e.name ? setNameError(e.name) : e.email ? setEmailError(e.email) : e.phoneNumber ?
          setPhoneNumberError(e.phoneNumber) : e.message ?
          setMessageError(e.message): 
          setSubjectError(e.subject)
        );  
      })
      console.log(error.response.data.errors,"??????????????")
      //error
    }
  };
  console.log(nameError,emailError,phoneNumberError,subjectError,messageError,"errorsssssssssssss");

  
  return (
    <Fragment>
      <section className="contact-info-section section-gap page_top">
        <div className="container">
          <div className="row justify-content-lg-between justify-content-center">
            <div className="col-xl-5 col-lg-6 col-md-10">
              <div className="section-heading mb-30">
                <h2 className="title">
                  Ready To Get Popular Marketing Service
                </h2>
                <span className="tagline">
                  Contact us with details of your requirement. We will get back
                  to you within 24 hours.
                </span>
              </div>
              <div className="contact-info-box wow fadeInUp">
                <div className="single-contact-info">
                  <div className="icon">
                    <i className="fal fa-map-marker-alt" />
                  </div>
                  <div className="content">
                    <h4 className="info-title">Address</h4>
                    <p>
                      639-640, 6th Floor,Laxmi Enclave 2,
                      <br /> Near Gajera School, Katargam,
                      <br /> Surat, Gujarat, 395004 <br />
                    </p>
                  </div>
                </div>
                <div className="single-contact-info">
                  <div className="icon">
                    <i className="fal fa-envelope-open" />
                  </div>
                  <div className="content">
                    <h4 className="info-title">Email Us</h4>
                    <a href="mailto:support@Tilkeinfo.com" className="phone_no">
                      hr@samptechnologies.com
                    </a>
                    <a href="mailto:support@Tilkeinfo.com" className="phone_no">
                      support@samptechnologies.com
                    </a>
                  </div>
                </div>
                <div className="single-contact-info">
                  <div className="icon">
                    <i className="fal fa-phone" />
                  </div>
                  <div>
                    <a href="tel:+01234567899" className="phone_no">
                      
                      +91 9033906480
                    </a>
                  </div>
                 
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-9">
              <div className="contact-img text-lg-right text-center content-mt-md-50">
                
                <img
                  src="../assets/img/illustrations/about-illustration.png"
                  alt="Image"
                  className="animate-float-bob-y"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== Contact Info End ======*/}
      {/*====== Contact Maps Start ======*/}
      <section className="contact-map-area overflow-hidden">
        <h2 className="d-none">title</h2>
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.996739479657!2d72.83456951538724!3d21.231977886184527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fc3e1cbab5b%3A0xad4f451dcb422be!2sSamp%20Technologies%20LLP!5e0!3m2!1sen!2sin!4v1669799067405!5m2!1sen!2sin"
            width="600"
            height="450"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      {/*====== Contact Maps End ======*/}
      {/*====== Contact Form Start ======*/}
      <section className="contact-from-area section-gap">
        <div className="container">
          <div className="section-heading text-center mb-60">
            <h2 className="title">The support team is here to help you</h2>
            <span className="tagline">
              Get in touch and let us know how we can help...!
            </span>
          </div>
          <div className="contact_form">
            <div className=" input_part" style={{marginBottom: "25px"}}>
              <input
                name="name"
                className="free_input"
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={e => setName(e.target.value)}
              />
              <span>{nameError}</span>
            </div>
            <div className=" input_part">
              <input
                name="email"
                className="free_input"
                type="text"
                placeholder="Email Address"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <div>{ emailError}</div>

            </div>
          </div>
          <div className="contact_form" style={{ marginBottom: "20px" }}>
            <div className=" input_part">
              <input
                name="phoneNumber"
                className="free_input"
                type="text"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={e => setphoneNumber(e.target.value)}
              />
              <div>{phoneNumberError}</div>

            </div>
            <div className="input_part">
              <NiceSelect
                name="subject"
                datalist={[
                  "Web Development",
                  "Mobile App Development",
                  "Blockchain/NFT Development",
                  "Game Development",
                  "Hire Dedicated Developers",
                ]}
                setActiveValue={setSubject}
                activeValue={subject}
                value={subject}
                // disable="Subject"
                onChange={e => setSubject(e.target.value)}
              />
              <div>{subjectError}</div>

            </div>
          </div>

          <div className="" style={{ marginBottom: "25px",width: "100%" }}>
            <textarea
              name="message"
              style={{  height: "80px" }}
              className="free_input"
              placeholder="Message"
              value={message}
              onChange={e => setMessage(e.target.value)}
            ></textarea>
              <div>{messageError}</div>

          </div>
          <div className="" style={{ width: "100%" }}>
            <button className="template-btn w-100" onClick={onSubmit}>
              Send Message
            </button>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default ContactPage;
