const mongoose=require('mongoose')


const SchemaMedecin=mongoose.Schema({
    firstName:{
        type:String,
        required:true,

    },
    lastName:{
        type:String,
        required:true,
        
    },
    email:{
        type:String,
        required:true,
        
    },
    contact:{
        type:String,
        required:true,

    },
    address1:{
        type:String,
        required:true,
        
    },
    address2:{
        type:String,
        required:true,
        
    },
})

module.exports=mongoose.model('medecin',SchemaMedecin)