const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Authenticate = require("../middleware/Authenticate");

require("../db/conn");
const Student = require("../models/StudentLoginModel");
const Teacher = require("../models/TeacherLoginModel");
const Courses = require("../models/CourseModel");
var nodemailer = require("nodemailer");
const Admin = require("../models/Admin");
const Event = require("../models/Event");

// ----------------------------------Student Register-----------------------------------------------------
router.post("/studentSignUp", async (req, res) => {
  try {
    const {
      name,
      email,
      phoneNumber,
      dob,
      modeOfStudy,
      address,
      zip,
      password,
      confirmPass,
    } = req.body.user;
    const { gender } = req.body;
    // const { image } = req.body.postImage.myFile;
    console.log(req.body.postImage.base64);
    console.log(gender);
    console.log(zip);
    console.log("This is the name in backend", gender);
    console.log(req.body);
    const student = await Student.findOne({ email });
    if (student) {
      res.status(200).send({ message: "User Already exists", success: false });
    }
    const studentUser = new Student({
      name: name,
      email: email,
      mobile: phoneNumber,
      dob: dob,
      modeOfStudy: modeOfStudy,
      address: address,
      zip: zip,
      gender: gender,
      password: password,
      confirmPass: confirmPass,
      image: req.body.postImage.base64,
    });
    await studentUser.save();
    res.status(201).send({ message: "Register Sucessfully", success: true });
  } catch (error) {
    console.log(error);
    res.send(500).send({
      success: false,
      message: `Register Controller ${error.message}`,
    });
  }
});

// -----------------------Login Route--------------------------------------------------
router.post("/StudentLogin", async (req, res) => {
  try {
    const userLogin = await Student.findOne({ email: req.body.email });
    if (!userLogin) {
      return res
        .status(200)
        .send({ message: "User not found", success: false });
    }
    const isMatch = await bcrypt.compare(req.body.password, userLogin.password);
    if (!isMatch) {
      return res.status(200).json({
        error: "invalid Credentials... Email Or Password",
        success: false,
      });
    }
    res
      .status(200)
      .send({ message: "Login Sucessfully..", success: true, userLogin });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: `Error in Login CTRL ${error.message}` });
  }
});

// -------------------------------------------Teacher SignUp------------------------------------------------------------

router.post("/TeacherSignUp", async (req, res) => {
  console.log("teacher sign up");
  try {
    const {
      name,
      email,
      phoneNumber,
      dob,
      specilization,
      address,
      start,
      end,
      zip,
      password,
      confirmPass,
    } = req.body.user;

    const teacher = await Teacher.findOne({ email });
    console.log(teacher);

    if (teacher)
      res.status(201).send({ message: "User exists", success: false });
    // else {
    const teacherUser = new Teacher({
      name: name,
      email: email,
      mobile: phoneNumber,
      dob: dob,
      specilization: specilization,
      address: address,
      zip: zip,
      start: start,
      end: end,
      gender: gender,
      password: password,
      confirmPass: confirmPass,
      image: req.body.postImage.base64,
    });
    await teacherUser.save();
    res.status(201).send({ message: "Register Sucessfully", success: true });
  } catch (error) {
    console.log(error);
    res.send(500).send({
      success: false,
      message: `Register Controller ${error.message}`,
    });
  }
  // }
});

// ---------------------------------------------Teacher Login -------------------------------------------

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Plz fill the fields!!!" });
    }
    const TeacherLogin = await Teacher.findOne({ email: email });
    if (!TeacherLogin) {
      return res
        .status(200)
        .send({ message: "User not found", success: false });
    }
    const isMatch = await bcrypt.compare(
      req.body.password,
      TeacherLogin.password
    );
    if (!isMatch) {
      return res.status(200).json({
        error: "invalid Credentials... Email Or Password",
        success: false,
      });
    }
    res
      .status(200)
      .send({ message: "Login Sucessfully..", success: true, TeacherLogin });
  } catch (err) {
    console.log(err);
  }
});

// =========================================================Admin Register==========================================================
router.post("/AdminRegister", async (req, res) => {
  const { name, email, phoneNumber, dob, address, password, confirmPass } =
    req.body.user;
  const { gender } = req.body;
  console.log(req.body);
  const admin = await Admin.findOne({ email });
  console.log(admin);

  if (admin) res.status(400).json({ message: "Admin exists" });
  else {
    const adminUser = new Admin({
      name: name,
      email: email,
      mobile: phoneNumber,
      dob: dob,
      address: address,
      gender: gender,
      password: password,
      confirmPass: confirmPass,
    });
    adminUser.save((err) => {
      if (err) {
        res.send(err);
      } else {
        res.json({ message: "Sucessfully Registered" });
      }
    });
  }
});

