import { Link } from "react-router-dom";
import bha from "../imgs/bharatnatyam.jpg";
// import bharatnatyam from "../imgs/bharatnatyam.jpg"
import { useContext } from "react";
import { MyContext } from "../MyProvider";

const AdminDashBoard = () => {
  const context = useContext(MyContext);
  console.log("This is the context ", context.state);
  const sty = {
    borderRadius: "50%",
    width: "50px",
    height: "50px",
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand logo" style={{ color: "white" }} href="#">
            LearnWithEase
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <Link
                to="/NoOfStudents"
                className="nav-link active nav-txt"
                aria-current="page"
              >
                Students
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/NumberOfTeacher"
                className="nav-link active nav-txt"
                aria-current="page"
              >
                Teachers
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/AddCourses"
                className="nav-link active nav-txt"
                aria-current="page"
              >
                Add Course
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Logout" className="nav-link active nav-txt">
                {/* <img src={bha} style={sty} alt="loading.." /> */}
                Logout
                {/* {context.state.user.age} */}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default AdminDashBoard;
