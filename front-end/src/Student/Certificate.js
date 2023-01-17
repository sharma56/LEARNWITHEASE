import "./Certificate.css";
import { useContext } from "react";
import { MyContext } from "../MyProvider";

const Certificate = () => {
  const context = useContext(MyContext);
  return (
    <>
      <div class="container certificate-container">
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
      </div>
    </>
  );
};
export default Certificate;
