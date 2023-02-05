import { useEffect, useState } from "react";
import Navbar from "../../NavBarContent/Navbar";
import "./StudentSignup.css";
import { useNavigate } from "react-router-dom";
// axios to call the api
import axios from "axios";
import { message } from "antd";
const TeacherSignUp = () => {
  const navigate = useNavigate();
  const [gender, setGender] = useState("Male");
  const [postImage, setPostImage] = useState("");
  const [courses, setCourses] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");
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
    start: "",
    end: "",
    // gender:""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
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
        specilization,
        address,
        zip,
        start,
        end,
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
        address &&
        zip &&
        start &&
        end &&
        password &&
        password === confirmPass
      ) {
        const responseData = await axios.post(
          "http://localhost:4500/TeacherSignUp",
          {
            user,
            gender,
            postImage,
          }
        );
        //     .then(
        //       (res) => alert(res.data.message)
        //       // console.log("i m getting something here", res.data.message)
        //     )
        //     .catch((error) => {
        //       console.log("This is an error", error);
        //     });
        // } else {
        //   alert("Missing Something!!");
        // }
        console.log("This is response data", responseData);
        if (responseData.data.success) {
          message.success(`Register Sucessfully!...`);
          navigate("/Login");
        } else {
          message.error(responseData.data.message);
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
              {/* <div className="input-box">
                <span className="details">Specilization</span>
                <input
                  type="text"
                  name="specilization"
                  value={user.specilization}
                  placeholder="Enter your Specilization"
                  onChange={handleChange}
                />
              </div> */}
              <div className="input-box drop">
                <span className="details">Specilization</span>
                <select
                  style={{ height: "40px", width: "300px" }}
                  value={selectedValue}
                  placeholder="Select Specilization"
                  onChange={(event) => {
                    setSelectedValue(event.target.value);
                  }}
                >
                  <option value="">Select an option</option>
                  <option value="option1">Music</option>
                  <option value="option2">Dance</option>
                  <option value="option3">Drawing</option>
                  <option value="option4">Communication Skills</option>
                  <option value="option5">Yoga</option>
                  <option value="option5">Personality Development</option>
                </select>
                {/* <p>Selected value: {selectedValue}</p> */}
              </div>

              {/**
               *
               *
               */}
              <div className="input-box">
                <span className="details">start</span>
                <input
                  type="time"
                  name="start"
                  placeholder="start"
                  value={user.start}
                  onChange={handleChange}
                />
              </div>
              <div className="input-box">
                <span className="details">end</span>
                <input
                  type="time"
                  name="end"
                  value={user.end}
                  onChange={handleChange}
                  placeholder="end"
                />
              </div>

              {/**
               *
               *
               *
               */}
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
