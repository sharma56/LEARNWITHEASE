import "../Payment/OnlinePayment.css";
import { useContext } from "react";
import { MyContext } from "../MyProvider";
import axios from "axios";
import { useState } from "react";
// import "../imgs";
import mc from "../imgs/mc.png";
import vi from "../imgs/vi.png";
import pp from "../imgs/pp.png";
import { useNavigate } from "react-router-dom";

function OnlinePayment() {
  const [id, setId] = useState("");
  const navigate = useNavigate();
  const context = useContext(MyContext);
  console.log("This is the state", context.state);
  const confirmPayment = async () => {
    // const id = context.state.user.name;
    setId(context.state.user._id);
    console.log("THIS IS THE ID I M PRINTITNG", id);
    axios
      .post("http://localhost:4500/confirmPayment", { _id: id })
      .then((res) => {
        // console.log(res.data);
        alert(res.data);
        alert("Course Taken Sucessfully...");
        navigate("/Profile");
      });
  };
  return (
    <>
      {/* value={context.state.user.name} */}
      <div className="payment-div">
        <div class="container payment-container">
          <h1>Confirm Your Payment</h1>
          <div class="first-row">
            <div class="owner">
              <h3>Owner</h3>
              <div class="payment-input-field">
                <input value={context.state.user.name} type="text" readOnly />
              </div>
            </div>
            <div class="cvv">
              <h3>CVV</h3>
              <div class="payment-input-field">
                <input type="password" />
              </div>
            </div>
          </div>
          <div class="second-row">
            <div class="card-number">
              <h3>Card Number</h3>
              <div class="payment-input-field">
                <input type="text" />
              </div>
            </div>
          </div>
          <div class="third-row">
            {/* <h3>Card Number</h3> */}
            <div class="selection">
              <div class="date">
                <select name="months" id="months">
                  <option value="Jan">Jan</option>
                  <option value="Feb">Feb</option>
                  <option value="Mar">Mar</option>
                  <option value="Apr">Apr</option>
                  <option value="May">May</option>
                  <option value="Jun">Jun</option>
                  <option value="Jul">Jul</option>
                  <option value="Aug">Aug</option>
                  <option value="Sep">Sep</option>
                  <option value="Oct">Oct</option>
                  <option value="Nov">Nov</option>
                  <option value="Dec">Dec</option>
                </select>
                <select name="years" id="years">
                  <option value="2020">2023</option>
                  <option value="2019">2024</option>
                  <option value="2018">2025</option>
                  <option value="2017">2026</option>
                  <option value="2016">2027</option>
                  <option value="2015">2028</option>
                </select>
              </div>
              <div class="cards">
                <img src={mc} alt="" />
                <img src={vi} alt="" />
                <img src={pp} alt="" />
              </div>
            </div>
          </div>
          {/* <a href="">Confirm</a> */}
          <button className="a click-me" onClick={confirmPayment}>
            Confirm
          </button>
        </div>
      </div>
    </>
  );
}
export default OnlinePayment;
