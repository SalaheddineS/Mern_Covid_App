const mongoose=require('mongoose')


const SchemaUsers=mongoose.Schema({
    Username:{
        type:String,
        required:true,

    },
    Password:{
        type:String,
        required:true,

    },
    Image:{
        type:String,
        required:true,
    },
    Role:{
        type:String,
        required:true,},
    Name:{
        type:String,
        required:true,
    }
    
})

module.exports=mongoose.model('users',SchemaUsers)