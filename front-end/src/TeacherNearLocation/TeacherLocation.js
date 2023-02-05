import bharatnatyam from "../imgs/bharatnatyam.jpg";
import Male from "../imgs/Male.jpg";
import Female from "../imgs/Femal.jpg";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useContext } from "react";
// import { MyContext } from "../../MyProvider";
import { MyContext } from "../MyProvider";

// import "../CoursesDir/Dance"
const TeacherLocation = () => {
  const context = useContext(MyContext);
  const [click, setclick] = useState(false);
  const [date, setdate] = useState("");
  const navigate = useNavigate();
  const [courseId, setCourseId] = useState("");
  const [course, setCourse] = useState("");
  const [teacherId, setTeacherId] = useState("");
  const [currenttime, setcurrenttime] = useState("");
  const [timeperiod, settimeperiod] = useState("");
  const [modeOfStudy, setModeOfStudy] = useState("");
  const [NumberofDays, setNumberOfDays] = useState("");

  const location = useLocation();

  console.log(location.state);
  console.log(location.state.length);
  var ra = location.state[location.state.length - 1];
  console.log(ra);

  const id = localStorage.getItem("_id");

  const locdata = async () => {
    console.log(context.state.user);
    alert(course);
    var l = {
      teacherId,
      courseId,
      course,
      date,
      NumberofDays,
      modeOfStudy,
    };

    await axios
      .post("http://localhost:4500/TeacherLocation", { l, id })
      .then((res) => {
        console.log(res);
        // setclick(false);
        // navigate("/OnlinePayment");
        navigate("/RazorPay");
      });
    // alert("Couorse taken done");
  };

  const rac = (index, data) => {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;

    const formattedToday = dd + "/" + mm + "/" + yyyy;
    setdate(formattedToday);
    setCourseId(data._id);
    setCourse(data.courseTitle);

    setTeacherId(location.state[index]);
    setclick(true);
  };
  if (click) {
    return (
      <>
        <h1>{teacherId}</h1>
        <div className="container-fluid p-5  text-white text-center bg-success bg-gradient p-5">
          <div className="  hover_box container-fluid  row  p-1 mt-5  text-center">
            <div className=" row container-fluid">
              <div className="col-sm-10 col-md-5 col-lg-5 ">
                <img
                  // src={poojaurl}
                  width="250px"
                  height="250px"
                  alt="loding.."
                />
              </div>
              <div className="col-sm-10 col-md-5 col-lg-5 ">
                <h1>Today Date: {date}</h1>
                <h2>{id}</h2>
                <h2> {teacherId}</h2>

                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic example"
                ></div>
              </div>
            </div>
          </div>
          <div>
            <form
              className="row text-center align-center"
              // onSubmit={handleSubmit}
            >
              <div className="col-md-2" />

              <div className="col-sm-12 col-md-4  mb-3 mt-3">
                <input
                  placeholder="Number Of days"
                  // value="NumberOfDays"
                  onChange={(e) => setNumberOfDays(e.target.value)}
                  type="Number"
                  className="form-control"
                  id="age"
                />
              </div>
              <div className="col-sm-12 col-md-4  mb-3 mt-3">
                <input
                  placeholder="Mode Of Study"
                  // value="modeofstudy"
                  onChange={(e) => setModeOfStudy(e.target.value)}
                  type="text"
                  className="form-control"
                  id="age"
                />
              </div>

              <div className="col-md-2" />

              <button
                onClick={locdata}
                type="button"
                className="container col-sm-12 col-md-6 mb-3 mt-3 bg-success btn btn-outline-warning"
              >
                Order
              </button>
            </form>
            <h5>
              {/* <Link className="text-white" to={"/Profile"}> */}
              {/* No need */}
              {/* </Link> */}
            </h5>
            <p></p>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <style>
          {
            "body { background: #f2f2f2; },{font-family:sans-serif;},{margin:0;}"
          }
        </style>
        <h2 class="text-center">Teacher's NearBy Location</h2>
        <div className="gallery">
          {ra.map((data, index) => {
            return (
              <>
                <div className="dance-content">
                  <img className="danceImg" src={Male} alt="bharatnatyam" />
                  <h3>{data.courseTitle}</h3>
                  <h3>{location.state[index]}</h3>

                  <p>{data.coursePrice}</p>
                  <p>{data.dob}</p>
                  <h6>{data.zip}</h6>
                  <ul>
                    <li>
                      <i className="fa fa-star checked"></i>
                    </li>
                    <li>
                      <i className="fa fa-star checked"></i>
                    </li>
                    <li>
                      <i className="fa fa-star checked"></i>
                    </li>
                    <li>
                      <i className="fa fa-star checked"></i>
                    </li>
                    <li>
                      <i className="fa fa-star checked"></i>
                    </li>
                  </ul>
                  <button
                    key={index}
                    className="buy-1 danceButton"
                    onClick={() => {
                      rac(index, data);
                    }}
                  >
                    Take Course
                  </button>
                </div>
              </>
            );
          })}
        </div>
      </>
    );
  }
};
export default TeacherLocation;
