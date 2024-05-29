const express=require('express');
const bodyParser=require('body-parser');
const app=express();

app.use(bodyParser.urlencoded({extended:false}));

exports.getIndex=(req,res,next)=>{
    res.render('index');
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