import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
const DisplayEvents = () => {
  const [data, setData] = useState([]);
  const stu_table = {
    marginTop: "20px",
  };
  useEffect(() => {
    axios
      .get("http://localhost:4500/EventDisplay")
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <h1>Display Events</h1>
      {console.log(data)}
      <h3>Number Of Events</h3>
      <table class="table table-light" style={{ stu_table }}>
        <thead>
          <tr>
            <th scope="col">Event Number</th>
            <th scope="col">Event Name</th>
            <th scope="col">Event Discription</th>
            <th scope="col">Start Date</th>
            <th scope="col">End Date</th>
          </tr>
        </thead>
        {data.map((data, index) => {
          return (
            <>
              <tbody>
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{data.Eventname}</td>
                  <td>{data.EventDescription}</td>
                  <td>{data.startdate}</td>
                  <td>{data.enddate}</td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
    </>
  );
};
export default DisplayEvents;
