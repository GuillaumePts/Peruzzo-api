const express = require('express');
const app = express();
// const mongoose = require('mongoose')
const path = require('path');
const  https = require('https');
const fs = require('fs');
const axios = require('axios');
const cors = require('cors');

const api = require('./api_key')
console.log(api.key);

// gestion https
const server = https.createServer({ 
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert') 
}, app);

// gestion du body-parser et app.use
let bodyParser = require("body-parser");
const { url } = require('inspector');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json()); 
app.use(express.static(path.join(__dirname, 'public')))

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.options('/', (res,req) =>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


// gestions des requetes
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '/index.html'))
})

// app.get('/apikey', (req,res)=>{
//     res.send(api.key)
// })




// server écoute sur le port 9999
server.listen(9999, (req, res)=>{
    console.log("server ok ! : https://192.168.1.13:9999");
})