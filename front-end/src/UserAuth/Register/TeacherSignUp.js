import { useState } from "react";
import Navbar from "../../NavBarContent/Navbar";
import "./StudentSignup.css";
// axios to call the api
import axios from "axios";

const TeacherSignUp = () => {
  const [gender, setGender] = useState("Male");
  const [user, setUser] = useState({
    name: "",
    // age: "",
    email: "",
    phoneNumber: "",
    dob: "",
    specilization: "",
    address: "",
    zip: "",
    password: "",
    confirmPass: "",
    // gender:""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const register = () => {
    const {
      name,
      email,
      phoneNumber,
      dob,
      specilization,
      address,
      zip,
      password,
      confirmPass,
      // gender,
    } = user;
    console.log("====================================");
    console.log(user);
    console.log("====================================");
    if (
      name &&
      email &&
      phoneNumber &&
      dob &&
      specilization &&
      address &&
      zip &&
      password &&
      password === confirmPass
    ) {
      const responseData = axios
        .post("http://localhost:4500/TeacherSignUp", { user, gender })
        .then(
          (res) => alert(res.data.message)
          // console.log("i m getting something here", res.data.message)
        )
        .catch((error) => {
          console.log("This is an error", error);
        });
    } else {
      alert("Missing Something!!");
    }
  };

  return (
    <>
      <Navbar />
      <style>
        {
          "body { background: linear-gradient(135deg, #71b7e6, #9b59b6); },{height: 100vh;},{display: flex;},{justify-content: center;},{align-items: center;},{padding: 10px;}"
        }
      </style>
      <div className="container studentSignup-container">
        <div className="title">Teacher Registration</div>
        <div className="studentSignup-content">
          <form>
            <div className="user-details">
              <div className="input-box">
                <span className="details">Full Name</span>
                <input
                  type="text"
                  name="name"
                  value={user.name}
                  placeholder="Enter your name"
                  onChange={handleChange}
                />
              </div>
              <div className="input-box">
                <span className="details">Email</span>
                <input
                  type="text"
                  name="email"
                  value={user.email}
                  placeholder="Enter your email"
                  onChange={handleChange}
                />
              </div>
              <div className="input-box">
                <span className="details">Phone Number</span>
                <input
                  type="text"
                  name="phoneNumber"
                  value={user.phoneNumber}
                  placeholder="Enter your number"
                  onChange={handleChange}
                />
              </div>
              <div className="input-box">
                <span className="details">DOB</span>
                <input
                  type="date"
                  name="dob"
                  value={user.dob}
                  placeholder="Enter your password"
                  onChange={handleChange}
                />
              </div>
              <div className="input-box">
                <span className="details">Specilization</span>
                <input
                  type="text"
                  name="specilization"
                  value={user.specilization}
                  placeholder="Enter your Specilization"
                  onChange={handleChange}
                />
              </div>
              <div className="input-box">
                <span className="details">Address</span>
                <input
                  type="text"
                  name="address"
                  placeholder="Enter your Address"
                  value={user.address}
                  onChange={handleChange}
                />
              </div>
              <div className="input-box">
                <span className="details">Zip Code</span>
                <input
                  type="Number"
                  name="zip"
                  value={user.zip}
                  onChange={handleChange}
                  placeholder="Enter your PinCode"
                />
              </div>
              <div className="input-box">
                <span className="details">Password</span>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={user.password}
                  onChange={handleChange}
                />
              </div>
              <div className="input-box">
                <span className="details">Confirm Password</span>
                <input
                  type="password"
                  name="confirmPass"
                  placeholder="Confirm your password"
                  value={user.confirmPass}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="gender-details">
              <input
                type="radio"
                name="gender"
                id="dot-1"
                value="Male"
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              />
              <input
                type="radio"
                name="gender"
                value="Female"
                id="dot-2"
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              />
              <span className="gender-title">Gender</span>
              <div className="category">
                <label htmlFor="dot-1">
                  <span className="dot one"></span>
                  <span className="gender" name="gender">
                    Male
                  </span>
                </label>
                <label htmlFor="dot-2">
                  <span className="dot two"></span>
                  <span className="gender" name="gender">
                    Female
                  </span>
                </label>
              </div>
            </div>

            <div className="button">
              <input type="button" onClick={register} value="Register" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default TeacherSignUp;
