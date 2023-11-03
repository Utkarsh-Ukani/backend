require('dotenv').config();
const express = require('express');
// import express from 'express';
const app = express();
const port = 3000;

app.get('/',(req,res)=>{
    res.send("hello world!");
})

app.get('/twitter',(req,res)=>{
    res.send('twitter started')
})

app.get('/login',(req,res)=>{
    res.send('<h1>please login at my website</h1>')
})

app.get('/youtube',(req,res)=>{
    res.send('<h2>please login at youtube</h2>')
})

app.listen(process.env.PORT,()=>{
    console.log(`app listening at port ${port}`);
})