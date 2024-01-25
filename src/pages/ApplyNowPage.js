import React, { useRef, useState } from "react";
import axios from "axios";
import Select from "react-select";
import BaseUrl from "../components/Baseurl";


function ApplyNowPage() {
  const inputRef = useRef(null)

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    city: "",
    selectExpireance: "",
    selectJoining: "",
    resume: null
  });
  console.log(data, "//////////////////////");
  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      await axios.post(`${BaseUrl}/apply_form/create`, data, config);
      // setName("");
      // setEmail("");
      // setphoneNumber("");
      // setNameError("")
    } catch (error) {
      console.log(error);
      // error.response.data.errors.map((e) => {
      //   return e.name
      //     ? setNameError(e.name)
      //     : e.email
      //     ? setEmailError(e.email)
      //     : e.phoneNumber
      //     ? setPhoneNumberError(e.phoneNumber)
      //     : setSubjectError(e.subject);
      // });
      //error
    }
  };
  // const onImageChange = async (e) => {
  //   setSongImage(e.target.value)
  //   setImage(e.target.files)
  // }
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    // console.log(resume ? e.target.files[0] : "00");
  };
 const handleImageChange = (e) => {
    setData({resume: e.target.files })
    // console.log(e);
  };
  const handleSelectChange = (name, value) => {
    setData({ ...data, [name]: value });
  };

  console.log(data,"data");
  const Joining = [
    { value: "Immediatly", label: "Immediatly" },
    { value: "In a Week", label: "In a Week" },
    { value: "In a Month", label: "In a Month" },
  ];
  const Expiriance = [
    { value: "Fresher", label: "Fresher" },
    { value: "0-1 Year", label: "0-1 Year" },
    { value: "1-2 year", label: "0-1 Year" },
    { value: "2-3 year", label: "0-1 Year" },
    { value: "more then 3 year", label: "more then 3 year" },
  ];
  return (
    
    <div className="apply-page-bg ">
      <div className="container">
        <div className="text-center">
          <h1 className="head_form">Apply Now</h1>
        </div>
        <form action="#" onSubmit={(e) => e.preventDefault()}>
          <div className="apply-now-form default-box-shadow">
            <div className="row">
              <div style={{ marginBottom: "20px" }}>
                <input
                  type="text"
                  placeholder="First Name"
                  className="apply-input"
                  name="firstName"
                  value={data.firstName}
                  onChange={handleChange}
                ></input>
              </div>

              <div style={{ marginBottom: "20px" }}>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="apply-input"
                  name="lastName"
                  value={data.lastName}
                  onChange={handleChange}
                ></input>
              </div>
              <div style={{ marginBottom: "20px" }}>
                <input
                  type="text"
                  placeholder="Email"
                  className="apply-input"
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                ></input>
              </div>
              <div style={{ marginBottom: "20px" }}>
                <input
                  type="text"
                  placeholder="Contact Number"
                  className="apply-input"
                  name="phoneNumber"
                  value={data.phoneNumber}
                  onChange={handleChange}
                ></input>
              </div>
              <div style={{ marginBottom: "20px" }}>
                <input
                  type="text"
                  placeholder="City"
                  className="apply-input"
                  name="city"
                  value={data.city}
                  onChange={handleChange}
                ></input>
              </div>
              <div className="input-field">
                <Select
                  className="input_select"
                  placeholder="select experiance"
                  name="selectExpireance"
                  options={Expiriance}
                  value={data.expireance}
                  onChange={(e) =>
                    handleSelectChange("selectExpireance", e.value)
                  }
                  styles={{
                    control: (base, state) => ({
                      ...base,
                      "&:hover": { borderColor: "black" }, // border style on hover
                      border: "none",
                      borderBottom: state.isFocused
                        ? "2px solid black"
                        : "2px solid rgba(38, 103, 255, 0.1)",
                      boxShadow: "none", // no box-shadow
                      borderRadius: "0",
                      background: "transparent",
                    }),
                    singleValue: (base, state) => ({
                      ...base,
                      fontFamily: "'Quicksand', sans-serif",
                      fontWeight: "700",
                      fontSize: "20px",
                      color: "#0b1460",
                      letterSpacing: "-0.3px",
                    }),
                    placeholder: (base, state) => ({
                      ...base,
                      fontFamily: "'Quicksand', sans-serif",

                      fontSize: "16px",
                      color: "gray",
                      letterSpacing: "-0.3px",
                    }),
                    menu: (base, state) => ({
                      ...base,
                      zIndex: 2,
                    }),
                    menuList: (base, state) => ({
                      ...base,
                      fontFamily: "'Quicksand', sans-serif",
                      fontSize: "16px",
                      letterSpacing: "-0.3px",
                    }),
                  }}
                />
              </div>

              <div className="input-field">
                <Select
                  className="input_select"
                  placeholder="select joining"
                  name="selectJoining"
                  options={Joining}
                  value={data.joining}
                  onChange={(e) => handleSelectChange("selectJoining", e.value)}
                  styles={{
                    control: (base, state) => ({
                      ...base,
                      "&:hover": { borderColor: "black" }, // border style on hover
                      border: "none",
                      borderBottom: state.isFocused
                        ? "2px solid black"
                        : "2px solid rgba(38, 103, 255, 0.1)",
                      boxShadow: "none", // no box-shadow
                      borderRadius: "0",
                      background: "transparent",
                    }),
                    singleValue: (base, state) => ({
                      ...base,
                      fontFamily: "'Quicksand', sans-serif",
                      fontWeight: "700",
                      fontSize: "20px",
                      color: "#0b1460",
                      letterSpacing: "-0.3px",
                    }),
                    placeholder: (base, state) => ({
                      ...base,
                      fontFamily: "'Quicksand', sans-serif",

                      fontSize: "16px",
                      color: "gray",
                      letterSpacing: "-0.3px",
                    }),
                    menu: (base, state) => ({
                      ...base,
                      zIndex: 2,
                    }),
                    menuList: (base, state) => ({
                      ...base,
                      fontFamily: "'Quicksand', sans-serif",
                      fontSize: "16px",
                      letterSpacing: "-0.3px",
                    }),
                  }}
                />
              </div>
              <div style={{ marginBottom: "20px" }}>
                <textarea
                  className="apply-input"
                  placeholder="Message"
                  name="message"
                  value={data.message}
                  onChange={handleChange}
                  defaultValue={""}
                />
              </div>
              {console.log(data.resume,"??????::::::::::::::")}
              <div className="input-field">
                <input
                  ref={inputRef}
                  type="file"
                  name="resume"
                  value={data.resume}
                  // accept="image/png, image/jpeg"
                  onChange={handleImageChange}
                ></input>
              </div>
              <div className="input-field text-align-center">
                <button className="apply_button" onClick={onSubmit}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ApplyNowPage;
