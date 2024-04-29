const path=require('path');
const express=require('express');
const router=express.Router();

router.get('/contact',(req,res,next)=>{
   res.sendFile(path.join(__dirname,'../','views','contact.html'))});
router.get('/about-us',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','about-us.html'))});
 router.get('/',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','index.html'))});
 router.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'../','views','404.html'))});
 module.exports=router;