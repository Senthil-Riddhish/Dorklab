const userModel=require('../Model/user');
const user=async(req,res)=>{
    console.log('inisde adduser');
    try{
        const{
            title,
            imageUrl,
            subtitle,
            description,
            keywords
        }=req.body;

        await userModel.create({
            title,
            imageUrl,
            subtitle,
            description,
            keywords
        }).then(respond=>{
            console.log(respond);
            res.json({status:200,message:respond});
        });

    }catch(error){
        res.json({status:500,message:error.message});
    }
};

const getUser=async(req,res)=>{
    try{
        const getDetails=await userModel.find({});
    
    if(getDetails.lenght!=0){
        res.json({status:200,message:getDetails});
    }else{
        res.json({status:500,message:"No Events Record Available"});
    }
    }catch(error){
        res.json({status:400,message:error.message});
    }
};
const deleteuser=async(req,res)=>{
    try{
        const{
            id
        }=req.params;
        console.log(typeof(id));
        const deleteuser=await userModel.deleteOne({id});
        console.log(deleteuser);
        res.json({status:400,message:deleteuser});
    }catch(error){
        res.json({status:400,status:error.message});
    }
}
module.exports={user,getUser,deleteuser};