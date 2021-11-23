const express=require('express');

const router=express.Router();
const{
    user,
    getUser,
    deleteuser,
    updateUser
}=require('./Controllers/user');
router.post('/addDetails',user);
router.get('/getDetails',getUser);
router.delete('/deleteDetails/:id',deleteuser);
router.put('/updateDetails/:id',updateUser);
module.exports=router;