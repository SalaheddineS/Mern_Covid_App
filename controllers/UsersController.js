const users = require("../models/users");
const bcrypt = require("bcryptjs");
exports.getAllusers = async (req, res) => {
  const ots = await users.find();
  console.log(ots),
    res.status(200).json({
      success: true,
      message: "tout les Utilisateurs sont la",
      ots,
    });
};

exports.getSingleusers = async (req, res) => {
  _id = req.params.idprod;
  const ots = await users.findById(_id);
  res.status(200).json({
    message: `l'utilisateur avec l'id ${_id} est la`,
    ots,
  });
};

exports.addNewusers = async (req, res) => {
  const ots = new users(req.body);
console.log("tnakeet")
  if (ots.Username && ots.Password && ots.Image && ots.Role && ots.Name) {
    ots.Password = bcrypt.hashSync(ots.Password, 10);
    await ots.save();
    res.status(200).json({
      message: "Nouvel utilisateur ajouté",
    });
  } else {
    res.status(400).json({
      message: "Champs manquants",
    });
  }
};

exports.deleteusers = async (req, res) => {
  _id = req.params.idprod;
  try {
    await users.deleteOne({ _id });
    res.status(200).json({
      message: `l'utilisateur avec l'id ${_id} est supprimé`,
    });
  } catch (e) {
    res.status(400).json({
      message: `l'utilisateur avec l'id ${_id} n'existe pas`,
    });
  }
};

exports.updateusers = async (req, res) => {
  _id = req.params.idprod;
  
  if (req.body.Password || req.body.Username||req.body.Image||req.body.Role||req.body.Name) {
    if(req.body.Password){req.body.Password = bcrypt.hashSync(req.body.Password, 10);}
    await users.updateOne({ _id }, req.body);
    res.status(200).json({
      message: `l'utilisateur avec l'id ${_id} est mis a jour`,
    });
  } else {
    res.status(400).json({
      message: "Champs manquants",
    });
  }
};
