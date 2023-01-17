const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const TeacherSchema = new mongoose.Schema({
  teacher: {
    type: Boolean,
    default: true,
  },
  name: {
    type: String,
    trim: true,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    required: true,
  },
  mobile: {
    type: Number,
    require: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  specilization: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    trim: true,
    required: true,
  },
  zip: {
    type: String,
    trim: true,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    trim: true,
    required: true,
  },
  confirmPass: {
    type: String,
    trim: true,
    required: true,
  },
  payment: {
    type: Boolean,
    default: true,
  },
});

TeacherSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
    this.confirmPass = await bcrypt.hash(this.confirmPass, 12);
  }
  next();
});

// we are generating tokens
// TeacherSchema.methods.generateAuthToken = async function () {
//   try {
//     let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
//     console.log("This is this._id", this._id);
//     this.tokens = this.tokens.concat({ token: token });
//     await this.save();
//     return token;
//   } catch (err) {
//     console.log(err);
//   }
// };

const Teacher = mongoose.model("TEACHER", TeacherSchema);
module.exports = Teacher;
