import StudentNavBar from "./StudentsNavBar";
import "./TakenCourses.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
function TakenCourses() {
  var [c, setc] = useState([]);
  const navigate = useNavigate();
  const id = localStorage.getItem("_id");
  const Chatting = () => {
    navigate("/MainForm");
  };
  const VideoCall = () => {
    navigate("/VideoCallHomePage");
  };
  useEffect(() => {
    axios.post("http://localhost:4500/TakenCourses", { id }).then((res) => {
      setc(res.data.course);
    });
  }, []);
  return (
    <>
      {/* <StudentNavBar /> */}
      <h1 className="top-head">Taken Courses</h1>
      <table class="table table-light tbl">
        <thead className="tab">
          <tr>
            <th scope="col">Sl No.</th>
            <th scope="col">Course Taken</th>
            <th scope="col">Teacher</th>
            <th scope="col">Communicate</th>
          </tr>
        </thead>
        <tbody>
          {c.map((data, index) => {
            return (
              <>
                <tr>
                  <th scope="row">{index}</th>
                  <td>{data.course}</td>
                  <td>{data.teacherId}</td>

                  <td>
                    <button
                      type="button"
                      onClick={VideoCall}
                      class="btn me-1 btn-outline-dark"
                    >
                      Video Call
                    </button>
                    <button
                      type="button"
                      onClick={Chatting}
                      class="btn btn-outline-dark"
                    >
                      Chatting
                    </button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
export default TakenCourses;
