import { useState } from "react";
import Navbar from "../../NavBarContent/Navbar";
import "./StudentSignup.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { message } from "antd";
const SignUp = () => {
  // here user is a object which wil update
  const navigate = useNavigate();
  const [postImage, setPostImage] = useState("");
  const [gender, setGender] = useState("Male");
  const [user, setUser] = useState({
    name: "",
    // photo: "",
    email: "",
    phoneNumber: "",
    dob: "",
    modeOfStudy: "",
    address: "",
    zip: "",
    password: "",
    confirmPass: "",
    // gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("This is the value", value);
    console.log("This is the name ", name);
    setUser({
      ...user,
      [name]: value,
    });
  };
  const register = async () => {
    try {
      const {
        name,
        email,
        phoneNumber,
        dob,
        modeOfStudy,
        address,
        zip,
        password,
        confirmPass,
      } = user;
      console.log("====================================");
      console.log(user);
      console.log("====================================");
      if (
        name &&
        email &&
        phoneNumber &&
        dob &&
        modeOfStudy &&
        address &&
        zip &&
        password &&
        password === confirmPass
      ) {
        const resp = await axios.post("http://localhost:4500/studentSignUp", {
          user,
          gender,
          postImage,
        });
        if (resp.data.success) {
          message.success(`Register Sucessfully!...`);
          navigate("/Login");
        } else {
          message.error(resp.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      message.error(`Something went wrong..`);
    }
  };
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    console.log(file);
    const base64 = await convertToBase64(file);
    setPostImage({ ...postImage, base64 });
    console.log(postImage);
  };

  return (
    <>
      <Navbar />
      {/* {<h1>{gen}</h1>} */}
      {console.log(gender)}
      {console.log(user)}
      <style>
        {
          "body { background: linear-gradient(135deg, #71b7e6, #9b59b6); },{height: 100vh;},{display: flex;},{justify-content: center;},{align-items: center;},{padding: 10px;}"
        }
      </style>
      <div className="container studentSignup-container">
        <div className="title">Student Registration</div>
        <div className="studentSignup-content">
          <form method="POST">
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
              <div class="mb-3">
                <label for="formFile" class="form-label">
                  <span className="details">Photo</span>
                </label>
                <input
                  class="form-control"
                  name="myFile"
                  // value={user.photo}
                  type="file"
                  id="formFile"
                  accept=".jpeg,.png,.jpg"
                  onChange={(e) => {
                    handleFileUpload(e);
                  }}
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
                <span className="details">Mode Of Study</span>
                <input
                  type="text"
                  name="modeOfStudy"
                  value={user.modeOfStudy}
                  onChange={handleChange}
                  placeholder="Enter your Mode Of Study"
                />
              </div>
              <div className="input-box">
                <span className="details">Address</span>
                <input
                  type="text"
                  name="address"
                  value={user.address}
                  onChange={handleChange}
                  placeholder="Enter your Address"
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
                  value={user.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                />
              </div>
              <div className="input-box">
                <span className="details">Confirm Password</span>
                <input
                  type="password"
                  name="confirmPass"
                  value={user.confirmPass}
                  onChange={handleChange}
                  placeholder="Confirm your password"
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
              {/* <input type="radio" name="gender" id="dot-3" /> */}
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

export default SignUp;

function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
}
