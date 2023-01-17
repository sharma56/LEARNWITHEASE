// import music from "../../imgs/music_class.jpg";
// import founder from "../../imgs/founder.jpeg";
// import loginImage from "../imgs/loginImage.jpeg";
import Navbar from "../../NavBarContent/Navbar";
import loginImage from "../../imgs/loginImage.jpeg";
import "../Login/Login.css";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import SignUp from "../Register/TeacherSignUp";
// import courses from '../Register/'
import { useContext } from "react";
import { MyContext } from "../../MyProvider";
import { message } from "antd";

function Login() {
  const context = useContext(MyContext);
  // console.log("This is the context", context.state.user.name);
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const userlogin = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const login = async () => {
    try {
      const resp = await axios.post("http://localhost:4500/StudentLogin", user);
      if (resp.data.success) {
        message.success("Logedin Successfully...");
        // localStorage.setItem("token", resp.data.token);

        localStorage.setItem("_id", resp.data.userLogin._id);
        context.updateUser(resp.data.userLogin);
        navigate("/Profile");
        // navigate("/RazorPay");
      } else {
        message.error(resp.data.error);
      }
    } catch (error) {
      console.log(error);
      message.error("You got an error");
    }
  };
  return (
    <>
      <Navbar />
      {console.log(user)}
      <style>{"body { background-color: cadetblue; }"}</style>
      <section class="Form my-4 mx-5">
        <div class="container">
          <div class="row login-row no-gutters">
            <div class="col-lg-5">
              <img src={loginImage} class="img-fluid login-img" alt="image" />
            </div>
            <div class="col-lg-7 px-5 pt-5">
              <h1 class="font-weight-bold py-3">Student Login</h1>
              <h4>Sign into your Account</h4>
              <form>
                <div class="form-row">
                  <div class="col-lg-7">
                    <input
                      type="email"
                      placeholder="Email-Address"
                      name="email"
                      value={user.email}
                      onChange={userlogin}
                      class="form-control my-3 p-4"
                    />
                  </div>
                </div>
                <div class="form-row">
                  <div class="col-lg-7">
                    <input
                      type="password"
                      name="password"
                      value={user.password}
                      onChange={userlogin}
                      placeholder="*******"
                      class="form-control my-3 p-4"
                    />
                  </div>
                </div>
                <div class="form-row">
                  <div class="col-lg-7">
                    <button
                      type="button"
                      class="login-btn1 mt-3 mb-5"
                      onClick={login}
                    >
                      Login
                    </button>
                  </div>
                </div>
                {/* <a href="#">Forget Password</a>
                <p>
                  Don't have an account?{" "}
                  <Link onClick={() => navigate("/signup")}>Register here</Link>
                </p> */}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
