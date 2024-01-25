import React, { useEffect, useState } from "react";
import Select from "react-select";
import { useLocation, useHistory, Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import Alert from "../../Alert";
import GoogleMap from "../../GoogleMap";
import URL from "../../../../Api/Constant";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getWeatherDataApi } from "../../../Redux/Action/WeatherAction";
import { GetAllGigs } from "../../../Redux/Action/AllGigAction";
import { CreateCab, UpdateCab } from "../../../Redux/Action/CabAction";

const customStyles = {
  control: (base, state) => ({
    ...base,
    background: "#2a3038",
    border: "0px",
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isFocused ? "#2a3038" : null,
    };
  },
  menuList: (base) => ({
    ...base,
    background: "#000",
    padding: "0px",
  }),
  menu: (base) => ({
    ...base,
    marginTop: "4px",
  }),
};

export default function CreateCabBook() {
  const gigData = useSelector((state) => state.allGigReducer);
  const weatherData = useSelector((state) => state.weatherReducer);
  const axios = require("axios").default;
  const token = localStorage.getItem("token");
  const history = useHistory();
  const { state } = useLocation();
  const dispatch = useDispatch();
  const [user, setUser] = useState("");

  const [gig, setGig] = useState("");

  const [depart_location, setDepart_location] = useState("");
  const [depart_locationError, setDepart_locationError] = useState("");

  const [depart_lat_long, setDepart_lat_long] = useState("");
  const [depart_lat_longError, setDepart_lat_longError] = useState("");

  const [depart_time, setDepart_time] = useState(new Date());
  const [arrival_time, setArrival_time] = useState(new Date());

  const [arrival_location, setArrival_location] = useState(null);
  const [arrival_locationError, setArrival_locationError] = useState("");

  const [arrival_lat_long, setArrival_lat_long] = useState("");
  const [arrival_lat_longError, setArrival_lat_longError] = useState("");

  const [driver_name, setDriver_name] = useState("");
  const [driver_nameError, setDriver_nameError] = useState("");

  const [driver_number, setDriver_number] = useState("");
  const [driver_numberError, setDriver_numberError] = useState("");

  const [wather, setWether] = useState(0);

  const [buttonName, setButtonName] = useState("Submit");

  const [gigsOption, setGigsOption] = useState([]);
  const [responseError, setResponseError] = useState("");

  const [userId, setUserId] = useState([]);
  const handleClick = () => {
    if (buttonName === "Submit") {
      addCabbookApi();
    } else {
      editCabbookApi();
    }
  };

  const addCabbookApi = async () => {
    const formData = new FormData();
    formData.append("user", user.value);
    formData.append("gig", gig.value);
    formData.append("depart_location", depart_location);
    formData.append("depart_lat_long", depart_lat_long);
    formData.append(
      "depart_time",
      moment.utc(depart_time).format("YYYY-MM-DD hh:mm:ss")
    );
    formData.append("arrival_location", arrival_location);
    formData.append("arrival_lat_long", arrival_lat_long);
    formData.append(
      "arrival_time",
      moment.utc(arrival_time).format("YYYY-MM-DD hh:mm:ss")
    );
    formData.append("driver_name", driver_name);
    formData.append("driver_number", driver_number);
    formData.append("wather", wather);
    const res = await dispatch(CreateCab(formData));
    if (res.status === 200) {
      history.push("/cabbook/manageCabBook");
    } else {
      setResponseError(
        typeof res.response.data.message === "string"
          ? res.response.data.message
          : "All field is required"
      );
      setTimeout(() => {
        setResponseError("");
      }, 2000);
    }
  };
  const editCabbookApi = async () => {
    const formData = new FormData();
    formData.append("user", user.value);
    formData.append("gig", gig.value);
    formData.append("depart_location", depart_location);
    formData.append("depart_lat_long", depart_lat_long);
    formData.append(
      "depart_time",
      moment.utc(depart_time).format("YYYY-MM-DD hh:mm:ss")
    );
    formData.append("arrival_location", arrival_location);
    formData.append("arrival_lat_long", arrival_lat_long);
    formData.append(
      "arrival_time",
      moment.utc(arrival_time).format("YYYY-MM-DD hh:mm:ss")
    );
    formData.append("driver_name", driver_name);
    formData.append("driver_number", driver_number);
    formData.append("wather", wather);
    const res = await dispatch(UpdateCab(formData, state.obj.id));
    if (res.status === 200) {
      history.push("/cabbook/manageCabBook");
    } else {
      setResponseError(
        typeof res.response.data.message === "string"
          ? res.response.data.message
          : "All field is required"
      );
      setTimeout(() => {
        setResponseError("");
      }, 2000);
    }
  };

  const getWeather = async (latitude, longitude) => {
    const res = await dispatch(getWeatherDataApi(latitude, longitude));
    if (res.status === 200) {
      setWether(weatherData.weather);
    } else {
      setResponseError(res.response.data.message);
      setTimeout(() => {
        setResponseError("");
      }, 2000);
    }
  };
  useEffect(() => {
    let latitude;
    let longitude;
    if (arrival_lat_long) {
      latitude = arrival_lat_long.split(",")[0]?.trim();
      longitude = arrival_lat_long.split(",")[1]?.trim();
    }
    if (latitude && longitude) {
      getWeather(latitude, longitude);
    }
  }, [arrival_lat_long]);

  const onInputChange = (e) => {
    if (e.target.name === "depart_location") {
      setDepart_location(e.target.value);
      if (e.target.value !== "") {
        setDepart_locationError("");
      } else {
        setDepart_locationError("Please enter Depart_location");
      }
    }
    const inputLatLongValidation = new RegExp(
      "^[-]?([0-9]+([.][0-9]*)?|[.][0-9]+)? *, *[-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$"
    );
    if (
      e.target.name === "depart_lat_long" ||
      e.target.name === "arrival_lat_long"
    ) {
      if (inputLatLongValidation.test(e.target.value)) {
        if (e.target.name === "depart_lat_long") {
          setDepart_lat_long(e.target.value);
          setDepart_lat_longError("");
        }
        if (e.target.name === "arrival_lat_long") {
          setArrival_lat_long(e.target.value);
          setArrival_lat_longError("");
        }
      } else {
        if (e.target.name === "depart_lat_long") {
          setDepart_lat_long(e.target.value);
          setDepart_lat_longError("Please enter Depart_lat_long");
        }
        if (e.target.name === "arrival_lat_long") {
          setArrival_lat_long(e.target.value);
          setArrival_lat_longError("Please enter Arrival_lat_long");
        }
      }
    }

    if (e.target.name === "arrival_location") {
      setArrival_location(e.target.value);
      if (e.target.value !== "") {
        setArrival_locationError("");
      } else {
        setArrival_locationError("Please enter Arrival_location");
      }
    }

    const inputNameValidation = new RegExp("^[a-zA-Z ]+$");
    if (e.target.name === "driver_name") {
      if (inputNameValidation.test(e.target.value)) {
        setDriver_name(e.target.value);
        setDriver_nameError("");
      } else {
        setDriver_name(e.target.value);
        setDriver_nameError("Please enter Driver Name");
      }
    }

    const inputNumberValidation = new RegExp("^[+]?[0-9 ]{10,20}$");
    if (e.target.name === "driver_number") {
      if (inputNumberValidation.test(e.target.value)) {
        setDriver_number(e.target.value);
        setDriver_numberError("");
      } else {
        setDriver_number(e.target.value);
        setDriver_numberError("Please enter valid Driver number");
      }
    }
  };

  const allGigs = async () => {
    const res = await dispatch(GetAllGigs());
    if (res.status === 200) {
      setGigsOption(gigData.GigOption);
    } else {
      setResponseError(
        typeof res.response.data.message === "string"
          ? res.response.data.message
          : "All field is required"
      );
      setTimeout(() => {
        setResponseError("");
      }, 2000);
    }
  };

  useEffect(() => {
    allGigs();
  }, []);

  useEffect(() => {
    if (state && state.obj) {
      setUser({ value: state.obj.user_id, label: state.obj.user_name });
      setGig({ value: state.obj.gig_id, label: state.obj.gig_title });
      setDepart_lat_long(state.obj.depart_lat_long);
      setDepart_location(state.obj.depart_location);
      setArrival_location(state.obj.arrival_location);
      setArrival_lat_long(state.obj.arrival_lat_long);
      setDriver_name(state.obj.driver_name);
      setDriver_number(state.obj.driver_number);
      setWether(state.obj.wather);
      setArrival_time(new Date(state.obj.arrival_time));
      setDepart_time(new Date(state.obj.depart_time));
      setButtonName("Update");
    } else {
      handleReset();
      setButtonName("Submit");
    }
  }, [state]);

  const handleReset = () => {
    setUser("");
    setGig("");
    setDepart_lat_long("");
    setDepart_location("");
    setDepart_time("");
    setArrival_location("");
    setArrival_lat_long("");
    setDriver_name("");
    setDriver_number("");
    setArrival_time("");
    setWether("");
    if (buttonName === "Update" && state && state.obj) {
      history.push("/cabbook/manageCabBook");
    }
  };
  let disabled = true;
  if (
    user !== "" &&
    gig !== "" &&
    depart_lat_long !== "" &&
    depart_location !== "" &&
    depart_time !== "" &&
    arrival_location !== "" &&
    arrival_lat_long !== "" &&
    arrival_time !== "" &&
    driver_name !== "" &&
    driver_number !== ""
  ) {
    disabled = false;
  }

  const gigsOptionChanges = (option) => {
    setGig(option);
    setUser("");
    const userList = [];
    option.users.length > 0 &&
      option.users.forEach((obj) => {
        const newObj = {
          value: obj.id,
          label: obj.username,
        };
        userList.push(newObj);
      });

    setUserId(userList);
  };

  const onStartTimeChange = (start_date) => {
    setDepart_time(start_date);
  };
  const onEndTimeChange = (start_date) => {
    setArrival_time(start_date);
  };

  return (
    <div>
      <div className="page-header">
        <div
          className="d-flex align-center back-btn"
          onClick={() => {
            history.push("/cabbook/ManageCabBook");
          }}
        >
          <i className="mdi mdi-keyboard-backspace m-right-5"></i>
          <div>Back</div>
        </div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link className="pageHeadingLink" to="/cabbook/manageCabBook">
                Cab Book
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {state && state.obj ? "Edit CabBook" : "Create CabBook"}
            </li>
          </ol>
        </nav>
      </div>
      <div className="row">
        <div className="col-12 grid-margin">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">
                {state && state.obj ? "Edit CabBook" : "Create CabBook"}
              </h4>
              {responseError !== "" && <Alert message={responseError} />}

              <form className="form-sample">
                <div className="row mb-17">
                  <div className="col-md-6 d_flex mb-16 ">
                    <label className="col-sm-3 col-form-label label">
                      Gig*
                    </label>
                    <Select
                      placeholder="select gig"
                      name="gig"
                      hideSelectedOptions
                      value={gig == null ? "" : gig}
                      onChange={(event) => gigsOptionChanges(event)}
                      options={gigsOption}
                      styles={customStyles}
                    />
                  </div>
                  <div className="col-md-6 d_flex mb-16 ">
                    <label className="col-sm-3 col-form-label label">
                      user*
                    </label>
                    <Select
                      placeholder="select user"
                      name="user"
                      hideSelectedOptions
                      onChange={setUser}
                      options={userId}
                      value={user == null ? "" : user}
                      styles={customStyles}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">
                        Depart Location*
                      </label>
                      <div className="col-sm-9">
                        <Form.Control
                          placeholder="depart location"
                          name="depart_location"
                          type="text"
                          value={depart_location == null ? "" : depart_location}
                          onChange={onInputChange}
                        />
                      </div>
                      <div className="text-error">{depart_locationError}</div>
                    </Form.Group>
                  </div>
                  <div className="col-md-6">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">
                        Depart Lat Long*
                      </label>
                      <div className="col-sm-9">
                        <Form.Control
                          placeholder="depart lat long"
                          name="depart_lat_long"
                          type="text"
                          value={depart_lat_long == null ? "" : depart_lat_long}
                          onChange={onInputChange}
                        />
                      </div>

                      {/* <GoogleMap /> */}

                      <div className="text-error">{depart_lat_longError}</div>
                    </Form.Group>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">
                        Arrival Location*
                      </label>
                      <div className="col-sm-9">
                        <Form.Control
                          placeholder="arrival location"
                          name="arrival_location"
                          type="text"
                          value={
                            arrival_location == null ? "" : arrival_location
                          }
                          onChange={onInputChange}
                        />
                      </div>
                      <div className="text-error">{arrival_locationError}</div>
                    </Form.Group>
                  </div>
                  <div className="col-md-6">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">
                        Arrival Lat Long*
                      </label>
                      <div className="col-sm-9">
                        <Form.Control
                          placeholder="arrival lat long"
                          name="arrival_lat_long"
                          type="text"
                          value={
                            arrival_lat_long == null ? "" : arrival_lat_long
                          }
                          onChange={onInputChange}
                        />
                      </div>
                      <div className="text-error">{arrival_lat_longError}</div>
                    </Form.Group>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">
                        Driver Name*
                      </label>
                      <div className="col-sm-9">
                        <Form.Control
                          placeholder="driver name"
                          name="driver_name"
                          type="text"
                          value={driver_name == null ? "" : driver_name}
                          onChange={onInputChange}
                        />
                      </div>
                      <div className="text-error">{driver_nameError}</div>
                    </Form.Group>
                  </div>
                  <div className="col-md-6">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">
                        Driver Number*
                      </label>
                      <div className="col-sm-9">
                        <Form.Control
                          placeholder="driver number"
                          name="driver_number"
                          type="text"
                          value={driver_number == null ? "" : driver_number}
                          onChange={onInputChange}
                        />
                      </div>
                      <div className="text-error">{driver_numberError}</div>
                    </Form.Group>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">
                        Weather*
                      </label>
                      <div className="col-sm-9 d-flex search-field align-center">
                        <Form.Control
                          className="h-auto"
                          placeholder="weather"
                          name="wather"
                          type="text"
                          value={wather == null ? "" : wather}
                          disabled
                        />

                        <span className="symbol-position">°</span>
                      </div>
                    </Form.Group>
                  </div>
                  <div className="col-md-6">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">
                        Depart Time*
                      </label>
                      <div className="col-sm-9">
                        <DatePicker
                          placeholderText="select date and time"
                          selected={depart_time}
                          value={depart_time}
                          className="date-input"
                          name="depart_time"
                          onChange={onStartTimeChange}
                          showTimeSelect
                          timeIntervals={5}
                          dateFormat="MMMM d, yyyy h:mm aa"
                          maxDate={arrival_time}
                        />
                      </div>
                    </Form.Group>
                  </div>
                  <div className="col-md-6">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">
                        Arrival Time*
                      </label>

                      <div className="col-sm-9">
                        <DatePicker
                          placeholderText="select date and time"
                          selected={arrival_time}
                          value={arrival_time}
                          className="date-input"
                          name="arrival_time"
                          onChange={onEndTimeChange}
                          showTimeSelect
                          timeIntervals={5}
                          dateFormat="MMMM d, yyyy h:mm aa"
                          minDate={depart_time}
                        />
                      </div>
                    </Form.Group>
                  </div>
                </div>
                <div className="row">
                  <div className="card-body ">
                    <div className="template-demo">
                      <button
                        type="button"
                        className="btn btn-primary btn-fw"
                        onClick={handleClick}
                        disabled={disabled}
                      >
                        {buttonName}
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary btn-fw"
                        onClick={handleReset}
                      >
                        {buttonName === "Submit" ? "Reset" : "Cancel"}
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
