const express=require('express');
const bodyParser=require('body-parser');
const app=express();
const Memore = require('../models/memore');

app.use(bodyParser.urlencoded({extended:false}));


exports.SaveMemore = (req, res, next) => {
    //save data to database
    //memore.push(req.body.name);
    const memore = new Memore(req.body.firstName, req.body.surname,
         req.body.dateOfBirth, req.body.dateOfDeath, req.body.city, req.body.memoreContent);
    memore.save().then(() => { res.redirect('/'); }).catch(err => console.log(err));
}

exports.getIndex=(req,res,next)=>{
    res.render('index');
}

exports.getAddMemore=(req,res,next)=>{
    res.render('add-memore');
}

exports.getAboutUs=(req,res,next)=>{
    res.render('about-us');
}

exports.getQA=(req,res,next)=>{
    res.render('Q&A');
}

exports.getContact=(req,res,next)=>{
    res.render('contact');
}

exports.getError=(req,res,next)=>{
    res.render('404');
}

