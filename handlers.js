const users = require("./models/users");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");

const signIn = async (req, res) => {
  console.log("wsel l signin");
  dotenv.config({ path: "./config.env" });
  const { username, password } = req.body;
  const ots = await users.findOne({ Username: username });
  if (ots) {
    const payload = {
      Role: ots.Role,
    };
    bcrypt.compare(password, ots.Password, function (err, result) {
      if (result) {
        const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
          algorithm: "HS256",
          expiresIn: 86400,
        });
        res.cookie("token", token, { maxAge: 86400 * 1000 });
        res.cookie("id", ots._id, { maxAge: 86400 * 1000 });
        res.status(200).json({ message: "Authentification Confirmé" });
      } else {
        res.status(400).json({ message: "Authentification échouée" });
      }
    });
  } else {
    res.status(400).json({ message: "Authentification échouée" });
  }
};

const logout = async (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logout" });
};

const welcome = async (req, res) => {
  const token = req.cookies["token"];

  if (token) {
    try {
	  
      jwt.verify(token, process.env.JWT_SECRET_KEY);
      res.json({ message: "Authentification Confirmé" });
    } catch (err) {
      res.status(400).json({ message: "Authentification échouée" });
    }
  } else {
    res.status(400).json({ message: "Authentification échouée" });
  }
};

module.exports = { signIn, logout, welcome };
