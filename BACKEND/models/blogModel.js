const mongoose = require("mongoose");

const {Schema}=mongoose;

const contentSchema=new Schema({
   
    title:{
        type:String,
        require:true,
        
    },

   description:{
        type:String,
        require:true,
        
    },


    upcomingDate:{
        type:Date,
        require:true
    }

})

const Content=mongoose.model("content",contentSchema)
module.exports=Content
