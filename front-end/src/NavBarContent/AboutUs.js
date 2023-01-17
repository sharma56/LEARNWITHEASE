import music from "../imgs/music_class.jpg";
import founder from "../imgs/founder.jpeg";
import "./About.css";
import Navbar from "./Navbar";
function AboutUs() {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <div className="background-color">
          <div className="bg-1"></div>
          <div className="bg-2"></div>
        </div>
        <div className="about-container">
          <div className="img-container">
            <img src={founder} alt="image" />
          </div>
          <div className="text-container">
            <h1>About Us</h1>
            <p>
              <span style={{ color: "blue" }}>LearnwithEase</span> is a Platform
              where a student can get the personalised learning. Add the
              location and find the teacher nearby and get the classes and can
              clearfy the doubts.
            </p>
            {/* <p></p> */}
            {/* <a href="">Read more</a> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
