const express = require('express');
const path = require('path');
const app = express();
//const mongoose = require('mongoose');



 

app.use(express.static(path.join(__dirname, 'valentine.github.io-main')));

app.post("/foods", async (req, res) => {
    console.log(req.body);          // this would be the data sent with the request
   
});

app.post("/desserts", async (req, res) => {
    console.log(req.body);          // this would be the data sent with the request
 
});

app.post("/activities", async (req, res) => {
    console.log(req.body);          // this would be the data sent with the request
   
});


  

app.listen(3000, () => {
    console.log("App working BLYa");
});