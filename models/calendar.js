const mongoose=require('mongoose')


const SchemaCalendar=mongoose.Schema({
    id:{
        type:String,
        required:true,

    },
    title:{
        type:String,
        required:true,
        
    },
    start:{
        type:String,
        required:true,
        
    },
    end:{
        type:String,
        required:true,

    },
    allDay:{
        type:String,
        required:true,
        
    },
   
})

module.exports=mongoose.model('calendar',SchemaCalendar)