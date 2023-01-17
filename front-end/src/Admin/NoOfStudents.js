import React from "react";
import { useEffect } from "react";
import axios from "axios";
import ProfileNavBar from "./ProfileNavBar";
import { useState } from "react";
function NoOfStudents() {
  const stu_table = {
    marginTop: "20px",
  };
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .post("http://localhost:4500/NumberOfStudent")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      {/* <ProfileNavBar /> */}
      {console.log(data)}
      <h3>Total Number of Students in LearnWithEase</h3>
      <table class="table table-light" style={{ stu_table }}>
        <thead>
          <tr>
            <th scope="col">Sl no</th>
            <th scope="col">Name</th>
            <th scope="col">Mode Of Study</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        {data.map((data, index) => {
          return (
            <>
              <tbody>
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{data.name}</td>
                  <td>{data.modeOfStudy}</td>
                  <td>{data.email}</td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
    </>
  );
}

export default NoOfStudents;
