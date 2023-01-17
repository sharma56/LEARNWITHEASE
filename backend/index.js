const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const { urlencoded } = require("body-parser");
const multer = require("multer");
dotenv.config({ path: "./config.env" });

const PORT = 4500;
require("./db/conn");
// const StudentInfo = require("./models/StudentLoginModel");

// Linking the router files so it can be easy later to use
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.json({ limit: "900MB" }));
app.use(express.urlencoded({ extended: true, limit: "900mb" }));
app.use(
  bodyParser.urlencoded({
    extended: true,
    parameterLimit: 1000000,
    limit: "900mb",
  })
);
// ===================================================Routes===========================================================

app.use(require("./routes/auth"));
// app.get("/CourseMaterial", (req, res) => {
//   res.download("../BoyAvtar.jpg");
// });
const admin = require("./routes/Admin");
app.use("/admin", admin);
// const chatting = require("./routes/Chatting");
// app.use("/Chatting", chatting);

app.listen(PORT, (err) => {
  if (!err) {
    console.log(`https://localhost:${PORT}`);
  } else {
    console.log(`err`);
  }
});
