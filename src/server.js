const express = require('express');
const path = require('path');
require('dotenv').config();
// import express from 'express';

const app = express();
const port = process.env.PORT || 8888; //port => hardcode
const hostname = process.env.HOST_NAME;


//config template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//config static files
app.use(express.static(path.join(__dirname, 'public')));

//khai bao route
app.get('/', (req, res) => {
    res.send('Hello World! & nodemon')
});

app.get('/abc', (req, res) => {
    res.send('check ABC!')
});

app.get('/tmd', (req, res) => {
    // res.send('<h1>Truong Minh Dat</h1>')
    res.render('sample.ejs')
});

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
});
