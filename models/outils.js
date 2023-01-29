const mongoose=require('mongoose')


const SchemaOutil=mongoose.Schema({
    Nom:{
        type:String,
        required:true,

    },
    url:{
        type:String,
        required:true,

    },
    Quantite:{
        type:String,
        required:true,
        
    },
    NumFournisseur:{
        type:String,
        required:true,
        
    },
    EmailFournisseur:{
        type:String,
        required:true,

    },
    addresse:{
        type:String,
        required:true,
        
    },
    Marque:{
        type:String,
        required:true,
        
    },
})

module.exports=mongoose.model('outil',SchemaOutil)