const outils = require("../models/outils");

exports.getAlloutils = async (req, res) => {
  const ots = await outils
    .find()
    .skip(req.query.pageNumber * req.query.pageSize)
    .limit(parseInt(req.query.pageSize));
  const tmp = await outils.countDocuments();
  res.json({
    ots,
    tmp,
  });
};

exports.getSingleoutils = async (req, res) => {
  _id = req.params.idprod;
  const ots = await outils.findById(_id);
  res.status(200).json({
    success: true,
    message: `l'outil avec l'id ${_id} est la`,
    ots,
  });
};9

exports.addNewoutils = async (req, res) => {
  const ots = new outils(req.body);
  if (
    ots.Nom &&
    ots.Quantite &&
    ots.NumFournisseur &&
    ots.EmailFournisseur &&
    ots.addresse &&
    ots.Marque
  ) {
    console.log(ots.url =
      req.protocol + "://" + req.get("host") + "/uploads/" + req.file.filename)
    await ots.save();

    res.status(200).json({
      message: "Nouvel Outil ajouté",
    });
  } else {
    res.status(400).json({
      message: "Champ manquants inexistant",
    });
  }
};

exports.deleteoutils = async (req, res) => {
  _id = req.params.idprod;
  await outils.deleteOne({ _id });
  res.status(200).json({
    message: `l'outil avec l'id ${_id} est supprimé`,
  });
};

exports.updateoutils = async (req, res) => {
  _id = req.params.idprod;
  if (
    req.body.Nom ||
    req.body.url ||
    req.body.Quantite ||
    req.body.NumFournisseur ||
    req.body.EmailFournisseur ||
    req.body.addresse ||
    req.body.Marque
  ) {
    await outils.updateOne({ _id }, req.body);
    res.status(200).json({
      message: `l'outil avec l'id ${_id} est mis a jour`,
    });
  } else {
    res.status(400).json({
      message: "Champs manquants",
    });
  }
};
