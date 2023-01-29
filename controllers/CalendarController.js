const calendar = require("../models/calendar");

exports.getAllcalendar = async (req, res) => {
  const ots = await calendar.find();
    res.status(200).json({
      success: true,
      message: "tout les Dates sont la",
      ots,
    });
};

exports.addNewcalendar = async (req, res) => {
  const ots = new calendar(req.body);
  if(ots.id && ots.title && ots.start && ots.end && ots.allDay){
  await ots.save();
  res.status(200).json({
    message: "Nouvelle Date ajouté",
  });}
  else{
    res.status(400).json({
      message: "Champs manquants",
    });
  }
};

exports.deletecalendar = async (req, res) => {
  fid = req.params.idprod;
  const element=await calendar.find( {"id":fid} )
  await calendar.deleteOne({ id: element[0].id});
  res.status(200).json({
    message: `la date avec l'id ${element.fid} est supprimé`,
  });
};
