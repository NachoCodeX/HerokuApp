const express=require('express');
const app=express();
const path=require('path');
const secure=require('express-force-https');
const serveStatic = require('serve-static');
const history=require('connect-history-api-fallback');



app.use(history());

// app.use(express.static(path.join(__dirname,'public')));
app.use(serveStatic(path.join(__dirname,'public')));




app.get('*',(req,res)=>res.sendFile(path.join(__dirname,'public','index.html')));





module.exports=app;