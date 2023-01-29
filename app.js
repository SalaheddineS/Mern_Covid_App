const express = require("express");
const app = express();
const routes = require("./routes/DashboardRoutes");
const route = require("./routes/AuthRoutes");
const admin = require("./routes/AdminRoutes");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const path = require('path')


app.use(cors({ credentials: true, origin: "*", exposedHeaders: "*", 
methods: "*", headers: "*", preflightContinue: true, optionsSuccessStatus: 200}));
dotenv.config({ path: "./config.env" });
//connection to db

//api
app.use(cookieParser("secret"));

app.use(express.json());
app.use(bodyParser.json());
app.use("/uploads", express.static("uploads"));
app.use(express.static("build"));
app.use("/api", route);

app.use(
  "/api",
  (req, res, next) => {
    const token = req.cookies["token"];
    if (token) {
      try {
        jwt.verify(token, process.env.JWT_SECRET_KEY);
        next();
      } catch (err) {
        res.status(400).json({ message: "Authentification échouée" });
      }
    } else {
      res.status(400).json({ message: "Authentification échouée" });
    }
  },
  routes
);

app.use(
  "/api",
  (req, res, next) => {
    const token = req.cookies["token"];

    if (token) {
      try {
        jwt.verify(token, process.env.JWT_SECRET_KEY);
        const decoded = jwt.decode(token);

        if (decoded.Role === "Admin") {
          next();
        }
      } catch (err) {
        res.status(400).json({ message: "Authentification échouée" });
      }
    } else {
      res.status(400).json({ message: "Authentification échouée" });
    }
  },
  admin
);
app.use('*',(_,res)=>{
  res.sendFile(path.join(__dirname,'build','index.html'))
})
mongoose.connect(process.env.DB).then(() => {
  app.listen(process.env.PORT);
  console.log("Database Connected");
});
