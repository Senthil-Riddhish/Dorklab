const mongoose=require("mongoose");
const password=encodeURI('riddhishwar');
const url=process.env.url;
console.log(process.env.url);
mongoose.connect(url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("DB connection successful");
}).catch(()=>{
    console.log("Not connected");
});
const dbConn=mongoose.connection;
module.exports=dbConn;