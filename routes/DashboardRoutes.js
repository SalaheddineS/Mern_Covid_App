const express = require("express");
const routes = express.Router();
const multer = require("multer");
const path = require("path");
const Storage = multer.diskStorage({
    
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: Storage });
const {
  getAllmedecins,
  getSinglemedecins,
  addNewMedecin,
  deleteMedecin,
  updateMedecin,
} = require("../controllers/MedsController");
const {
  getAlloutils,
  getSingleoutils,
  addNewoutils,
  deleteoutils,
  updateoutils,
} = require("../controllers/OutilController");
const {
  getAllcalendar,
  addNewcalendar,
  deletecalendar,
} = require("../controllers/CalendarController");
const {
  getAllusers,
  getSingleusers,
} = require("../controllers/UsersController");

routes.route("/Medecin").get(getAllmedecins);
routes.route("/Medecin/:idprod").get(getSinglemedecins);
routes.route("/AddMedecin").post(addNewMedecin);
routes.route("/DeleteMedecin/:idprod").delete(deleteMedecin);
routes.route("/UpdateMedecin/:idprod").patch(updateMedecin);

routes.route("/outils").get(getAlloutils);
routes.route("/outils/:idprod").get(getSingleoutils);
routes.post("/Addoutils", upload.single("photo"),addNewoutils);
routes.route("/Deleteoutils/:idprod").delete(deleteoutils);
routes.route("/Updateoutils/:idprod").patch(updateoutils);

routes.route("/calendar").get(getAllcalendar);
routes.route("/Addcalendar").post(addNewcalendar);
routes.route("/Deletecalendar/:idprod").delete(deletecalendar);

routes.route("/users").get(getAllusers);
routes.route("/users/:idprod").get(getSingleusers);
module.exports = routes;
