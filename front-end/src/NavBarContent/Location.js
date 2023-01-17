import { useState } from "react";
import axios from "axios";
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
  return (
    <div className="loc-parent">
      <div className="container loc-con">
        <input
          className="loc-input"
          type="text"
          value={zip}
          onChange={(e) => setZip(e.target.value)}
          placeholder="Enter Pin Code"
        />
        <button
          onClick={FindTeacher}
          type="button"
          class="btn me-1 btn-outline-dark"
        >
          Find Teacher
        </button>
      </div>
    </div>
  );
}
export default Location;
