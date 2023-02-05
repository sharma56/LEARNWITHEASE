import "./Certificate.css";
import { useContext } from "react";
import { MyContext } from "../MyProvider";

const Certificate = () => {
  const context = useContext(MyContext);
  return (
    <>
      {/* <div class="container certificate-container ">
        <h2>LearnWithEase</h2>
        <div class="logo">An Organization</div>

        <div class="marquee">Certificate of Completion</div>

        <div class="assignment">This certificate is presented to</div>

        <div class="person">{context.state.user.name}</div>

        <div class="reason">
          For deftly defying the laws of gravity
          <br />
          and flying high
        </div>
      </div> */}

      <div class="certificate">
        {console.log(context.state.user.name)}
        <h1>Certificate of Achievement</h1>
        <p>This certificate is presented to:</p>
        <h2>{context.state.user.name}</h2>
        <p>for completing the course:</p>
        <h3>Dance</h3>
        <p class="date">on January 1, 2023</p>
      </div>
    </>
  );
};
export default Certificate;

{
  /* <div class="certificate">
  <h1>Certificate of Achievement</h1>
  <p>This certificate is presented to:</p>
  <h2>John Doe</h2>
  <p>for completing the course:</p>
  <h3>Web Development 101</h3>
  <p class="date">on January 1, 2023</p>
</div> */
}

// .certificate {
//   width: 500px;
//   height: 400px;
//   background-color: #f2f2f2;
//   text-align: center;
//   padding: 40px;
// }

// h1, h2, h3, p {
//   font-family: sans-serif;
// }

// h1 {
//   font-size: 36px;
//   color: #333;
//   margin-bottom: 20px;
// }

// h2 {
//   font-size: 24px;
//   color: #333;
//   margin-bottom: 20px;
// }

// h3 {
//   font-size: 20px;
//   color: #333;
//   margin-bottom: 20px;
// }

// p {
//   font-size: 16px;
//   color: #555;
// }

// .date {
//   font-style: italic;
//   font-size: 14px;
//   color: #777;
//   margin-top: 40px;
// }
