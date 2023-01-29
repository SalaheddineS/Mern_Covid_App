const medecins=require('../models/medecins')

exports.getAllmedecins=async(req,res)=>{
    const meds=await medecins.find();
    console.log(meds),
    res.status(200).json({
        success:true,
        message:"tout les medecins sont la",
        meds 
    })
}


exports.getSinglemedecins=async(req,res)=>{
_id=req.params.idprod;
const meds= await medecins.findById(_id)
console.log(meds)
res.status(200).json({
    success:true,
        message:`le medecin avec l'id ${_id} est la`,
        meds
})
}

exports.addNewMedecin=async(req,res)=>{
const meds= new medecins(req.body)
if(meds.firstName && meds.lastName && meds.email && meds.contact && meds.address1 && meds.address2 ){
await meds.save();
res.status(200).json({
    message:"Medecin ajouté"
})}
else{
    res.status(400).json({
        message:"Champs manquants"
    })
}
}

exports.deleteMedecin=async (req,res)=>{
_id=req.params.idprod
await medecins.deleteOne({_id})
    res.status(200).json({
        message:`le medecin avec l'id ${_id} est supprimé`,
    })
}

exports.updateMedecin=async(req,res)=>{
_id=req.params.idprod
if(req.body.firstName || req.body.lastName || req.body.email || req.body.contact || req.body.address1 || req.body.address2 ){
await medecins.updateOne({_id},req.body)
res.status(200).json({
    message:`le medecin avec l'id ${_id} est mis a jour`,
})}
else{
    res.status(400).json({
        message:"Champs manquants"
    })}
}