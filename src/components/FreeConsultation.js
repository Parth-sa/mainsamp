import { Fragment, useState } from "react";
import NiceSelect from "../components/NiceSelect";
import axios from "axios";
import BaseUrl from "./Baseurl";
const FreeConsultation = ({ extraClass }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [subject, setSubject] = useState("subject");

  const [nameError, setNameError] = useState();
  const [emailError, setEmailError] = useState();
  const [phoneNumberError, setPhoneNumberError] = useState();
  const [subjectError, setSubjectError] = useState();

  const onSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      name,
      email,
      phoneNumber,
      subject,
    };
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      await axios.post(
        `${BaseUrl}/consultation/create`,
        payload,
        config
      );
      setName("");
      setEmail("");
      setphoneNumber("");
      // setNameError("")
    } catch (error) {
      error.response.data.errors.map((e) => {
        return e.name
          ? setNameError(e.name)
          : e.email
          ? setEmailError(e.email)
          : e.phoneNumber
          ? setPhoneNumberError(e.phoneNumber)
          : setSubjectError(e.subject);
      });
      //error
    }
  };
  return (
    <Fragment>
      <div className={`consultation-form ${extraClass}`}>
        <h3 className="title">Free Consultation</h3>
        <p className="subtitle">
          Contact us with details of your requirement. We will get back to you
          within 24 hours.
        </p>
        <form action="#" onSubmit={(e) => e.preventDefault()}>
          <div>
            <input
              className="free_input"
              type="text"
              placeholder="Full Name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <span>{nameError}</span>
          </div>
          <div className="input-field">
            <input
              className="free_input"
              type="text"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span>{emailError}</span>
          </div>
          <div className="input-field">
            <input
              className="free_input"
              type="text"
              placeholder="Phone Number"
              name="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setphoneNumber(e.target.value)}
            />
            <span>{phoneNumberError}</span>
          </div>
          <div className="input-field">
            <NiceSelect
              datalist={[
                "Web Development",
                "Mobile App Development",
                "Blockchain/NFT Development",
                "Game Development",
                "Hire Dedicated Developers",
              ]}
              disable="Subject"
              setActiveValue={setSubject}
              activeValue={subject}
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <span>{subjectError}</span>
          </div>
          <div className="input-field">
            <button type="submit" className="template-btn" onClick={onSubmit}>
              Get Consultations <i className="far fa-long-arrow-right" />
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};
export default FreeConsultation;
