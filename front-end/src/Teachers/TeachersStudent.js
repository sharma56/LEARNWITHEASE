// import "..Student/TakenCourses.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
function TeachersStudent() {
  var [c, setc] = useState([]);

  const navigate = useNavigate();
  const id = localStorage.getItem("_id");
  const Chatting = () => {
    navigate("/MainForm");
  };
  const VideoCall = () => {
    navigate("/VideoCallHomePage");
  };
  // const k = async () => {
  //   await axios
  //     .post("http://localhost:4500/TeacherStudent", { id })
  //     .then((res) => {
  //       setc(res.data.course);
  //       console.log(res.data.course);
  //     });
  // };
  // k();
  var listhi = [];
  useEffect(() => {
    axios.post("http://localhost:4500/TeacherStudent", { id }).then((res) => {
      setc(res.data.course);
    });
  }, []);
  for (var i = 0; i < c.length; i++) {
    for (var j = 0; j < c[i].student.length; j++) {
      var l = { name: c[i].student[j].name, coursename: c[i].courseTitle };
      listhi.push(l);
    }
  }

  console.log(listhi);

  return (
    <>
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
          {listhi.map((data, index) => {
            return (
              <>
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{data.name}</td>
                  <td>{data.coursename}</td>

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

const hi = (data) => {};
export default TeachersStudent;
