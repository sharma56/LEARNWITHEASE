import music from "../imgs/music_class.jpg";
import dance from "../imgs/dance1.jpg";
import yoga from "../imgs/yoga.jpg";
import communication from "../imgs/communication_skills.png";
import personality from "../imgs/personality-development.jpg";
import draw from "../imgs/drawing.png";
import Navbar from "../NavBarContent/Navbar";
import "./Courses.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
// import MusicModal from "./MusicModel";

function Courses() {
  const navigate = useNavigate();
  // useEffect(async () => {
  //   await axios.get("http://localhost:4500/Courses").then((res) => {
  //     console.log(res);
  //   });
  // }, []);
  return (
    <>
      <Navbar />
      <h1 className="courseHead">
        <b>Courses</b>
      </h1>
      <div className="container course-container con-box px-4">
        <div className="row gy-5 row-box">
          <div className="col course-card">
            <Link to="/MusicModel">
              <img
                src={music}
                className="img-courses course-img"
                alt="Music"
                name="imgg"
              />
            </Link>
          </div>
          <div className="col course-card">
            <img src={dance} className="img-courses" alt="Music" />
          </div>
          <div className="col course-card">
            <img src={yoga} className="img-courses" alt="Music" />
          </div>
        </div>
      </div>
      <div className="container course-container con-box px-4">
        <div className="row gy-5 row-box">
          <div className="col course-card">
            <img src={communication} className="img-courses" alt="Music" />
          </div>
          <div className="col course-card">
            <img src={personality} className="img-courses" alt="Music" />
          </div>
          <div className="col course-card">
            <img src={draw} className="img-courses" alt="Music" />
          </div>
        </div>
      </div>
    </>
  );
}
export default Courses;
