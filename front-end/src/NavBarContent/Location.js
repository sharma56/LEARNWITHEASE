import { useState } from "react";
import axios from "axios";
import searchbtn from "../imgs/search.png";
import "./Location.css";
import { useNavigate } from "react-router-dom";
function Location() {
  const navigate = useNavigate();
  const [zip, setZip] = useState();
  const [data, setData] = useState({});

  const FindTeacher = () => {
    // alert(value);
    axios
      .post("http://localhost:4500/Loc", { zip: zip })
      .then((res) => {
        alert("return");
        console.log(res);
        setData(res.data);
        const backend = res.data;

        console.log("This is the data", backend);
        if (res.status == 200) {
          navigate("/TeacherLocation", { state: backend });
        }
      })
      .catch((error) => {
        console.log("This is the catch one", error);
      });
  };
  const mystyle = {
    display: "block",
    marginleft: "200px",
    margintop: "20px",
    marginbottom: "22px",
    backgroundcolor: "#3F485B",
  };
  return (
    <div className="search-container">
      <form action="" className="search-bar">
        <input
          type="text"
          placeholder="Enter Pin Code"
          value={zip}
          onChange={(e) => setZip(e.target.value)}
        />
        <button type="button" onClick={FindTeacher}>
          <img src={searchbtn} alt="" />
        </button>
      </form>
    </div>

    // <div className="loc-parent container">
    //   <div className="loc-con">
    //     <h1 style={{ fontfamily: "monospace" }}>hello!! Guest</h1>
    //     <input
    //       className="loc-input"
    //       style={{ textalign: "center" }}
    //       type="text"
    //       value={zip}
    //       onChange={(e) => setZip(e.target.value)}
    //       placeholder="Enter Pin Code"
    //     />
    //     <button
    //       onClick={FindTeacher}
    //       type="button"
    //       style={mystyle}
    //       class="btn loc-btn me-1 btn-outline-dark"
    //     >
    //       Find Teacher
    //     </button>
    //   </div>
    // ==========================================================================================================================================
    // {
    /* <div class="container">
        <div class="box">
          <h1 style="font-family: monospace;">hello!! Guest</h1>
          <input
            type="text"
            class="textbx"
            placeholder="Enter your Name"
            style="text-align: center;"
          />
          <button
            onclick="window.location.href='learn.html'"
            style="display: block; margin-left: 200px; margin-top: 20px; margin-bottom: 22px;"
            class="btn"
          >
            Enter
          </button>
        </div>
      </div> */
    // }
    // </div>
  );
}
export default Location;
