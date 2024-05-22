const path=require('path');
const express=require('express');
const app=express();
const adminRoutes=require('./routes/admin');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,'public')));
app.use(adminRoutes);

app.listen(3003);