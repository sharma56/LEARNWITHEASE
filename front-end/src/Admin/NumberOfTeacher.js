import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import ProfileNavBar from "./ProfileNavBar";
import { useNavigate } from "react-router-dom";
function NumberOfTeacher() {
  const navigate = useNavigate();
  const stu_table = {
    marginTop: "20px",
  };
  const [data, setData] = useState([]);
  const [count, setCount] = useState(1);
  const VideoCall = () => {
    navigate("/VideoCallHomePage");
  };
  useEffect(() => {
    axios
      .post("http://localhost:4500/NumberOfTeacher")
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      {/* <ProfileNavBar /> */}
      <h3>Total Number of Teachers in LearnWithEase</h3>
      <table class="table table-light">
        <thead>
          <tr>
            <th scope="col">Sl no</th>
            <th scope="col">Name</th>
            <th scope="col">zip</th>
            <th scope="col">email</th>
            <th scope="col">Communication</th>
          </tr>
        </thead>
        {data.map((data, index) => {
          return (
            <>
              <tbody>
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{data.name}</td>
                  <td>{data.zip}</td>
                  <td>{data.email}</td>
                  <td>
                    <button
                      onClick={VideoCall}
                      type="button"
                      class="btn me-1 btn-outline-dark"
                    >
                      Video Call
                    </button>
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
    </>
  );
}

export default NumberOfTeacher;
