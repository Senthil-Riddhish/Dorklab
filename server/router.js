const express=require('express');

const router=express.Router();
const{
    user,
    getUser,
    deleteuser
}=require('./Controllers/user');
router.post('/addDetails',user);
router.get('/getDetails',getUser);
router.delete('/deleteDetails/:id',deleteuser);
module.exports=router;