// ===========================================================Admin Login =================================================
router.post("/Adminlogin", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Plz fill the fields!!!" });
    }
    const AdminLogin = await Admin.findOne({ email: email });
    if (!AdminLogin) {
      return res.status(200).send({ message: "Not found", success: false });
    }
    const isMatch = await bcrypt.compare(
      req.body.password,
      AdminLogin.password
    );
    if (!isMatch) {
      return res.status(200).json({
        error: "invalid Credentials... Email Or Password",
        success: false,
      });
    }
    res
      .status(200)
      .send({ message: "Login Sucessfully..", success: true, AdminLogin });
  } catch (err) {
    console.log(err);
  }
});

// -----------------------------------------------------Location---------------------------------------------------------

router.post("/Loc", async (req, res) => {
  try {
    console.log("This is the location one");
    const { zip } = req.body;
    console.log(zip);
    const minimumLocation = zip - 1;
    const maximumLocation = zip + 1;
    // const data = await Teacher.find({ zip: { $gte: zip } });
    // if (!data) {
    //   let data = await Teacher.find({
    //     zip: { $gte: minimumLocation, $lt: maximumLocation },
    //   });
    //   res.send(data);
    // }

    const l = await Courses.find({ zipCode: zip });
    var data = [];

    for (var i = 0; i < l.length; i++) {
      var k = await Teacher.findById({ _id: l[i].teacher });
      data.push(k.name);
    }
    console.log(data.length);
    data.push(l);

    res.send(data);
  } catch (error) {
    console.log("This is to become a very comman error", error);
  }
});
// ----------------------------------------NumberOfTeacher ---------------------------------------
// =================================Working Absolutly fine==================================================
router.post("/NumberOfTeacher", async (req, res) => {
  try {
    console.log("This is to send the Number of teacher");
    const data = await Teacher.find();
    res.send(data);
  } catch (error) {
    console.log("This is to become a very comman error", error);
  }
});

// -------------------------------------------NumberOfStudent----------------------------------------------
router.post("/NumberOfStudent", async (req, res) => {
  try {
    console.log("This is to send the Number of teacher");
    const data = await Student.find();
    res.send(data);
  } catch (error) {
    console.log("This is to become a very comman error", error);
  }
});
///course_list

router.get("/course_list", async (req, res) => {
  try {
    const data = await Courses.find({});
    res.json({ list: data });
  } catch (error) {
    console.log("This is to become a very comman error", error);
  }
});

// ----------------------------------------------------TotalCourse---------------------------------------------------
router.post("/TotalCourses", async (req, res) => {
  try {
    console.log("This is to send the Number of teacher-Student");
    const data = await Courses.find();
    res.json({ data });
  } catch (error) {
    console.log("This is to become a very comman error", error);
  }
});

// ------------------------------------------------ADMIN ADDING COURSES---------------------------------------------------------
router.post("/AddCourse", async (req, res) => {
  const { courseTitle, coursePrice } = req.body.courseInfo;
  const { teacher_id } = req.body;

  const tea = await Teacher.findById({ _id: teacher_id });
  console.log(tea.zip);
  const data = await Courses.findOne({ courseTitle });
  console.log(data);

  if (data !== null) {
    if (data.teacher == teacher_id) {
      return res.status(400).send({ message: "Course Exist" });
    } else {
      const newCourse = await new Courses({
        courseTitle: courseTitle,
        coursePrice: coursePrice,
        courseImage: req.body.postImage.base64,
        teacher: teacher_id,
        zipCode: tea.zip,
      });
      newCourse.save((err) => {
        if (err) {
          res.send(err);
          console.log(err);
        } else {
          res.send({ message: "Course Added Sucessfully" });
        }
      });
    }
  } else {
    const newCourse = await new Courses({
      courseTitle: courseTitle,
      coursePrice: coursePrice,
      courseImage: req.body.postImage.base64,
      teacher: teacher_id,
      zipCode: tea.zip,
    });
    newCourse.save((err) => {
      if (err) {
        res.send(err);
        console.log(err);
      } else {
        res.send({ message: "Course Added Sucessfully" });
      }
    });
  }
});

// ===========================================================Check-in====================================================================

router.post("/checkin", async (req, res) => {
  const keyValue = req.body;
  const data = await Teacher.findById({});
  console.log(data);
  res.send(data.name);
});

