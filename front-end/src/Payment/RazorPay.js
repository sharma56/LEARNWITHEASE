import React, { useState } from "react";
const RazorPay = () => {
  const [amount, setamount] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount == "") {
      alert("Enter the amount");
    } else {
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
      <h1>Payment Using RazorPayment</h1>
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
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};
export default RazorPay;