// const StudentLogin = require("../models/StudentLoginModel");
// const bcrypt = require("bcryptjs");

// const studentSignUpController = async (req, res) => {
//   try {
//     const existingUser = await StudentLogin.findOne({ email: req.body.email });
//     if (existingUser) {
//       return res
//         .status(200)
//         .send({ message: "User Alerdy Exist", success: false });
//     }
//     const password = req.body.password;
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);
//     req.body.password = hashedPassword;
//     const newStudent = new StudentLogin(req.body);
//     await newStudent.save();
//     res.status(201).send({ message: "Registerd Sucessfully", success: true });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({
//       success: false,
//       message: `Register Controller ${error.message}`,
//     });
//   }
// };
// const loginController = () => {};

// module.exports = { loginController, studentSignUpController };
