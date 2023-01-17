import { useState } from "react";
import axios from "axios";
const Event = () => {
  const [user, setUser] = useState({
    Eventname: "",
    EventDescription: "",
    startdate: "",
    enddate: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("This is the value", value);
    console.log("This is the name ", name);
    setUser({
      ...user,
      [name]: value,
    });
  };
  const AddEvent = () => {
    const responseData = axios
      .post("http://localhost:4500/EventDetails", user)
      .then((res) => alert(res))
      .catch((error) => {
        console.log("This is an error", error);
      });
  };
  return (
    <>
      <h1>Hello this is event </h1>
      <form>
        Event Name:{" "}
        <input
          name="Eventname"
          type="text"
          value={user.Eventname}
          onChange={handleChange}
        />
        Event Description :
        <input
          name="EventDescription"
          value={user.EventDescription}
          type="textArea"
          onChange={handleChange}
        />
        Event Start :{" "}
        <input
          name="startdate"
          value={user.startdate}
          onChange={handleChange}
          type="date"
        />
        Event End :{" "}
        <input
          name="enddate"
          value={user.enddate}
          onChange={handleChange}
          type="date"
        />
        <input type="button" value="Register" onClick={AddEvent} />
      </form>
    </>
  );
};
export default Event;
