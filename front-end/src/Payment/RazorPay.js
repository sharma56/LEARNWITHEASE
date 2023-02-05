import React, { useState } from "react";
import { MyContext } from "../MyProvider";
import { useContext } from "react";
import axios from "axios";
import "../NavBarContent/Location.css";
import searchbtn from "../imgs/search.png";
const RazorPay = () => {
  const context = useContext(MyContext);
  const [amount, setamount] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log();
    if (amount == "") {
      alert("Enter the amount");
    } else {
      console.log("This is the context", context.state.user.course[0].courseId);
      const courseId = localStorage.getItem("corserid");
      alert("rachalkjdkfjdkjfa");
      alert(courseId);
      const studentId = context.state.user._id;
      console.log("This is student ", studentId, courseId);
      const res = await axios.post("http://localhost:4500/MailPayment", {
        courseId,
        studentId,
      });
      console.log(res);
      var options = {
        key: "rzp_test_kOmFi9xF7Hc0Zk",
        key_secret: "V907RZr8AV6P0V63s2Z7qZVI",
        amount: amount * 100,
        currency: "INR",
        name: "LearnWithEase  ",
        description: "for testing purpose",
        handler: function (response) {
          alert(response.razorpay_payment_id);
        },
        prefill: {
          name: "Pushpendra Sharma",
          email: "pushpendrasharmaa2015@gmail.com",
          contact: "6360593623",
        },
        notes: {
          address: "LearnWithEase Corporate office",
        },
        theme: {
          color: "#3399cc",
        },
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
  };
  return (
    <>
      {/* <h1>Payment Using RazorPayment</h1>
      <br />
      <input
        type="text"
        placeholder="Enter the amount"
        value={amount}
        onChange={(e) => {
          console.log(e.target.value);
          setamount(e.target.value);
        }}
      />
      <br />
      <br />
      <button onClick={handleSubmit}>Submit</button> */}

      <div className="search-container">
        <form action="" className="search-bar">
          <input
            type="text"
            placeholder="Enter the amount"
            value={amount}
            onChange={(e) => {
              console.log(e.target.value);
              setamount(e.target.value);
            }}
          />
          <button type="button" onClick={handleSubmit}>
            <img src={searchbtn} alt="" />
          </button>
        </form>
      </div>
    </>
  );
};
export default RazorPay;
