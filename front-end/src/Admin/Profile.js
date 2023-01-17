import { useContext } from "react";
import { MyContext } from "../MyProvider";
import { Link } from "react-router-dom";
import "./Profile.css";
import ban from "../imgs/bangra.jpg";

const Profile = () => {
  const context = useContext(MyContext);
  console.log(context.state.user);
  console.log(context.state);
  const logout = () => {
    localStorage.clear();
    window.location.href = "http://localhost:3000/";
  };
  return (
    <>
      <div className="container">
        <div className="main">
          <div className="row">
            <div className="col-md-4 mt-1">
              <div className="card text-center sidebar">
                <div className="card-body">
                  <img
                    src={context.state.user.image}
                    alt="loding.."
                    className="rounded-circle"
                    width="150"
                  />
                  <div className="mt-3">
                    <Link to="/Location">
                      <a>Location</a>
                      {/* Location */}
                    </Link>
                    {/* <Link to="/TeacherNearLocation"> */}
                    {/* <a>TeacherNearLocation</a> */}
                    {/* TeacherNearLocation */}
                    {/* </Link> */}
                    <Link to="/TakenCourses">
                      <a>TakenCourses</a>
                      {/* TakenCourses */}
                    </Link>
                    <Link to="/CourseMaterial">
                      <a>Study Material</a>
                      {/* Study Material */}
                    </Link>
                    <Link to="/Certificate">
                      <a>Certificate</a>
                    </Link>
                    <Link to="">
                      <a onClick={logout}>LogOut</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8 mt-1">
              <div className="card mb-3 content ">
                <h1 className="m-3 pt-3 ">About</h1>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-3 ">
                      <h5>Full Name</h5>
                    </div>
                    <div className="col-md-9 text-secondary">
                      {context.state.user.name}
                    </div>
                  </div>
                  <hr />
                  <div className="row ">
                    <div className="col-md-3">
                      <h5>Email</h5>
                    </div>
                    <div className="col-md-9 text-secondary">
                      {context.state.user.email}
                    </div>
                  </div>
                  <hr />
                  <div className="row ">
                    <div className="col-md-3">
                      <h5>Zip</h5>
                    </div>
                    <div className="col-md-9 text-secondary ">
                      {context.state.user.zip}
                    </div>
                  </div>
                  <hr />
                  <div className="row ">
                    <div className="col-md-3">
                      <h5>Address</h5>
                    </div>
                    <div className="col-md-9 text-secondary">
                      {context.state.user.address}
                    </div>
                  </div>
                  <hr />
                  <div className="row ">
                    <div className="col-md-3">
                      <h5>ModeOFStudy</h5>
                    </div>
                    <div className="col-md-9 text-secondary">
                      {context.state.user.modeOfStudy}
                    </div>
                  </div>
                  <hr />
                  <div className="row ">
                    <div className="col-md-3">
                      <h5>Gender</h5>
                    </div>
                    <div className="col-md-9 text-secondary">
                      {context.state.user.gender}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Profile;