// ===========================================================Confirm Payment================================================================
router.post("/confirmPayment", async (req, res) => {
  const { _id } = req.body;
  // console.log("This is the data in the req.body", _id);
  console.log(_id);
  const data = await Student.findByIdAndUpdate(_id, { payment: true })
    // const data = await Student.findByIdAndUpdate(_id, {
    //   teacher_id: "63ae5719bd0e3d091cac84cb",
    // console.log(data);
    .then(res.send("Successfully paid..."));
  // const teacherData = await Teacher.findById({ _id: data.teacher_id });
  // console.log(teacherData);
  // console.log("This is the data", data);
  // ===========================================Correct Upwards===========================================================================
  // const data = await Student.find;
});
// ============================================================ Access the data from the student about teacher =============================================
router.post("/", async (req, res) => {
  const { _id } = req.body;
  // console.log("This is the data in the req.body", _id);
  console.log(req.body);
  // const data = await Student.findByIdAndUpdate(_id, { payment: true }).then(
  const data = await Student.findByIdAndUpdate(_id, {
    teacher_id: "63ae5719bd0e3d091cac84cb",
  }).then(res.send("Updated...."));
  // const teacherData = await Teacher.findById({ _id: data.teacher_id });
  // console.log(teacherData);
  // console.log("This is the data", data);
});
// =============================================Download CourseMaterial==========================================================
router.get("/CourseMaterial", (req, res) => {
  // res.download("../BoyAvtar.jpg");
  // res.download("../img/BoyAvtar.jpg");
  res.send("This is me");
});

// ====================================================TeacherLocation===============================================================
router.post("/TeacherLocation", async (req, res) => {
  const { l, id } = req.body;
  console.log(l.course);

  const data = await Student.findById({ _id: id });
  var k = data.course;
  console.log(k.length);

  var course_x = await Courses.findById({ _id: l.courseId });
  var teacher = await Teacher.findById({ _id: course_x.teacher });
  var i = {
    teacherId: l.teacherId,
    courseId: l.courseId,
    course: l.course,
    date: l.date,
    NumberofDays: l.NumberofDays,
    modeofStudy: l.modeOfStudy,
    start: teacher.start,
    end: teacher.end,
  };
  k.push(i);
  await Student.findByIdAndUpdate({ _id: id }, { course: k });
  const data1 = await Student.findById({ _id: id });
  var z = { name: data1.name, _id: data1._id };

  var list_of_student = course_x.student;
  list_of_student.push(z);
  await Courses.findByIdAndUpdate(
    { _id: course_x._id },
    { student: list_of_student }
  );
  console.log(data1.course.length);
  res.send(data1);
});
// =================================================TeacherStudent==============================================
router.post("/TeacherStudent", async (req, res) => {
  const { id } = req.body;
  console.log(id);
  const course = await Courses.find({ teacher: id });
  console.log(course.length);
  res.json({ course: course });
});

// ================================================ Taken Courses ====================================================================
router.post("/TakenCourses", async (req, res) => {
  const { id } = req.body;
  console.log(id);
  const data = await Student.findById({ _id: id });
  console.log(data);
  res.json({ course: data.course });
});

//=  === ========================================check course ==========================================

router.post("/checkcourse", async (req, res) => {
  const { cid, sid } = req.body;
  console.log("checking course");
  var h = 0;
  const course = await Courses.findById({ _id: cid });
  for (var i = 0; i < course.student.length && h == 0; i++) {
    if (sid == course.student[i]._id) {
      h = 1;
    }
  }
  if (h == 1) {
    res.send("");
  } else {
    res.status(400).send("Course Exist");
  }
});
// ===========================================Event Store =======================================================
router.post("/EventDetails", async (req, res) => {
  console.log(req.body);
  const { Eventname, EventDescription, startdate, enddate } = req.body;

  const data = await Event.findOne({ Eventname });
  if (data) {
    return res.status(400).send("Course Exist");
  } else {
    const newEvent = await new Event({
      Eventname,
      EventDescription,
      startdate,
      enddate,
    });
    newEvent.save((err) => {
      if (err) {
        res.send(err);
      } else {
        res.send("Done");
      }
    });
  }
  res.send("Done");
});

// ===============================================Event Display==============================================
router.get("/EventDisplay", async (req, res) => {
  try {
    const data = await Event.find({});
    res.json(data);
  } catch (error) {
    console.log(error);
  }
});

// ===========================================Mail Payment===================================================
router.post("/MailPayment", async (req, res) => {
  try {
    console.log(" data sent \n\n");
    const { courseId, studentId } = req.body;
    console.log(courseId, studentId);
    const course = await Courses.findById(courseId);
    const student = await Student.findById(studentId);
    const lecture = await Teacher.findById(course.teacher);
    await hi(student.email, lecture.email, course.courseTitle);
    res.send("dfd");
  } catch (error) {
    console.log(error);
  }
});

const hi = async (student, lecture, course) => {
  console.log(student, lecture, course);
  console.log("mail is sending");
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.Email,
      pass: process.env.Password,
    },
    port: 465,
    host: "smtp.gmail.com",
  });
  // student
  var mailOptions = {
    from: process.env.Email,
    to: student,
    subject: course,
    text: course,
  };
  await transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });

  // teacher
  var mailOptions = {
    from: process.env.Email,
    to: lecture,
    subject: course,
    text: course,
  };
  await transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });

  return 1;
};
// ===========================================================================================================================================
router.get("/TeacherSignupCourseData", async (req, res) => {
  // const { id } = req.body;
  // console.log(id);
  const data = await Courses.find({});
  res.json({ course: data });
});

module.exports = router;
