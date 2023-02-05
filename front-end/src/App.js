// import "../node_modules/bootstrap/dist/css/bootstrap/.min.css";
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import backgroundImage from "./imgs/background-image.jpeg";
import "./App.css";
import "bootstrap";
import Courses from "./CoursesDir/Courses";
import TeacherSignUp from "./UserAuth/Register/TeacherSignUp";
import SignUp from "./UserAuth/Register/StudentSignUp";
import Navbar from "./NavBarContent/Navbar";
import Login from "./UserAuth/Login/Login";
import AboutUs from "./NavBarContent/AboutUs";
import DanceCom from "./CoursesDir/Dance";
import Music from "./CoursesDir/Music";
import Yoga from "./CoursesDir/Yoga";
import Drawing from "./CoursesDir/Drawing";
import Personality from "./CoursesDir/Personality";
import Communication from "./CoursesDir/Communication";
import TeacherLocation from "./TeacherNearLocation/TeacherLocation";
import Location from "./NavBarContent/Location";
import TeacherLogin from "./UserAuth/Login/TeacherLogin";
import AdminDashBoard from "./Admin/AdminDashBoard";
import ProfileNavBar from "./Admin/ProfileNavBar";
import NoOfStudents from "./Admin/NoOfStudents";
import StudentNavBar from "./Student/StudentsNavBar";
import CourseMaterial from "./Student/CourseMaterial";
import TakenCourses from "./Student/TakenCourses";
import OnlinePayment from "./Payment/OnlinePayment";
import AddCourses from "./Admin/AddCourses";
import NumberOfTeacher from "./Admin/NumberOfTeacher";
import MainForm from "./Chatting/MainForm";
import ChatRoom from "./Chatting/ChatRoom";
import VideoCallHomePage from "./VideoCall/Home";
import RoomPage from "./VideoCall/Room";
import Profile from "./Admin/Profile";
import TeacherProfile from "./Teachers/TeacherProfile";
import MyProvider from "./MyProvider.js";
import axios from "axios";
import AdminRegister from "./UserAuth/Register/AdminRegister";
import TeachersStudent from "./Teachers/TeachersStudent";
import RazorPay from "./Payment/RazorPay";
// import AdminLogin from "./Admin/AdminLogin";
import AdminLogin from "./UserAuth/Login/AdminLogin";
import AfterPayment from "./Payment/AfterPayment";
// import MusicModal from "./CoursesDir/MusicModel";

// import NumberOfClasses from "./TeacherNearLocation/NumberOfClasses";
// import { useContext } from "react";
import Event from "./Admin/Event";
import DisplayEvents from "./Admin/DisplayEvents";
import Certificate from "./Student/Certificate";
import AdminProfile from "./Admin/AdminProfile";
axios.defaults.withCredentials = true;
function App() {
  const [user, setUser] = useState(false);
  return (
    <MyProvider>
      <div className="App">
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/teacherSignup" element={<TeacherSignUp />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/DanceCom" element={<DanceCom />} />
          <Route path="/Music" element={<Music />} />
          <Route path="/Yoga" element={<Yoga />} />
          <Route path="/Drawing" element={<Drawing />} />
          <Route path="/Personality" element={<Personality />} />
          <Route path="/Communication" element={<Communication />} />
          <Route path="/TeacherLocation" element={<TeacherLocation />} />
          <Route path="/Location" element={<Location />} />
          <Route path="/TeacherLogin" element={<TeacherLogin />} />
          {/* <Route path="/TeacherLogin" element={<TeacherLogin/>}/> */}
          <Route path="AdminDashBoard" element={<AdminDashBoard />} />
          <Route path="ProfileNavBar" element={<ProfileNavBar />} />
          <Route path="NoOfStudents" element={<NoOfStudents />} />
          <Route path="StudentNavBar" element={<StudentNavBar />} />
          <Route path="CourseMaterial" element={<CourseMaterial />} />
          <Route path="TakenCourses" element={<TakenCourses />} />
          <Route path="OnlinePayment" element={<OnlinePayment />} />
          <Route path="AddCourses" element={<AddCourses />} />
          <Route path="NumberOfTeacher" element={<NumberOfTeacher />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="/MainForm" element={<MainForm />}></Route>
          <Route path="/chat/:roomName" element={<ChatRoom />}></Route>
          <Route
            path="VideoCallHomePage"
            element={<VideoCallHomePage />}
          ></Route>
          <Route path="/room/:roomId" element={<RoomPage />}></Route>
          <Route path="TeacherProfile" element={<TeacherProfile />} />
          <Route path="AdminRegister" element={<AdminRegister />} />
          <Route path="Certificate" element={<Certificate />} />
          <Route path="AdminLogin" element={<AdminLogin />} />
          <Route path="TeachersStudent" element={<TeachersStudent />} />
          <Route path="DisplayEvents" element={<DisplayEvents />} />
          <Route path="AdminProfile" element={<AdminProfile />} />
          <Route path="Event" element={<Event />} />
          <Route path="RazorPay" element={<RazorPay />} />
          {/* <Route path="MusicModal" element={<MusicModal />} /> */}
        </Routes>
      </div>
    </MyProvider>
  );
}

export default App;
