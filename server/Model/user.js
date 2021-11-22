const mongoose=require('mongoose');

const infoSchema=new mongoose.Schema({
    "title":{
        type:String,
        required:[true,"Please provide the title"]
    },
    "imageUrl":{
        type:String,
        required:[true,"Please provide the Image Url"]
    },
    "subtitle":{
        type:String,
        required:true
    },
    "description":{
        type:String,
        required:true
    },
    "keywords":[{
        type:String
    }]
});

const dbConn=mongoose.model('users',infoSchema);

module.exports=dbConn;